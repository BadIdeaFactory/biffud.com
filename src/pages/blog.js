import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

import { SEOWrapper } from "../partials";

export default class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const prefix = data.site.siteMetadata.paths.blog;
    return (
      <Fragment>
        <SEOWrapper {...this.props} />
        <h1>All Posts</h1>
        {posts.map(({ node }) => {
          const { id, excerpt, frontmatter } = node;
          const { date, title, uid } = frontmatter;
          return (
            <Fragment key={id}>
              <Link to={`/${prefix}/${uid}`}>
                <h2>{title}</h2>
              </Link>
              <span>{date}</span>
              <p>{excerpt}</p>
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}

PostsPage.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query AllPostsQuery {
    site {
      siteMetadata {
        paths {
          blog
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/blog/*/.*/*.md/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            uid
            date(formatString: "MMMM YYYY")
            title
          }
        }
      }
    }
  }
`;

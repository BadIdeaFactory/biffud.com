import { graphql } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

import { Action } from "ui/components";
import { Helmet, Layout } from "ui/partials";

export default class BlogListingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const prefix = data.site.siteMetadata.paths.tldr;
    return (
      <Fragment>
        <Helmet {...this.props} title="Blog" />
        <Layout {...this.props}>
          <h1>All Posts</h1>
          {posts.map(({ node }) => {
            const { id, excerpt, frontmatter } = node;
            const { date, title, uid } = frontmatter;
            return (
              <Fragment key={id}>
                <Action to={`/${prefix}/${uid}`}>
                  <h2>{title}</h2>
                </Action>
                <span>{date}</span>
                <p>{excerpt}</p>
              </Fragment>
            );
          })}
        </Layout>
      </Fragment>
    );
  }
}

BlogListingPage.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query AllPostsQuery {
    site {
      siteMetadata {
        paths {
          tldr
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/tldr/*/.*/*.md/" } }
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

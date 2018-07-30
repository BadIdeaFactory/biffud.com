import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

export default class MentionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const mentions = data.allMarkdownRemark.edges;
    const prefix = data.site.siteMetadata.paths.press;
    return (
      <Fragment>
        <h1>All Mentions</h1>
        {mentions.map(({ node }) => {
          const { id, excerpt, frontmatter } = node;
          const { author, date, link, title, uid } = frontmatter;
          return (
            <Fragment key={id}>
              <Link to={`/${prefix}/${uid}`}>
                <h2>{title}</h2>
              </Link>
              <span>{date}</span>
              <p>{excerpt}</p>
              <p>
                by{" "}
                <a href={link} rel="author" target="_blank">
                  {author}
                </a>
              </p>
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}

MentionsPage.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query AllMentionsQuery {
    site {
      siteMetadata {
        paths {
          press
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/press/*/.*/*.md/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            uid
            author
            date(formatString: "MMMM YYYY")
            link
            source
            title
          }
        }
      }
    }
  }
`;

import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

export default class MentionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const mentions = this.props.data.allMarkdownRemark.edges;
    return (
      <Fragment>
        <h1>All Mentions</h1>
        {mentions.map(({ node }) => {
          const { id, excerpt, frontmatter } = node;
          const { path, title, date, authorLink, author } = frontmatter;
          return (
            <Fragment key={id}>
              <Link to={path}>
                <h2>{title}</h2>
              </Link>
              <span>{date}</span>
              <p>{excerpt}</p>
              <p>
                by{" "}
                <a href={authorLink} rel="author" target="_blank">
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
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/surfaced/*/.*/mention.md/" }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            date(formatString: "MMMM YYYY")
            title
            path
            author
            authorLink
          }
        }
      }
    }
  }
`;

import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

export default class WorksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    return (
      <Fragment>
        <h1>All Works</h1>
        {posts.map(({ node }) => (
          <Fragment key={node.id}>
            <Link to={node.frontmatter.path}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </Fragment>
        ))}
      </Fragment>
    );
  }
}

WorksPage.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query AllWorksQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/made/*/.*/work.md/" } }
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
          }
        }
      }
    }
  }
`;

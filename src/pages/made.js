import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

export default class WorksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const works = this.props.data.allMarkdownRemark.edges;
    return (
      <Fragment>
        <h1>All Works</h1>
        {works.map(({ node }) => {
          const { id, excerpt, frontmatter } = node;
          const { path, title, date } = frontmatter;
          return (
            <Fragment key={id}>
              <Link to={path}>
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

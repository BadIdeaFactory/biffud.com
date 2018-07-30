import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

import PATHS from "../../config/paths";

export default class WorksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const works = this.props.data.allMarkdownRemark.edges;
    const prefix = PATHS.portfolio;
    return (
      <Fragment>
        <h1>All Works</h1>
        {works.map(({ node }) => {
          const { id, excerpt, frontmatter } = node;
          const { uid, title, date } = frontmatter;
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

WorksPage.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query AllWorksQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/portfolio/*/.*/*.md/" } }
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

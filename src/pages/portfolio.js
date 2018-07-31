import { graphql, Link } from "gatsby";
import { object, shape } from "prop-types";
import React, { Component, Fragment } from "react";

import { SEOWrapper } from "../partials";

export default class WorksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const works = data.allMarkdownRemark.edges;
    const prefix = data.site.siteMetadata.paths.portfolio;
    return (
      <Fragment>
        <SEOWrapper {...this.props} />
        <h1>All Works</h1>
        {works.map(({ node }) => {
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

WorksPage.propTypes = {
  data: shape({
    allMarkdownRemark: object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query AllWorksQuery {
    site {
      siteMetadata {
        paths {
          portfolio
        }
      }
    }
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

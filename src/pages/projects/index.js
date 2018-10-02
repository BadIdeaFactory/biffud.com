import { graphql } from "gatsby";
import React from "react";

import { ProjectListingTpl } from "ui/templates";

export default props => <ProjectListingTpl {...props} />;

export const pageQuery = graphql`
  query AllWorksQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/projects/*/.*/*.md/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            uid
            date(formatString: "MMMM YYYY")
            title
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 400
                  maxHeight: 300
                  quality: 90
                  traceSVG: { color: "lightgray" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

import { graphql } from "gatsby";
import React from "react";

import { PeopleTpl } from "ui/templates";

export default props => <PeopleTpl {...props} />;

export const pageQuery = graphql`
  query AllMembersQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/people/*/.*/*.md/" } }
      sort: { order: DESC, fields: [frontmatter___score] }
    ) {
      edges {
        node {
          id
          frontmatter {
            bio
            fname
            github
            lname
            quote
            score
            twitter
            uid
            role {
              advisor
              corporate
              elected
              members
              minions
            }
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 300
                  maxHeight: 200
                  cropFocus: CENTER
                  duotone: { highlight: "#f00e2e", shadow: "#192550" }
                  traceSVG: {
                    color: "#ffffff"
                    optTolerance: 0.1
                    turdSize: 10
                    turnPolicy: TURNPOLICY_MINORITY
                  }
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

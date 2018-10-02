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
                fixed(
                  width: 125
                  height: 125
                  traceSVG: {
                    color: "#0000ff"
                    optTolerance: 0.1
                    turdSize: 10
                    turnPolicy: TURNPOLICY_MINORITY
                  }
                ) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

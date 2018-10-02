import { graphql } from "gatsby";
import React from "react";

import { MediaTpl } from "ui/templates";

export default props => <MediaTpl {...props} />;

export const pageQuery = graphql`
  query AllMentionsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/fame/*/.*/*.md/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            uid
            headline
            date(formatString: "MMMM YYYY")
            publication
            source
            project
            link
            score
            cover {
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

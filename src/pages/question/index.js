import { graphql } from "gatsby";
import React from "react";

import { FAQListingTpl } from "ui/templates";

export default props => <FAQListingTpl {...props} />;

export const pageQuery = graphql`
  query AllQuestionsQuery {
    membership: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/question/membership/*/.*/*.md/" }
      }
      sort: { order: ASC, fields: [frontmatter___score] }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            uid
            score
            question
          }
        }
      }
    }
    partnership: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//pages/question/partnership/*/.*/*.md/" }
      }
      sort: { order: DESC, fields: [frontmatter___score] }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            uid
            score
            question
          }
        }
      }
    }
  }
`;

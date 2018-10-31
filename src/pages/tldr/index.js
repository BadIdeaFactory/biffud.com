import { graphql } from "gatsby";
import React from "react";

import { BlogListingTpl } from "ui/templates";

export default props => <BlogListingTpl {...props} />;

export const pageQuery = graphql`
  query AllPostsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/tldr/.*post.md/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            uid
            date(formatString: "D MMM YYYY")
            title
          }
        }
      }
    }
  }
`;

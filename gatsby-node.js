const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  /* ASSIGN TEMPLATES */
  const PostTpl = path.resolve("src/templates/PostTpl.js");

  /* FETCH DATA */
  const posts = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pages/posts/.*.md/" } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  /* CREATE PAGES */
  posts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: PostTpl
    });
  });
};

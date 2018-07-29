const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  /* Fetch data */
  const mentions = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pages/surfaced/.*.md/" } }
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
  const posts = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pages/wrote/.*.md/" } }
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
  const works = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pages/made/.*.md/" } }
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

  /* List creators */
  const creators = [
    {
      src: mentions,
      component: path.resolve("src/templates/MentionTpl.js")
    },
    {
      src: posts,
      component: path.resolve("src/templates/PostTpl.js")
    },
    {
      src: works,
      component: path.resolve("src/templates/WorkTpl.js")
    }
  ];

  /* Create pages */
  creators.forEach((creator) => {
    const { src, component } = creator;
    src.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component
      });
    });
  });
};

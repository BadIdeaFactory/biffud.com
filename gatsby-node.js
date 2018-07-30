const path = require("path");
const paths = require("./config/paths.js");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  /* Fetch data */
  const press = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pages/press/.*.md/" } }
      ) {
        edges {
          node {
            frontmatter {
              uid
            }
          }
        }
      }
    }
  `);
  const posts = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pages/blog/.*.md/" } }
      ) {
        edges {
          node {
            frontmatter {
              uid
            }
          }
        }
      }
    }
  `);
  const works = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pages/portfolio/.*.md/" } }
      ) {
        edges {
          node {
            frontmatter {
              uid
            }
          }
        }
      }
    }
  `);

  /* List creators */
  const creators = [
    {
      src: press,
      component: path.resolve("src/templates/PressItemTpl.js"),
      prefix: paths.press
    },
    {
      src: posts,
      component: path.resolve("src/templates/BlogPostTpl.js"),
      prefix: paths.blog
    },
    {
      src: works,
      component: path.resolve("src/templates/PortfolioItemTpl.js"),
      prefix: paths.portfolio
    }
  ];

  /* Create pages */
  creators.forEach((creator) => {
    const { src, component, prefix } = creator;
    // const { src, component } = creator;
    src.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/${prefix}/${node.frontmatter.uid}`,
        // path: `${node.frontmatter.uid}`,
        component,
        context: {
          uid: node.frontmatter.uid
        }
      });
    });
  });
};

const path = require("path");
const paths = require("./lib/config/paths.js");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "lib"), "node_modules"]
    }
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  /* Fetch data */
  const fame = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pages/fame/.*.md/" } }
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
        filter: { fileAbsolutePath: { regex: "/pages/tldr/.*.md/" } }
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
        filter: { fileAbsolutePath: { regex: "/pages/projects/.*.md/" } }
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
      src: fame,
      component: path.resolve("lib/ui/templates/PressItemTpl.js"),
      prefix: paths.fame
    },
    {
      src: posts,
      component: path.resolve("lib/ui/templates/BlogPostTpl.js"),
      prefix: paths.tldr
    },
    {
      src: works,
      component: path.resolve("lib/ui/templates/PortfolioItemTpl.js"),
      prefix: paths.projects
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

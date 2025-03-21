const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "lib"), "node_modules"]
    }
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const definePageTpl = uid => {
    switch (uid) {
      case "contact":
        return path.resolve("lib/ui/templates/ContactTpl.js");
      case "eotm":
        return path.resolve("lib/ui/templates/EmojiTpl.js");
      case "about":
        return path.resolve("lib/ui/templates/AboutTpl.tsx");
      case "home":
        return path.resolve("lib/ui/templates/HomeTpl.js");
      case "people":
        return path.resolve("lib/ui/templates/PeopleTpl.js");
      case "media":
        return path.resolve("lib/ui/templates/MediaTpl.js");
      case "srslanding":
        return path.resolve("lib/ui/templates/LandingTpl.js");
      case "biflanding":
        return path.resolve("lib/ui/templates/LandingTpl.js");
      case "blog":
        return path.resolve("lib/ui/templates/BlogListingTpl.js");
      case "faq":
        return path.resolve("lib/ui/templates/FAQListingTpl.js");
      case "projects":
        return path.resolve("lib/ui/templates/ProjectListingTpl.js");
      default:
        return null;
    }
  };

  const pages = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pages/.*page.md/" } }
      ) {
        edges {
          node {
            frontmatter {
              uid
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
        filter: { fileAbsolutePath: { regex: "/pages/projects/.*project.md/" } }
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
      src: pages
    },
    {
      src: posts,
      component: path.resolve("lib/ui/templates/BlogPostTpl.tsx"),
      prefix: "tldr"
    },
    {
      src: works,
      component: path.resolve("lib/ui/templates/ProjectItemTpl.js"),
      prefix: "projects"
    }
  ];

  /* Create pages */
  creators.forEach(creator => {
    const { src, component, prefix } = creator;
    src.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const getPrefixed = () => `/${prefix}/${node.frontmatter.uid}`;
      createPage({
        path: node.frontmatter.path || getPrefixed(),
        component: component || definePageTpl(node.frontmatter.uid),
        context: {
          uid: node.frontmatter.uid
        }
      });
    });
  });
};

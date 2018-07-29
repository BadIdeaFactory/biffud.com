module.exports = {
  siteMetadata: {
    siteUrl: `https://biffud.com`,
    title: `biffud.com-v2 (2018)`
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [`gatsby-remark-copy-linked-files`, `gatsby-remark-images`] // just in case those previously mentioned remark plugins sound cool :)
      }
    }
  ]
};

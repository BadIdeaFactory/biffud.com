module.exports = {
  siteMetadata: {},
  plugins: [
    "gatsby-plugin-catch-links",
    `gatsby-plugin-image`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Overpass:300,400,400i,600,600i,800,800i`]
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lib/assets`,
        name: "assets"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 580,
              withWebp: true
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow"
            }
          },
          `gatsby-transformer-sharp`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`
        ]
      }
    }
  ]
};

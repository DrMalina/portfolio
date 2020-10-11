const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Maciej Malinowski Portfolio`,
    description: `Welcome to my personal, front-end developer's portfolio!`,
    author: `Maciej Malinowski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`Jost:400,500,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: path.join(__dirname, `src`, `markdown`),
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-graphql-codegen`,
    // }
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

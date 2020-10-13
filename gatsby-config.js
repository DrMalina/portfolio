const path = require(`path`);

const siteTitle = "Maciej Malinowski Portfolio";
const siteDescription =
  "Front end developer portfolio made with Gatsby.js, Typescript and Tailwind CSS by Maciej Malinowski - junior web developer.";
const siteAuthor = "Maciej Malinowski";
const siteUrl = "https://localhost:8000/";
const siteImage = `${siteUrl}/assets/icon512.png`;
const siteKeywords = ["frontend","front-end","web","developer","junior","portfolio","javascript","html","css","gatsby", "react","tailwind"];

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: siteAuthor,
    keywords: siteKeywords,
    language: `en`,
    url: siteUrl,
    image: siteImage,

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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        tailwind: true, // Enable tailwindcss support
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        codegen: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: `MM Portfolio`,
        start_url: `/`,
        background_color: `#f7fafc`,
        theme_color: `#8B40FC`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

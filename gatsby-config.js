const path = require(`path`);

require(`dotenv`).config({ path: '.env' });

const siteTitle = "Maciej Malinowski | Front-end Developer";
const siteDescription =
  "Junior front-end developer portfolio made by Maciej Malinowski.";
const siteAuthor = "Maciej Malinowski";
const siteUrl = "https://m-malinowski.me";
const siteImage = `${siteUrl}/images/OG.png`;
const siteKeywords = ["front end","front-end","web","developer","junior","portfolio","javascript","html","css","gatsby", "react","tailwind"];

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
        codegen: false // change to true if you want to re-run types gen on build
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
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
        icon: `src/assets/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

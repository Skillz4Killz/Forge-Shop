module.exports = {
  siteMetadata: {
    title: `Forge Shop Wiki`,
    description: `The best Forge Shop wiki stats site.`,
    author: `AngeloCant1 & Skillz4Killz`,
    url: `https://www.forgeshop.wiki`,
    image: `https://i.imgur.com/3xw6ZyV.png`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: "content",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `STWIKI`,
        short_name: `STWIKI`,
        start_url: `/`,
        background_color: `#F7B241`,
        theme_color: `#141b1e`,
        display: `fullscreen`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/constants/blueprints/`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cache`,
      options: {
        cachePublic: true
      }
    },
    `gatsby-plugin-styled-components`,
    'gatsby-transformer-javascript-frontmatter',
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

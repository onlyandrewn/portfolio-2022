module.exports = {
  siteMetadata: {
    title: `Andrew Nguyen | Crafting digital experiences`,
    description: `Andrew Nguyen is a journalist and developer at the Boston Globe, where he builds news apps and interactives.`,
    twitterUsername: `@onlyandrewn`,
    image: `/images/share.jpeg`,
    siteUrl: `https://www.andrewnguyen.ca`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrew Nguyen | Crafting digital experiences`,
        short_name: `Andrew Nguyen`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/favion.png`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-anchor-links`
  ],
};
module.exports = {
  siteMetadata: {
    title: "Andrew Nguyen | Crafting digital experiences",
    description: "Andrew Nguyen is a journalist and developer at the Boston Globe, where he builds news apps and interactives.",
    author: "Andrew Nguyen",
    imageUrl: "/images/header.jpeg",
    url: "https://andrewnguyen.ca/",
    twitterHandle: "@onlyandrewn"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-react-helmet`
  ],
};
module.exports = {
  siteMetadata: {
    title: `Crossfit Strive Bastrop`,
    description: `We're the first and only CrossFit provider in Bastrop. We help beginners and experienced athletes reach their fitness goals through CrossFit.`,
    keywords: `crossfit, bastrop, gym, fitness, conditioning, strength, lifting, weightlifting, nutrition, health, self-improvement`,
    author: `@chrisdesilva27`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/texas_logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

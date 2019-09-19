module.exports = {
  siteMetadata: {
    title: `Singapore's Bib Gourmand spots`,
    description: `See which ones of Singapore's 58 eateries with Bib Gourmand status are near you! Bib Gourmand is  the affordable version of Michelin starred restaurants. The selection is still made by Michelin but the meals have to be lower priced. In short: tasty food that doesn't break the bank. Now go find one near where you are!`,
    author: `Rabea Gleissner`,
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
  ],
}

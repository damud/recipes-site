/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Simple Recipes',
    description: 'Nice and clean recipes site.',
    author: '@johnsmilga',
    person: { name: 'john', age: 32},
    simpleData: ['item 1', 'item 2'],
    complexData: [
    { name: 'john', age:32  },
    { name: 'susan', age:21  },
    ],
  },
  plugins: [ `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `60ta58ec4pla`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: `8BxqwipUPitkG9QgMXJAt7jUYZuyeoFX8E70wivcgL8`,
    },
  },
],
}

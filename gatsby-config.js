module.exports = {
  pathPrefix: "/agneskalstrom.com",
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
  ],
}

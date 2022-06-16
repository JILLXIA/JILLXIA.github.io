import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `MyFirstGatsby`,
    siteUrl: `https://www.xiayubudi.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `mdx`,
      path: `${__dirname}/src/mdx/`,
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`]
    },
  },]
}

export default config

import type { GatsbyConfig } from "gatsby"
// https://www.gatsbyjs.com/plugins/gatsby-remark-autolink-headers/
// https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/
// https://www.gatsbyjs.com/plugins/gatsby-remark-images/
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
    // "gatsby-transformer-remark",
    "gatsby-remark-prismjs",
    "gatsby-remark-images",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
        plugins:[
          "gatsby-transformer-remark"
        ],
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          "gatsby-transformer-remark"
        ],
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     // Footnotes mode (default: true)
    //     footnotes: true,
    //     // GitHub Flavored Markdown mode (default: true)
    //     gfm: true,
    //     // Plugins configs
    //     plugins:[
    //       `gatsby-remark-prismjs`,
    //     ]
    //   }
    // }
  ]
}

export default config

const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }:any) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                  body
                  frontmatter {
                    date
                    title
                    description
                  }
                  slug
                }
                next {
                  frontmatter {
                    date
                    title
                  }
                  slug
                }
                previous {
                  frontmatter {
                    date
                    title
                  }
                  slug
                }
            }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
  result.data.allMdx.edges.forEach( (edge:any) => {
    const {node} = edge
    createPage({
      path: `/blog/${node.slug}`,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        product: edge,
      },
    })
  })
}
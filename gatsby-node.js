const path = require(`path`)
const slugify = require('slugify')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: 'path',
      value: `/blogs/${slugify(
        node.frontmatter.title,
        { replacement: '-', lower: true }
      )}`
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              path
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `
  ).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark &&
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.path,
          component: path.resolve(`./src/templates/blog_post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            title: node.frontmatter.title
          },
        })
      })
  })
}

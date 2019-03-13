const path = require(`path`)
var slugify = require('slugify')
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
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
    result.data.allMarkdownRemark && result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const slug = slugify(node.frontmatter.title, {lower: true, replacement: '-'})
      createPage({
        path: `/blogs/${slug}`,
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
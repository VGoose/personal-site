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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark (sort: {order: DESC, fields: frontmatter___date}) {
        totalCount
        edges {
          node {
            fields {
              path
            }
            frontmatter {
              draft
              title
              date(formatString: "MMMM DD, YYYY")
              description
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    return result.errors
  }
  // create posts
  result.data.allMarkdownRemark &&
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.draft) {
        return
      }
      createPage({
        path: node.fields.path,
        component: path.resolve(`./src/templates/blog_post.js`),
        context: {
          title: node.frontmatter.title
        },
      })
    })

  // create pagination pages
  if (result.data.allMarkdownRemark) {
    const { totalCount } = result.data.allMarkdownRemark
    const postsPerPage = 5
    const totalPages = Math.ceil(totalCount / postsPerPage)
    Array.from({ length: totalPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `blogs/page/${i + 1}`,
        component: path.resolve('./src/templates/blog_list.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          totalPages,
          currentPage: i + 1
        }
      })
    })
  }
}

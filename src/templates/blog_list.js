import React from 'react'
import { graphql, Link } from 'gatsby'

import PostList from '../components/post_list'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PaginationLinks from '../components/pagination_links'

const BlogList = ({ data, pageContext }) => (
  <Layout>
    <SEO title="Blog" keywords={[`software`, `react`, `gatsby`]} />
    <PostList posts={data.allMarkdownRemark.edges} />
    {
      pageContext.totalPages > 1
        ? <PaginationLinks
          totalPages={pageContext.totalPages}
          currentPage={pageContext.currentPage} />
        : null
    }
  </Layout>
)

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark (limit: $limit, skip: $skip, sort: 
      {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          fields {
            path
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`

export default BlogList

import React from 'react'
import { graphql } from 'gatsby'

import PostList from '../components/post_list'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PostList posts={data.allMarkdownRemark.edges} />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark (sort: {order: DESC, fields: frontmatter___date}) {
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

export default IndexPage

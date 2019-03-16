import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'

import style from './blog_post.module.css'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div className={style.container}
        dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        author
        title
      }
    }
  }
`

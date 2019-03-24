import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import style from './bio.module.css'

const Bio = ({ author }) => (
  <StaticQuery
    query={graphql`
      query {
        twitter: file(relativePath: {eq: "twitter_icon.png"}) {
          childImageSharp {
            fixed(width: 30, height: 30) {
                ...GatsbyImageSharpFixed
            }
          }
        }
        github: file(relativePath: {eq: "github_icon.png"}) {
          childImageSharp{
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      console.log(data) ||
      <div className={style.container}>
        <h1 className={style.author}>{author.toLowerCase()}</h1>
        <p className={style.desc}>Hi, this is my blog where
          I write about things that interest me.</p>
        <div className={style.iconContainer}>
          <a href="https://twitter.com/KneeOnBelly" target="_blank">
            <Img
              fixed={data.twitter.childImageSharp.fixed}
            />
          </a>
          <a href="https://github.com/VGoose">
            <Img
              fixed={data.github.childImageSharp.fixed}
            />
          </a>
        </div>
      </div>
    )}
  />
)

Bio.defaultProps = {
  author: 'first last'
}

Bio.propTypes = {
  author: PropTypes.string
}

export default Bio

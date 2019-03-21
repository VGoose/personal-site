import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectLink from '../components/project_link/project_link'

import style from './about.module.css'

const About = ({ data }) => (
  console.log(data) ||
  <Layout>
    <SEO title="About Me" />
    <h1>About Me</h1>
    <p>
      Hi, I'm a mechanical engineer who's really into software.
      I'm really passionate about React and the software surrounding it.
    </p>
    <p>
      Below are some of my projects that I've built (including this website!).
      Check out my <a target="_blank" href="https://github.com/vgoose">Github
      </a> forfull details and source code!
    </p>
    <div className={style.linksContainer}>
      {
        projects.map(p => (
          <ProjectLink
            key={p.name}
            title={p.name}
            image={data[p.imgName].childImageSharp.fixed}
            path={p.url}
            desc={p.desc}
          />
        ))
      }
    </div>
  </Layout>
)

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fixed(width: 80, height: 80, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
      }
    }
  }
`
export const query = graphql`
  {
    gogonow: file(relativePath: {eq: "gogonow.png"}) {
      ...squareImage
    }
    rn: file(relativePath: {eq: "rn.png"}) {
      ...squareImage
    }

  }
`

const projects = [
  {
    name: 'anhvo.io',
    url: 'https://github.com/VGoose/personal-site',
    imgName: 'gogonow',
    desc: `Personal site built with Gatsby and React hooks!`
  },
  {
    name: 'gogonow',
    url: 'https://github.com/VGoose/gogonow',
    imgName: 'gogonow',
    desc: `React Native day planner app with weather and MTA subway times. 
    Released on iOS Store, release for Google Playstore in development.`
  },
  {
    name: 'react native realistic deck swiper',
    url: 'https://github.com/VGoose/react-native-realistic-deck-swiper',
    imgName: 'rn',
    desc: `Open source animation project built with React Native Animated.
    Imitates The New Yorker App's cartoons swipe deck.  Published on npm.`
  },
]

export default About

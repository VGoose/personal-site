import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectLink from '../components/project_link/project_link'

const About = () => (
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
    {
      projects.map(p => (
        <ProjectLink
          title={p.name}
          image={p.img}
          path={p.url}
          desc={p.desc}
        />
      ))
    }
  </Layout>
)
const projects = [
  {
    name: 'anhvo.io',
    url: 'https://github.com/VGoose/personal-site',
    img: '..',
    desc: `Personal site built with Gatsby and React hooks!`
  },
  {
    name: 'gogonow',
    url: 'https://github.com/VGoose/gogonow',
    img: '..',
    desc: `React Native day planner app with weather and MTA subway times. 
    Released on iOS Store, release for Google Playstore in development.`
  },
  {
    name: 'React Native Realistic Deck Swiper',
    url: 'https://github.com/VGoose/react-native-realistic-deck-swiper',
    img: '..',
    desc: `Open source animation project built with React Native Animated.
    Imitates The New Yorker App's cartoons swipe deck.`
  },
]

export default About

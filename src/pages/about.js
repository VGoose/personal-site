import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

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
    <Project
      url='https://github.com/VGoose/react-native-realistic-deck-swiper'

    />
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
const Project = ({ name, url, img, desc }) => (
  <Link to={url}>
    <img src={img} />
    <h2>{name}</h2>
    <p>{desc}</p>
  </Link>
)

export default About

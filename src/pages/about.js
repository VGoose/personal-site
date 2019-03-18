import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
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
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

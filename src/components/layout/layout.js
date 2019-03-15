import React, { useEffect, useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import throttle from 'lodash/throttle'

import Header from '../header'
import Sidebar from '../sidebar'

import avatar from '../../../static/images/avatar.jpg'

import style from './layout.module.css'

const Layout = ({ children }) => {
  const getInitialView = () => window.innerWidth < 600
  const [isMobile, setIsMobile] = useState(getInitialView())
  useLayoutEffect(() => {
    if (typeof window !== `undefined`) {
      const handleResize = throttle(() => {
        setIsMobile(window.innerWidth < 600)
      }, 200)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => {
      const { title, author } = data.site.siteMetadata
      return (
        <React.Fragment>
          {isMobile
            ? <Header siteAuthor={author} siteTitle={title}
              avatarSource={avatar}
            />
            : <Sidebar siteTitle={title} avatarSource={avatar} />}
          <div className={style.container}>
            <main>{children}</main>
            <footer>
            </footer>
          </div>
        </React.Fragment>
      )
    }}
  />
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

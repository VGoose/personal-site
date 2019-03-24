import React, { useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import throttle from 'lodash/throttle'

import Header from '../header'
import Sidebar from '../sidebar'
import NavMenu from '../nav_menu'

import avatar from '../../../static/images/avatar.jpg'

import style from './layout.module.css'

const Layout = ({ children }) => {
  const getInitialView = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 600
    }
  }

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
        <div className={style.container}>
          {isMobile
            ? <>
              <Header
                siteAuthor={author}
                siteTitle={title}
                avatarSource={avatar}
              />
              <NavMenu />
            </>
            : <Sidebar siteTitle={title} avatarSource={avatar} />}
          <div className={style.content}>
            <main>{children}</main>
            <footer>
            </footer>
          </div>
          <div className={style.divider}></div>
        </div>
      )
    }}
  />
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

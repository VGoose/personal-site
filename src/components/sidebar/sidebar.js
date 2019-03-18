import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Bio from '../bio'

import Avatar from '../avatar'
import NavMenu from '../nav_menu'

import style from './sidebar.module.css'

const Sidebar = ({ siteTitle, avatarSource }) => (
  <div className={style.container}>
    <Avatar className={style.avatar} avatarSource={avatarSource} />
    <Bio className={style.bio} author="Anh Vo" />
    <NavMenu />
    <div className={style.divider}></div>
  </div>
)

Sidebar.propTypes = {
  siteTitle: PropTypes.string
}

Sidebar.defaultProps = {
  siteTitle: ''
}

export default Sidebar

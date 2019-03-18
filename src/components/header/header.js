import PropTypes from 'prop-types'
import React from 'react'

import Avatar from '../avatar'
import Bio from '../bio'

import style from './header.module.css'

const Header = ({ siteTitle, siteAuthor, avatarSource }) => (
  <>
    <header className={style.header}>
      <Avatar className={style.avatar} avatarSource={avatarSource} />
      <Bio className={style.bio} author={siteAuthor} />
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  avatarSource: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteAuthor: 'first last'
}

export default Header

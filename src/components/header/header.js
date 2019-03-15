import PropTypes from 'prop-types'
import React from 'react'

import Avatar from '../avatar'
import Bio from '../bio'

import headerStyle from './header.module.css'

const Header = ({ siteTitle, siteAuthor, avatarSource }) => (
  <>
    <header className={headerStyle.header}>
      <Avatar avatarSource={avatarSource} />
      <Bio author={siteAuthor} />
    </header>
    <hr className={headerStyle.hr} />
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

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Avatar from '../avatar'

import './sidebar.module.css'

const Sidebar = ({ siteTitle, avatarSource }) => (
  <React.Fragment>
    <h1>{siteTitle}</h1>
    <div className="container">
      <Avatar avatarSource={avatarSource} />
    </div>
  </React.Fragment>
)

Sidebar.propTypes = {
  siteTitle: PropTypes.string
}

Sidebar.defaultProps = {
  siteTitle: ''
}

export default Sidebar

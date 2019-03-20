import React from 'react'
import PropTypes from 'prop-types'

import style from './project_link.module.css'

const ProjectLink = ({ image, title, desc, path }) => (
  <a className={style.container} href={path}>
    <img src={image} />
    <h3>{title}</h3>
    <p>{desc}</p>
  </a>
)

ProjectLink.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  path: PropTypes.string,
}
export default ProjectLink

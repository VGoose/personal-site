import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import style from './project_link.module.css'

const ProjectLink = ({ image, title, desc, path }) => (
  <div className={style.container}>
    <a href={path} target="_blank">
      <Img
        className={style.imgContainer}
        imgStyle={style.img}
        fixed={image}
        alt={`${title} logo`}
      />
    </a >
    <div className={style.text}>
      <a href={path} target="_blank">
        <h3>{title}</h3>
      </a>
      <p>{desc}</p>
    </div>
  </div>
)

ProjectLink.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  path: PropTypes.string,
}
export default ProjectLink

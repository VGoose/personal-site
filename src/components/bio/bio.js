import React from 'react'
import PropTypes from 'prop-types'

import style from './bio.module.css'

const Bio = ({ author }) => (
  <div className={style.container}>
    <h1 className={style.author}>{author}</h1>
    <p className={style.desc}>Hi, this is my blog where
    I write about things that interest me.</p>
  </div>
)

Bio.defaultProps = {
  author: 'first last'
}

Bio.propTypes = {
  author: PropTypes.string
}

export default Bio

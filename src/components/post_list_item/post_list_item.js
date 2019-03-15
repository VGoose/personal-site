import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import style from './post_list_item.module.css'

const PostListItem = ({ title, date, description, path }) => (
  <div className={style.container}>
    <time className={style.date}>{date.toUpperCase()}</time>
    <Link className={style.link} to={path}>
      <h2 className={style.title}>{title}</h2>
    </Link>
    <p className={style.desc}>{description}</p>
  </div>
)
PostListItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.object,
  description: PropTypes.string,
}
export default PostListItem

import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import style from './pagination_links.module.css'

const PaginationLinks = ({ totalPages, currentPage }) => (
  <div className={style.container}>
    {Array.from({ length: totalPages }, (_, i) => (
      <Link
        key={i}
        to={i === 0 ? `/` : `blogs/page/${i + 1}`}
        getProps={() => isActive(i, currentPage)}
        className={style.link}
      >
        {i + 1}
      </Link>
    ))}
  </div>
)

const isActive = (i, currentPage) => {
  console.log('is called', i)
  return i + 1 === currentPage
    ? { style: { borderBottom: '1px solid #aaa' } }
    : {}
}

PaginationLinks.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number
}
export default PaginationLinks

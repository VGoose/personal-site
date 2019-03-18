import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import style from './avatar.module.css'

const Avatar = ({ avatarSource }) => (
  <React.Fragment>
    <Link to="/" className={style.container}>
      <div className={style.imgContainer}>
        <img className={style.img} src={avatarSource} />
      </div>
    </Link>
  </React.Fragment>
)
Avatar.propTypes = {
  avatarSource: PropTypes.string,
}
export default Avatar

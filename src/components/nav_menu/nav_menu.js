import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import style from './nav_menu.module.css'

const NavMenu = () => (
  <div className={style.container}>
    <nav className={style.nav}>
      <li className={style.item}>{<NavItem name='blog' path="/" />}</li>
      <li className={style.item}>{<NavItem name='about' path="about" />}</li>
    </nav>
    {/* <hr className={style.divider} /> */}
  </div>
)
const NavItem = ({ name, path }) => (
  <Link to={path} getProps={isActive}>
    {name}
  </Link>
)
const isActive = ({ isCurrent }) => (
  isCurrent ? { style: { borderBottom: '1px solid #aaa' } } : {}
)
NavMenu.propTypes = {
}
export default NavMenu

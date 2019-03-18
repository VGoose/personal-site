import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import style from './nav_menu.module.css'

const NavMenu = () => (
	<div className={style.container}>
		<nav className={style.nav}>
			<li className={style.item}>{<NavItem name='home' path="/" />}</li>
			<li className={style.item}>{<NavItem name='about' path="about" />}</li>
		</nav>
		<hr className={style.divider}/>
	</div>
)
const NavItem = ({ name, path }) => (
	<Link to={path}>
		{name}
	</Link>
)
NavMenu.propTypes = {

}
export default NavMenu
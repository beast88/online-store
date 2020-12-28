import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
	return(
		<nav>
			<h1>Fakea</h1>
			<ul className="nav-list">
			<Link to="/">
				<li>Home</li>
			</Link>

				<Link to="/shop">
					<li>Shop</li>
				</Link>

				<li onClick={props.handleClick}><i className="fa fa-shopping-bag"></i></li>

				<li>
					<a href="https://github.com/beast88/online-store" target="_blank" rel="noreferrer">
						<i className="fa fa-github"></i>
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
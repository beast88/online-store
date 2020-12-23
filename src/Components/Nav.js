import React from 'react'

const Nav = () => {
	return(
		<nav>
			<h1>Fakea</h1>
			<ul className="nav-list">
				<li><a href="#">Home</a></li>
				<li><a href="#">Shop</a></li>
				<li><a href="#"><i className="fa fa-shopping-bag"></i></a></li>
			</ul>
		</nav>
	)
}

export default Nav
import React from 'react'

const Nav = () => {
	return(
		<nav>
			<h1>Fakea</h1>
			<ul className="nav-list">
				<li><a href="#">Home</a></li>
				<li><a href="#">Shop</a></li>
				<li><a href="#"><i className="fa fa-shopping-bag"></i></a></li>
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
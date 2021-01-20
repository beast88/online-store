import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
	const displayTotal = props.cartLength > 0 ? 'total-items' : 'total-items hidden'

	return(
		<nav>
			<h1>Fakea</h1>
			<ul className="nav-list">
			<Link to="/online-store/">
				<li>Home</li>
			</Link>

				<Link to="/online-store/shop">
					<li>Shop</li>
				</Link>

				<li className="cart-icon" onClick={props.handleClick}>
					<i className="fa fa-shopping-bag"></i>
					<div className={displayTotal}>{props.cartLength}</div>
				</li>

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
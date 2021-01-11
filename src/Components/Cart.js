import React from 'react'

const Cart = (props) => {

	const hidden = props.cartOptions.visible === false ? "cart-bg hidden" : "cart-bg"

	console.log(props.cartOptions)

	return(
		<div className={hidden}>
			<div className="cart-container">
				<h3>Shopping Cart</h3>
				<i className="fa fa-times-circle" onClick={props.closeCart}></i>
			</div>
		</div>
	)
}

export default Cart
import React from 'react'

const Cart = (props) => {

	const hidden = props.cartOptions.visible === false ? "cart-bg hidden" : "cart-bg"

	console.log(props.cartOptions)

	return(
		<div className={hidden}>
			<div className="cart-container">

				<div className="cart-header">
					<h3>Shopping Cart</h3>
					<i className="fa fa-times-circle" onClick={props.closeCart}></i>
				</div>

				<div className="cart-contents">

				</div>

				<h6>Subtotal: {`£${Math.round(props.subtotal * 100) / 100}`}</h6>

				<div className="checkout-button">
					<button>Proceed to Checkout</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
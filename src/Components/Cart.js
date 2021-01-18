import React from 'react'
import CartItem from './CartItem'

const Cart = (props) => {

	const hidden = props.cartOptions.visible === false ? "cart-bg fadeOut" : "cart-bg fadeIn"

	const open = props.cartOptions.visible === false ? "cart-container closed" : "cart-container open"

	return(
		<div className={hidden}>
			<div className={open}>

				<div className="cart-header">
					<h3>Shopping Cart</h3>
					<i className="fa fa-times-circle" onClick={props.closeCart}></i>
				</div>

				<div className="cart-contents">

					{props.cartOptions.items.map((item, index) => {
						return <CartItem key={index} item={item} id={index} removeFromCart={props.removeFromCart} />
					})}

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
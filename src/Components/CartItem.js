import React from 'react'

const CartItem = (props) => {

	return(
		<div className="cart-item">
			<img src={props.item.image} alt={props.item.name} />

			<div className="cart-item-details">
				<p className="item-name">{props.item.name}</p>
				<p>{`£${props.item.price}`}</p>
			</div>

			<i className="fa fa-trash"></i>

		</div>
	)
}

export default CartItem
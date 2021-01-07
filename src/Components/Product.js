import React, { useState, useEffect } from 'react'
import Products from '../Assets/Products'

const Product = (props) => {

	const getItem = () => {
		setItem(Products.filter(product => {
			return product.id == props.match.params.id
		})[0])
	}

	useEffect(() => {
		getItem()
		props.resetQuant()
	}, [])

	const [item, setItem] = useState({})

	return(
		<div className="product-container">

			<div className="product-image">
				<img src={item.image} alt={item.name} />
			</div>

			<div className="product-details">

				<div className="details">
					<h3>{item.name}</h3>
					<h3>{item.price}</h3>

					<div className="add-to-cart">

						<div className="buttons-controller">

							<button onClick={props.decrement}>-</button>
							<h6>{props.quant}</h6>
							<button onClick={props.increment}>+</button>

						</div>

					</div>
				</div>

			</div>

		</div>
	)
}

export default Product
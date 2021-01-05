import React, { useState, useEffect } from 'react'
import Products from '../Assets/Products'

const Product = ({match}) => {
	const getItem = () => {
		setItem(Products.filter(product => {
			return product.id == match.params.id
		})[0])
	}

	useEffect(() => {
		getItem()
	}, [])

	//Probably want an asynch to let everything load in

	const [item, setItem] = useState({})

	return(
		<div>
			<h1>Something</h1>
			{console.log(item.name)}
		</div>
	)
}

export default Product
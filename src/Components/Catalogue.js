import React from 'react'

const Catalogue = (props) => {

	return (
		<div className="product-card">
			<img src={props.item.image} />

			<div className="card-details">
				<h4>{props.item.name}</h4>
				<h6>{props.item.price}</h6>
			</div>
		</div>
	)
}

export default Catalogue
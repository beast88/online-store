import React from 'react'

const Catalogue = (props) => {

	return (
		<span className="product-card" style={{'display': 'block'}}>
			<img src={props.item.image} />

			<div className="card-details">
				<h4>{props.item.name}</h4>
				<h6>{props.item.price}</h6>
			</div>
		</span>
	)
}

export default Catalogue
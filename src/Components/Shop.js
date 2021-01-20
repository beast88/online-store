import React, { useState, useEffect } from 'react'
import Products from '../Assets/Products'
import Categories from '../Assets/Categories'
import Catalogue from './Catalogue'
import { Link } from 'react-router-dom'

const Shop = () => {
	const [catId, setCatId] = useState(0)
	const [filteredProducts, setFilteredProducts] = useState([])

	const handleClick = (id) => {
		setCatId(id)
		productFilter(id)
	}

	const productFilter = (id) => {
		if(id === 0){
			setFilteredProducts(Products)
		} else {
			setFilteredProducts(Products.filter(product => {
				return product.categoryid === id
			}))
		}
	}

	useEffect(() => {
		productFilter(catId)
	}, [])

	return(
		<main className="shop-container">
			<aside className="nav-container">

				<ul className="shop-nav">
					{
						Categories.map(category => {
							return <li 
								key={category.id} 
								onClick={() => handleClick(category.id)}
								className={category.id === catId ? "selected" : ""}
							>
								{category.name}
							</li>
						})
					}
				</ul>

			</aside>

			<div className="shop-front">
				{
					filteredProducts.map(product => {
						return <Link key={product.id} to={`/online-store/shop/${product.id}`}><Catalogue key={product.id} item={product}/></Link>
					})
				}				
			</div>
		</main>
	)
}

export default Shop
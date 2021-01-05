import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Shop from './Components/Shop'
import Cart from './Components/Cart'
import Product from './Components/Product'

const App = () => {
  const [cartOptions, setCartOptions] = useState({
    visible: false,
    length: 0,
    items: []
  })

  const handleCartClick = () => {
    setCartOptions((prevCartOptions) => {
      return {...prevCartOptions, visible: true}
    })
  }

  const handleCloseCart = () => {
    setCartOptions((prevCartOptions) => {
      return {...prevCartOptions, visible: false}
    })
  }

  return(
    <Router>
      <Nav handleClick={handleCartClick} cartLength={cartOptions.length} />

      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/shop/:id" component={Product} />

      </Switch>

      <Cart cartOptions={cartOptions} closeCart={handleCloseCart}/>

    </Router>
  )
}

export default App

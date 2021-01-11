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

  const [quant, setQuant] = useState(1)

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

  const increment = () => {
    setQuant(quant + 1)
  }

  const decrement = () => {
    if(quant > 1) {
      setQuant(quant - 1)
    }
  }

  const resetQuant = () => {
    setQuant(1)
  }

  const addToCart = (item) => {
    let i = quant

    while(i > 0) {
      setCartOptions((prevCartOptions) => {
        return {...prevCartOptions,
                length: prevCartOptions.length + 1,
                items: [...prevCartOptions.items, item]
                }
      })

      i--
    }
  }

  return(
    <Router>
      <Nav handleClick={handleCartClick} cartLength={cartOptions.length} />

      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/shop/:id" render={(props) => (
                                  <Product 
                                    {...props} 
                                    quant={quant}
                                    increment={increment}
                                    decrement={decrement}
                                    resetQuant={resetQuant}
                                    addToCart={addToCart} 
                                  />
                                )} />

      </Switch>

      <Cart cartOptions={cartOptions} closeCart={handleCloseCart}/>

    </Router>
  )
}

export default App

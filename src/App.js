import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Shop from './Components/Shop'

const App = () => {
  return(
    <Router>
      <Nav />

      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />

      </Switch>

    </Router>
  )
}

export default App

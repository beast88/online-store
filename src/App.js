import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'

const App = () => {
  return(
    <Router>
      <Nav />
      <Home />
    </Router>
  )
}

export default App

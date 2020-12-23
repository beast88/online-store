import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Components/Nav'

const App = () => {
  return(
    <Router>
      <Nav />
    </Router>
  )
}

export default App

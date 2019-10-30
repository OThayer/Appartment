import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import RequestsIndexContainer from './RequestsIndexContainer'
import Index from './index'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/requests" component={RequestsIndexContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

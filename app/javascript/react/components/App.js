import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import RequestsIndexContainer from './RequestsIndexContainer'
import MaintenanceInfoPage from './MaintenanceInfo'
import Index from './index'
import Payments from './Payments'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/requests" component={RequestsIndexContainer}/>
        <Route exact path="/MaintenanceInfoPage" component={MaintenanceInfoPage}/>
        <Route exact path="/Payments" component={Payments}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

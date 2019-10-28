import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import Splash from './Splash'

export const App = (props) => {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Splash}/>
    </BrowserRouter>
  )
}

export default App

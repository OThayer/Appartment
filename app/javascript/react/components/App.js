import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import Index from './index'

export const App = (props) => {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Index}/>
    </BrowserRouter>
  )
}

export default App

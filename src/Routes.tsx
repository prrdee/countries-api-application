import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import CountryInfo from './pages/CountryInfo'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/countries/:name" component={CountryInfo} />
  </Switch>
)

export default Routes

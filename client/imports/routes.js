
import React from 'react'
import App from './App'
import Admin from './Admin'
import Login from './Login'
import Consts from './Consts'

import { Router, Route, browserHistory } from 'react-router';
export const routes    = () => (
  <Router history     = {browserHistory}>
      <Route path   = "/"                 component = {App}/>
      <Route path   = "/:page"            component = {App}/>
      <Route path   = {Consts.LOGOUT}       component = {App}/>
  </Router>
)

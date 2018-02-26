
import React from 'react'
import App from './App'
import Admin from './Admin'
import Login from './Login'

import { Router, Route, browserHistory } from 'react-router';
export const routes    = () => (
  <Router history     = {browserHistory}>
      <Route path   = "/"                 component = {Login}/>
      <Route path   = "/supermarket/:category"      component = {App}/>
      <Route path   = "/admin"            component = {Admin}/>
  </Router>
)

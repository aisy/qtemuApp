import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainPage from '../pages/MainPage'

const RouterApp = () => {
  return (
    <Router>
      <Switch>

        <Route path={"/"}><MainPage /></Route>
      </Switch>
    </Router>
  )
}

export default RouterApp
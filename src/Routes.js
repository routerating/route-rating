import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const SignUpPage = lazy(() => import ('./pages/SignUpPage'))

export default () => (
  <React.Suspense fallback={<div />}>
    <Switch>
      <Route path="/signup" exact component={SignUpPage} />
      <Route path="*" component={<h1>Hi</h1>} />
    </Switch>
  </React.Suspense>
)

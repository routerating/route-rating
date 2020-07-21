import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const SignUpPage = lazy(() => import ('./pages/SignUpPage'))
const GymsPage = lazy(() => import ('./pages/GymsPage'))

export const RouteLinks = {
  SIGN_UP: '/signup',
  HOME: '/',
  SIGN_IN: '/signin',
  PROFILE: '/profile',
  GYMS: '/gyms'
}

export default () => (
  <React.Suspense fallback={<div />}>
    <Switch>
      <Route path={RouteLinks.SIGN_UP} exact component={SignUpPage} />
      <Route path={RouteLinks.GYMS} exact component={GymsPage} />
      <Route path="*" component={GymsPage} />
    </Switch>
  </React.Suspense>
)

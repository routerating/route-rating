import React, { lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

const SignUp = lazy(() => import('./pages/SignUp'))
const SignIn = lazy(() => import('./pages/SignIn'))
const Profile = lazy(() => import('./pages/Profile'))
const Gyms = lazy(() => import('./pages/Gyms'))
const Gym = lazy(() => import('./pages/Gym'))
const Home = lazy(() => import('./pages/Home'))

export const RouteLinks = {
  SIGN_UP: '/signup',
  HOME: '/',
  SIGN_IN: '/signin',
  PROFILE: '/profile',
  GYMS: '/gyms',
}

const baseRouteProps = {
  childProps: PropTypes.object,
  component: PropTypes.any,
}

const AuthRoute = ({ childProps, redirect, component: C, ...otherProps }) => {
  return childProps.authenticated ? (
    <Route {...otherProps} render={() => <C {...childProps} />} />
  ) : (
    <Route {...otherProps} render={() => <Redirect to={redirect} />} />
  )
}

AuthRoute.propTypes = {
  ...baseRouteProps,
  redirect: PropTypes.string,
}

const UnauthRoute = ({ childProps, component: C, ...otherProps }) => (
  <Route {...otherProps} render={() => <C {...childProps} />} />
)

UnauthRoute.propTypes = baseRouteProps

const UnauthOnlyRoute = ({
  childProps,
  redirect,
  component: C,
  ...otherProps
}) => {
  return !childProps.authenticated ? (
    <Route {...otherProps} render={() => <C {...childProps} />} />
  ) : (
    <Route {...otherProps} render={() => <Redirect to={redirect} />} />
  )
}

UnauthOnlyRoute.propTypes = {
  ...baseRouteProps,
  redirect: PropTypes.string,
}

const Routes = ({ childProps }) => (
  <React.Suspense fallback={<div />}>
    <Switch>
      <UnauthOnlyRoute
        path={RouteLinks.SIGN_UP}
        redirect={RouteLinks.PROFILE}
        childProps={childProps}
        exact
        component={SignUp}
      />
      <UnauthRoute
        path={RouteLinks.GYMS}
        childProps={childProps}
        exact
        component={Gyms}
      />
      <UnauthRoute
        path={RouteLinks.GYMS}
        childProps={childProps}
        component={Gym}
      />
      <AuthRoute
        path={RouteLinks.PROFILE}
        redirect={RouteLinks.SIGN_UP}
        childProps={childProps}
        exact
        component={Profile}
      />
      <UnauthOnlyRoute
        path={RouteLinks.SIGN_IN}
        redirect={RouteLinks.PROFILE}
        childProps={childProps}
        exact
        component={SignIn}
      />
      <UnauthRoute path="*" childProps={childProps} component={Home} />
    </Switch>
  </React.Suspense>
)

Routes.propTypes = {
  childProps: PropTypes.object,
}

export default Routes

import React, { lazy } from 'react'
import { Redirect, Route, Switch, RouteProps } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ChildProps } from './App'

const SignUp = lazy(() => import('./pages/SignUp'))
const SignIn = lazy(() => import('./pages/SignIn'))
const Profile = lazy(() => import('./pages/Profile'))
const Gyms = lazy(() => import('./pages/Gyms'))
const Gym = lazy(() => import('./pages/Gym'))
const Home = lazy(() => import('./pages/Home'))

export enum RouteLinks {
  SIGN_UP = '/signup',
  HOME = '/',
  SIGN_IN = '/signin',
  PROFILE = '/profile',
  GYMS = '/gyms',
}

type BaseRouteProps = RouteProps & {
  childProps: ChildProps
  component: any
}

type RedirectRouteProps = BaseRouteProps & {
  redirect: string
}

const AuthRoute: React.FunctionComponent<RedirectRouteProps> = ({
  childProps,
  redirect,
  component: C,
  ...otherProps
}): JSX.Element => {
  return childProps.authenticated ? (
    <Route {...otherProps} render={() => <C {...childProps} />} />
  ) : (
    <Route {...otherProps} render={() => <Redirect to={redirect} />} />
  )
}

const UnauthRoute: React.FC<BaseRouteProps> = ({
  childProps,
  component: C,
  ...otherProps
}): JSX.Element => (
  <Route {...otherProps} render={() => <C {...childProps} />} />
)

const UnauthOnlyRoute: React.FC<RedirectRouteProps> = ({
  childProps,
  redirect,
  component: C,
  ...otherProps
}): JSX.Element => {
  return !childProps.authenticated ? (
    <Route {...otherProps} render={() => <C {...childProps} />} />
  ) : (
    <Route {...otherProps} render={() => <Redirect to={redirect} />} />
  )
}

type RoutesProps = {
  childProps: ChildProps
}

const Routes: React.FunctionComponent<RoutesProps> = ({
  childProps,
}: RoutesProps): JSX.Element => (
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

export default Routes

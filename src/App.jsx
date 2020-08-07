import {
  AppBar,
  Button,
  CssBaseline,
  Snackbar,
  ThemeProvider,
  Toolbar,
  Typography,
  makeStyles,
  Box,
  LinearProgress,
} from '@material-ui/core'
import React, { Component } from 'react'

import { Alert } from '@material-ui/lab'
import { Auth, Hub } from 'aws-amplify'
import { Style, lightTheme } from './theme'
import Routes, { RouteLinks } from './Routes'
import constants from './constants'

import { exportClassComponent } from './utils'
import PropTypes from 'prop-types'

const navbarStyles = makeStyles(theme => ({
  appBar: {
    background: Style.LIGHT_NAVBAR_COLOR,
    color: Style.LIGHT_NAVBAR_TEXT,
    position: 'absolute',
  },
  toolbar: {
    color: 'inherit',
  },
  button: {
    color: 'inherit',
    textTransform: 'none',
    fontWeight: 'bolder',
    padding: `0 ${theme.spacing(2)}px`,
    borderRadius: '0',
  },
  buttonBorder: {
    borderRight: `1px solid ${Style.LIGHT_NAVBAR_TEXT}`,
  },
  brand: {
    flexGrow: 1,
    textDecoration: 'none',
    color: theme.palette.common.white,
  },
}))

const NavigationBar = ({ authenticated, loading }) => {
  const profileLink = authenticated ? RouteLinks.PROFILE : RouteLinks.SIGN_UP
  const classes = navbarStyles()

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          className={classes.brand}
          variant="h5"
          component="a"
          href={RouteLinks.HOME}>
          Route Rating
        </Typography>
        <Button
          className={`${classes.button} ${classes.buttonBorder}`}
          href={RouteLinks.HOME}>
          Home
        </Button>
        <Button
          className={`${classes.button} ${classes.buttonBorder}`}
          href={RouteLinks.GYMS}>
          Gyms
        </Button>
        <Button className={classes.button} href={profileLink}>
          Profile
        </Button>
      </Toolbar>
      <LinearProgress hidden={!loading} />
    </AppBar>
  )
}

NavigationBar.propTypes = {
  authenticated: PropTypes.bool,
  loading: PropTypes.bool,
}

const appStyles = theme => ({
  box: {
    paddingBottom: theme.spacing(10),
    width: '100%',
  },
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      authenticated: false,
      openSnack: false,
      snackSeverity: 'info',
      snackMessage: '',
      groups: [],
      loading: false,
    }

    this.classes = this.props.classes

    Hub.listen('auth', this.updateAuth)
  }

  publicSignIn = async () => {
    await Auth.signIn(
      constants.auth.publicUser.EMAIL,
      constants.auth.publicUser.PASSWORD,
    )
    return
  }

  updateAuth = async () => {
    let authenticated = false
    let groups = []

    try {
      const user = await Auth.currentAuthenticatedUser()
      authenticated =
        user && user.attributes.email !== constants.auth.publicUser.EMAIL
      groups = user.signInUserSession.accessToken.payload['cognito:groups']
    } catch (e) {
      await this.publicSignIn()
    }
    this.setState({ authenticated, groups })
  }

  componentDidMount = async () => {
    await this.updateAuth()
    this.setState({ isLoading: false })
    // await populateGyms()
  }

  openSnack = async (message, severity) => {
    this.setState({
      openSnack: true,
      snackMessage: message,
      snackSeverity: severity,
    })
  }

  handleSnackClose = async () => {
    this.setState({
      openSnack: false,
    })
  }

  setLoading = async loading => {
    this.setState({ loading })
  }

  render = () => {
    return (
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Snackbar
          open={this.state.openSnack}
          autoHideDuration={6000}
          onClose={this.handleSnackClose}>
          <Alert
            onClose={this.handleSnackClose}
            severity={this.state.snackSeverity}>
            {this.state.snackMessage}
          </Alert>
        </Snackbar>
        <NavigationBar
          authenticated={this.state.authenticated}
          loading={this.state.loading}
        />
        <Box className={this.classes.box} />
        {!this.state.isLoading && (
          <Routes
            childProps={{
              authenticated: this.state.authenticated,
              openSnack: this.openSnack,
              groups: this.state.groups,
              setLoading: this.setLoading,
            }}
          />
        )}
      </ThemeProvider>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object,
}

export default exportClassComponent(App, appStyles)

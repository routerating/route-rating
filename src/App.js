import React, { Component } from 'react'
import Routes from './Routes'
import { withRouter } from 'react-router-dom'
import { RouteLinks } from './Routes'
import { lightTheme, Style } from './theme'
import { ThemeProvider, makeStyles, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Auth } from 'aws-amplify'

const navbarStyles = makeStyles((theme) => ({
  appBar: {
    background: Style.LIGHT_NAVBAR_COLOR,
    color: Style.LIGHT_NAVBAR_TEXT,
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
  },
}))

const NavigationBar = ({ authenticated }) => {
  const profileLink = authenticated ? RouteLinks.PROFILE : RouteLinks.SIGN_UP
  const classes = navbarStyles()

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.brand} variant="h5">
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
    </AppBar>
  )
}

const appStyles = (theme) => ({
  box: {
    paddingBottom: theme.spacing(10),
  },
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      authenticated: false,
    }

    this.classes = this.props.classes
  }

  componentDidMount() {
    Auth.currentAuthenticatedUser().then(() =>
      this.setState({ authenticated: true }),
    )
  }

  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <NavigationBar authenticated={this.state.authenticated} />
        <div className={this.classes.box} />
        <Routes childProps={{ authenticated: this.state.authenticated }} />
      </ThemeProvider>
    )
  }
}

export default withStyles(appStyles, { withTheme: true })(withRouter(App))

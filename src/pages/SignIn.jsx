import { Button, Container, Grid, Typography } from '@material-ui/core'
import React, { Component } from 'react'

import { Auth } from 'aws-amplify'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import FormTextField from '../components/FormTextField'
import { RouteLinks } from '../Routes'
import { exportClassComponent } from '../utils'
import PropTypes from 'prop-types'
import constants from '../constants'

const signInStyles = theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  createAccount: {
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  forgotPassword: {
    width: '100%',
    display: 'flex',
    paddingTop: theme.spacing(0.5),
  },
  link: {
    fontSize: '0.8rem',
  },
  signUp: {
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
})

export class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      email: null,
      password: null,
    }
    this.classes = this.props.classes
  }

  handleChange = async ({ target }) => {
    this.setState({ [target.id]: target.value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    try {
      await Auth.signIn(this.state.email, this.state.password)
    } catch (e) {
      this.props.openSnack('You could not be signed in.', 'error')
      console.error({
        name: constants.analytics.FAILED_SIGN_IN,
        error: { string: e.toString(), spread: { ...e } },
      })
    }
  }

  render = () => {
    return (
      !this.state.isLoading && (
        <Container component="main" maxWidth="sm">
          <Form title="Sign In" onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
              <FormTextField
                label="Email"
                required
                fullWidth
                variant="outlined"
                type="text"
                id="email"
                autoComplete="email"
                onChange={this.handleChange}
              />
              <FormTextField
                label="Password"
                required
                fullWidth
                variant="outlined"
                type="password"
                id="password"
                autoComplete="password"
                onChange={this.handleChange}>
                <Typography
                  component="pre"
                  className={`${this.classes.forgotPassword} ${this.classes.link}`}>
                  Forgot password? <Link>Recover password</Link>
                </Typography>
              </FormTextField>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.submit}>
              Sign in
            </Button>
            <Typography
              className={`${this.classes.signUp} ${this.classes.link}`}
              component="pre">
              Need an account? <Link to={RouteLinks.SIGN_UP}>Sign up</Link>
            </Typography>
          </Form>
        </Container>
      )
    )
  }
}

SignIn.propTypes = {
  classes: PropTypes.object,
  openSnack: PropTypes.func,
}

export default exportClassComponent(SignIn, signInStyles)

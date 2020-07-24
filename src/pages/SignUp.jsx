import { Button, Container, Grid, Typography } from '@material-ui/core'
import React, { Component } from 'react'

import { Auth } from 'aws-amplify'
import Form from '../components/Form'
import FormTextField from '../components/FormTextField'
import { Link } from 'react-router-dom'
import { RouteLinks } from '../Routes'
import { exportClassComponent } from '../utils'

import PropTypes from 'prop-types'
import constants from '../constants'

const signUpStyles = theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signIn: {
    textDecoration: 'none',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '0.8rem',
  },
})

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      name: '',
      email: '',
      phone: '',
      password: '',
      repeatPassword: '',
      confirmationCode: '',
      newUser: null,
    }
    this.classes = this.props.classes
  }

  handleChange = async ({ target }) => {
    target.error = false
    this.setState({ [target.id]: target.value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { name, email, phone, password } = this.state

    const nameArray = name.split(' ')
    const givenName = nameArray[0].trim()
    let familyName = ''

    nameArray.forEach(
      (value, index) => index !== 0 && (familyName += `${value} `),
    )
    familyName = familyName.trim()

    try {
      const newUser = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          given_name: givenName,
          family_name: familyName,
          phone_number: `+1${phone.replace(/[-+ ]/g, '')}`,
        },
      })
      this.setState({ newUser })
    } catch (e) {
      if (e.code === 'UsernameExistsException') {
        this.props.openSnack('Email is already being used.', 'warning')
      } else {
        this.props.openSnack('Unable to create your account.', 'error')
      }
      console.error({
        name: constants.analytics.FAILED_SIGN_UP,
        error: { string: e.toString(), spread: { ...e } },
      })
    }
  }

  handleConfirmation = async event => {
    event.preventDefault()

    const { confirmationCode, email, password } = this.state

    try {
      await Auth.confirmSignUp(email, confirmationCode)
      await Auth.signIn(email, password)
    } catch (e) {
      this.props.openSnack('Unable to confirm your account.', 'error')
      console.error({
        name: constants.analytics.FAILED_CONFIRM_ACCOUNT,
        error: { string: e.toString(), spread: { ...e } },
      })
    }
  }

  renderForm() {
    return (
      !this.state.isLoading && (
        <Container component="main" maxWidth="sm">
          <Form title="Create Account" onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
              <FormTextField
                label="Name"
                required
                fullWidth
                variant="outlined"
                type="text"
                id="name"
                autoComplete="name"
                inputProps={{ pattern: '^[A-Za-z]+ ([A-Za-z]| )+$' }}
                onInvalid={event => {
                  event.target.setCustomValidity(
                    'Your name must be the following form: First Last',
                  )
                  event.target.error = true
                }}
                onChange={this.handleChange}
              />
              <FormTextField
                label="Email"
                required
                fullWidth
                variant="outlined"
                type="text"
                id="email"
                autoComplete="email"
                inputProps={{
                  pattern: '^[A-Za-z0-9.+]+@[A-Za-z]+.[A-Za-z]+$',
                }}
                onChange={this.handleChange}
              />
              <FormTextField
                label="Phone Number"
                required
                fullWidth
                variant="outlined"
                type="text"
                id="phone"
                autoComplete="phone-number"
                inputProps={{
                  pattern: '^\\d{10}$',
                }}
                onInvalid={event => {
                  event.target.setCustomValidity(
                    'Phone number must be the following form: 1234567890',
                  )
                  event.target.error = true
                }}
                onChange={this.handleChange}
              />
              <FormTextField
                label="Password"
                required
                fullWidth
                variant="outlined"
                type="password"
                id="password"
                autoComplete="new-password"
                inputProps={{
                  pattern: '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$',
                }}
                onInvalid={event => {
                  event.target.setCustomValidity(
                    'Passwords must be at least 8 characters long and contain a capital letter, lowercase letter, and number.',
                  )
                  event.target.error = true
                }}
                onChange={this.handleChange}
              />
              <FormTextField
                label="Repeat Password"
                required
                fullWidth
                variant="outlined"
                type="password"
                id="repeatPassword"
                onChange={this.handleChange}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.submit}>
              Sign Up
            </Button>
            <Typography className={this.classes.signIn} component="pre">
              Have an account? <Link to={RouteLinks.SIGN_IN}>Sign in</Link>
            </Typography>
          </Form>
        </Container>
      )
    )
  }

  renderConfirmation() {
    return (
      !this.state.isLoading && (
        <Container component="main" maxWidth="sm">
          <Form title="Confirm Account" onSubmit={this.handleConfirmation}>
            <Grid container spacing={2}>
              <FormTextField
                label="Confirmation Code"
                required
                fullWidth
                variant="outlined"
                type="text"
                id="confirmationCode"
                inputProps={{ pattern: '^\\d{6}$' }}
                onChange={this.handleChange}
                helperText="Please check your email for a 6 digit verification code from no-reply@verificationemail.com"
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.submit}>
              Confirm Account
            </Button>
          </Form>
        </Container>
      )
    )
  }

  render = () => {
    return this.state.newUser ? this.renderConfirmation() : this.renderForm()
  }
}

SignUp.propTypes = {
  classes: PropTypes.object,
  openSnack: PropTypes.func,
}

export default exportClassComponent(SignUp, signUpStyles)

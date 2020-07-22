import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { RouteLinks } from '../Routes'
import { TextField, Grid, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Auth } from 'aws-amplify'
import { withRouter } from 'react-router-dom'
import Form from '../components/Form'

const signUpPageStyles = (theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: 'none',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
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
      // address1: '',
      // address2: '',
      // city: '',
      // state: '',
      // zip: '',
      password: '',
      repeatPassword: '',
      confirmationCode: '',
      newUser: null,
    }
    this.classes = this.props.classes
    Auth.currentAuthenticatedUser().then((user) => console.log(user))
    console.log(this.props)
  }

  handleChange = async ({ target }) => {
    target.error = true
    this.setState({ [target.id]: target.value })
  }

  handleSubmit = async (event) => {
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
        try {
          const user = await Auth.signIn(email, password)
          this.props.setAuthenticated(user)
          this.props.history.push(RouteLinks.PROFILE)
        } catch (e) {
          if (e.code === 'UserNotConfirmedException') {
            alert('User already exists. Resending Verify Code')
            Auth.resendSignUp({
              username: email,
            })
            this.setState({ newUser: {} })
          } else {
            alert('User already exists')
            console.error({ ...e })
          }
        }
      } else {
        alert('Unable to create your account', e.message)
      }
    }
  }

  handleConfirmation = async (event) => {
    event.preventDefault()

    const { confirmationCode, email, password } = this.state

    try {
      await Auth.confirmSignUp(email, confirmationCode)
      const user = await Auth.signIn(email, password)

      this.props.setAuthenticated(user)
      this.props.history.push(RouteLinks.PROFILE)
    } catch (e) {
      alert('Unable to confirm your account', e.message)
      console.error({ ...e })
    }
  }

  renderForm() {
    return (
      !this.state.isLoading && (
        <Form title="Create Account" handleSubmit={this.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                required
                fullWidth
                variant="outlined"
                type="text"
                id="name"
                autoComplete="name"
                inputProps={{ pattern: '^[A-Za-z]+ ([A-Za-z]| )+$' }}
                onInvalid={(event) => {
                  event.target.setCustomValidity(
                    'Your name must be the following form: First Last',
                  )
                  event.target.error = true
                }}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
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
            </Grid>
            <Grid item xs={12}>
              <TextField
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
                onInvalid={(event) => {
                  event.target.setCustomValidity(
                    'Phone number must be the following form: 1234567890',
                  )
                  event.target.error = true
                }}
                onChange={this.handleChange}
              />
            </Grid>
            {/* <Grid item xs={12}>
                  <TextField
                    label="Street Address"
                    required
                    fullWidth
                    variant="outlined"
                    type="text"
                    id="address1"
                    autoComplete="address-line1"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Unit, Room, PO, etc."
                    fullWidth
                    variant="outlined"
                    type="text"
                    id="address2"
                    autoComplete="address-line2"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="City"
                    required
                    fullWidth
                    variant="outlined"
                    type="text"
                    id="city"
                    autoComplete="address-level2"
                    inputProps={{ pattern: '^[A-Za-z]+$' }}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="State"
                    required
                    fullWidth
                    variant="outlined"
                    type="text"
                    id="state"
                    autoComplete="address-level1"
                    inputProps={{ pattern: '^[A-Za-z]+$' }}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Zip Code"
                    required
                    fullWidth
                    variant="outlined"
                    type="text"
                    id="zip"
                    autoComplete="postal-code"
                    inputProps={{ pattern: '^\\d{5}$' }}
                    onChange={this.handleChange}
                  /> 
                </Grid> */}
            <Grid item xs={12}>
              <TextField
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
                onInvalid={(event) => {
                  event.target.setCustomValidity(
                    'Passwords must be at least 8 characters long and contain a capital letter, lowercase letter, and number.',
                  )
                  event.target.error = true
                }}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Repeat Password"
                required
                fullWidth
                variant="outlined"
                type="password"
                id="repeatPassword"
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={this.classes.submit}>
            Sign Up
          </Button>
          <Link to={RouteLinks.SIGN_IN} className={this.classes.link}>
            Sign in
          </Link>
        </Form>
      )
    )
  }

  renderConfirmation() {
    return (
      !this.state.isLoading && (
        <Form title="Confirm Account">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
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
      )
    )
  }

  render() {
    return this.state.newUser ? this.renderConfirmation() : this.renderForm()
  }
}

export default withStyles(signUpPageStyles, { withTheme: true })(
  withRouter(SignUp),
)

import { Button, Container, Grid } from '@material-ui/core'
import React, { Component } from 'react'

import { Auth } from 'aws-amplify'
import Form from '../components/Form'
import FormTextField from '../components/FormTextField'
import {
  exportClassComponent,
  deconstructAddress,
  constructAddress,
  baseClassComponentPropTypes,
} from '../utils'
import constants from '../constants'

const profileStyles = theme => ({
  button: {
    margin: theme.spacing(3, 0, 0),
  },
})

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      givenName: null,
      familyName: null,
      email: null,
      phone: null,
      address1: null,
      address2: null,
      city: null,
      state: null,
      zip: null,
      user: null,
    }

    this.classes = this.props.classes
  }

  componentDidMount = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      const {
        email,
        given_name: givenName,
        family_name: familyName,
        phone_number: phone,
        address,
      } = user.attributes

      const deconstructedAddress = await deconstructAddress(address)

      this.setState({
        email,
        familyName,
        givenName,
        user,
        phone: phone.substring(2),
        isLoading: false,
        ...deconstructedAddress,
      })
    } catch (e) {
      console.error({
        name: constants.analytics.FAILED_GET_USER,
        error: { string: e.toString(), spread: { ...e } },
      })
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const {
      familyName,
      givenName,
      phone,
      address1,
      address2,
      city,
      state,
      zip,
    } = this.state

    try {
      await Auth.updateUserAttributes(this.state.user, {
        // eslint-disable-next-line camelcase
        family_name: familyName,
        // eslint-disable-next-line camelcase
        given_name: givenName,
        // eslint-disable-next-line camelcase
        phone_number: `+1${phone}`,
        address: await constructAddress(address1, address2, city, state, zip),
      })
      this.props.openSnack('Successfully updated your profile.', 'success')
    } catch (e) {
      this.props.openSnack('There was an error updating your profile.', 'error')
      console.error({
        name: constants.analytics.FAILED_UPDATE_PROFILE,
        error: { string: e.toString(), spread: { ...e } },
      })
    }
  }

  handleSignOut = async event => {
    event.preventDefault()
    await Auth.signOut()
  }

  handleChange = async ({ target }) => {
    target.error = false
    this.setState({ [target.id]: target.value })
  }

  render = () => {
    const {
      email,
      address1,
      address2,
      city,
      state,
      givenName,
      familyName,
      phone,
      isLoading,
      zip,
    } = this.state
    return (
      !isLoading && (
        <Container component="main" maxWidth="sm">
          <Form onSubmit={this.handleSubmit} title="Your Profile">
            <Grid container spacing={2}>
              <FormTextField
                label="First Name"
                required
                fullWidth
                variant="outlined"
                type="text"
                id="givenName"
                autoComplete="given-name"
                inputProps={{ pattern: '^[A-Za-z]+$' }}
                onInvalid={event => {
                  event.target.setCustomValidity(
                    'Your name must be the following form: First',
                  )
                  event.target.error = true
                }}
                defaultValue={givenName}
                onChange={this.handleChange}
              />
              <FormTextField
                label="Last Name"
                required
                fullWidth
                variant="outlined"
                type="text"
                id="familyName"
                autoComplete="family-name"
                inputProps={{ pattern: '^[A-Za-z]+$' }}
                onInvalid={event => {
                  event.target.setCustomValidity(
                    'Your name must be the following form: Last',
                  )
                  event.target.error = true
                }}
                defaultValue={familyName}
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
                defaultValue={email}
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
                defaultValue={phone}
                onChange={this.handleChange}
              />
              <FormTextField
                label="Street Address"
                required
                fullWidth
                variant="outlined"
                type="text"
                id="address1"
                autoComplete="address1"
                defaultValue={address1}
                onChange={this.handleChange}
              />
              <FormTextField
                label="Unit, PO, etc"
                fullWidth
                variant="outlined"
                type="text"
                id="address2"
                autoComplete="address2"
                defaultValue={address2}
                onChange={this.handleChange}
              />
              <FormTextField
                label="City"
                required
                fullWidth
                variant="outlined"
                type="text"
                id="city"
                autoComplete="city"
                defaultValue={city}
                onChange={this.handleChange}
              />
              <FormTextField
                label="State"
                required
                fullWidth
                variant="outlined"
                type="text"
                id="state"
                autoComplete="state"
                defaultValue={state}
                onChange={this.handleChange}
              />
              <FormTextField
                label="Zip Code"
                required
                fullWidth
                variant="outlined"
                type="text"
                id="zip"
                autoComplete="zip"
                defaultValue={zip}
                onChange={this.handleChange}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.button}>
              Update Account
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.handleSignOut}
              className={this.classes.button}>
              Sign out
            </Button>
          </Form>
        </Container>
      )
    )
  }
}

Profile.propTypes = {
  ...baseClassComponentPropTypes,
}

export default exportClassComponent(Profile, profileStyles)

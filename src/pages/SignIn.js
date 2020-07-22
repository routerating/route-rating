import { Button, Container, Grid, withStyles } from '@material-ui/core'
import React, { Component } from 'react'

import { Auth } from 'aws-amplify'
import Form from '../components/Form'
import FormTextField from '../components/FormTextField'

const signInPageStyles = (theme) => ({
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

  handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await Auth.signIn(this.state.email, this.state.password)
      this.props.updateAuth()
    } catch (e) {
      alert('You could not be signed in')
      console.error({ ...e })
    }
  }

  render() {
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
                onChange={this.handleChange}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.submit}>
              Sign in
            </Button>
          </Form>
        </Container>
      )
    )
  }
}

export default withStyles(signInPageStyles, { withTheme: true })(SignIn)

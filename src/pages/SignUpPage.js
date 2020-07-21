import React, { Component } from 'react'

import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import { Link } from 'react-router-dom'
import { RouteLinks } from '../Routes'
import styled from 'styled-components'

const StyledCardDiv = styled.div`
  margin: 2rem auto;
  width: 100%;
  max-width: 30rem;
  background: #fff;
  padding: 2rem;
  border-radius: 0.5rem;

  h1 {
    display: block;
    width: 100%;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #2369ff;
  }
`

const StyledForm = styled.form`
  label > span {
    font-weight: bold;
    padding-top: 8px;
  }
`

const StyledButton = styled(Button)`
  margin: 1rem auto;
`

class SignUpPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      name: '',
      email: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      password: '',
      repeatPassword: '',
    }
  }

  handleChange = (event) => {
    event.target.classList.remove('invalid')
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    console.log(this.state)
  }

  render() {
    return (
      <StyledCardDiv>
        <h1>Create an account</h1>
        <StyledForm onSubmit={this.handleSubmit}>
          <Input
            placeholder="Name"
            required
            type="text"
            id="name"
            autocomplete="name"
            pattern="^[A-Za-z]+ ([A-Za-z]| )+$"
            onInvalid={(event) => {
              event.target.setCustomValidity(
                'Your name must be the following form: First Last',
              )
              event.target.classList.add('invalid')
            }}
            onChange={this.handleChange}
          />
          <Input
            placeholder="Email"
            required
            type="text"
            id="email"
            autocomplete="email"
            pattern="^[A-Za-z0-9.+]+@[A-Za-z]+\.[A-Za-z]+$"
            onChange={this.handleChange}
          />
          <Input
            placeholder="Phone Number"
            required
            type="text"
            id="phone"
            autocomplete="phone-number"
            pattern="^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$"
            onInvalid={(event) => {
              event.target.setCustomValidity(
                'Phone number must be one of the following forms: 1234567890, 123-456-7890, 123 456 7890',
              )
              event.target.classList.add('invalid')
            }}
            onChange={this.handleChange}
          />
          <Input
            placeholder="Street Address"
            required
            type="text"
            id="address1"
            autocomplete="address-line1"
            onChange={this.handleChange}
          />
          <Input
            placeholder="Unit, Room, PO, etc."
            type="text"
            id="address2"
            autocomplete="address-line2"
            onChange={this.handleChange}
          />
          <Input
            placeholder="City"
            required
            type="text"
            id="city"
            autocomplete="address-level2"
            pattern="^[A-Za-z]+$"
            onChange={this.handleChange}
          />
          <Input
            placeholder="State"
            required
            type="text"
            id="state"
            autocomplete="address-level1"
            pattern="^[A-Za-z]+$"
            onChange={this.handleChange}
          />
          <Input
            placeholder="Zip Code"
            required
            type="text"
            id="zip"
            autocomplete="postal-code"
            pattern="^\d{5}$"
            onChange={this.handleChange}
          />
          <Input
            placeholder="Password"
            required
            type="password"
            id="password"
            autocomplete="new-password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            onInvalid={(event) => {
              event.target.setCustomValidity(
                'Password must be at least 8 characters long and contains a letter, number, and special character.',
              )
              event.target.classList.add('invalid')
            }}
            onChange={this.handleChange}
          />
          <Input
            placeholder="Repeat Password"
            required
            type="password"
            id="repeatPassword"
            onChange={this.handleChange}
          />
          <StyledButton type="submit">Sign Up</StyledButton>
          <Link to={RouteLinks.SIGN_IN} className="centered">
            Sign in
          </Link>
        </StyledForm>
      </StyledCardDiv>
    )
  }
}

export default SignUpPage

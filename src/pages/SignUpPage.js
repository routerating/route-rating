import React, { Component } from 'react'

import Input from '../components/Input'

class SignUpPage extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  render() {
    return (
      <form>
        <Input />
      </form>
    )
  }
}

export default SignUpPage

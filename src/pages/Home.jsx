import React, { Component } from 'react'

import { exportClassComponent } from '../utils'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <>
        <h1>Home Page</h1>
      </>
    )
  }
}

export default exportClassComponent(Home)

import React, { Component } from 'react'

import { exportClassComponent } from '../utils'

class GymsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Gyms</h1>
      </div>
    )
  }
}

export default exportClassComponent(GymsPage)

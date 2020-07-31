import React from 'react'

import { exportClassComponent } from '../utils'
import Page from '../Page'

class Home extends Page {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount = async () => {
    this.doneLoading()
  }

  render = () => {
    return (
      <>
        <h1>Home Page</h1>
      </>
    )
  }
}

export default exportClassComponent(Home)

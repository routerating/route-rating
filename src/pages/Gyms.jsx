import React, { Component } from 'react'

import { exportClassComponent } from '../utils'
import { API, graphqlOperation } from 'aws-amplify'
import { createGym } from '../graphql/mutations'

class GymsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount = async () => {
    const result = await API.graphql(graphqlOperation(createGym, {}))
    console.log(result)
  }

  render = () => {
    return (
      <div>
        <h1>Gyms</h1>
      </div>
    )
  }
}

export default exportClassComponent(GymsPage)

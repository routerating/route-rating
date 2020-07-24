import React, { Component } from 'react'

import { exportClassComponent, GymBuilder } from '../utils'
import { API, graphqlOperation } from 'aws-amplify'
import { createGym } from '../graphql/mutations'

class GymsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount = async () => {
    try {
      const gymBuilder = GymBuilder.construct({
        name: 'Horizontal Climbing',
        address1: '10000 Street Drive',
        city: 'Ames',
        state: 'Iowa',
        zip: '50000',
        website: 'lukeshay.com',
        email: 'shay.luke17@gmail.com',
        phone: '5151111111',
        editors: [],
      })
      const result = await gymBuilder.build()
      console.log(result)
    } catch (e) {
      console.log(e)
    }
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

import React from 'react'

import {
  exportClassComponent,
  baseClassComponentPropTypes,
  runGQLQuery,
} from '../utils'
import { getGym } from '../graphql/queries'
import { RouteLinks } from '../Routes'
import Page from '../Page'

class Gym extends Page {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      gym: null,
      canEdit: false,
    }
  }

  componentDidMount = async () => {
    const path = this.props.location.pathname.split('/')

    try {
      const result = await runGQLQuery(getGym, { id: path[path.length - 1] })
      this.setState({ isLoading: false, gym: result.data.getGym })
      this.doneLoading()
    } catch (e) {
      console.error(e)
      this.props.history.push(RouteLinks.GYMS)
    }
  }

  render = () => {
    const { isLoading, gym, canEdit } = this.state
    return (
      !isLoading && (
        <div>
          id: {gym.id}
          <br />
          key: {gym.key}
          <br />
          name: {gym.name}
          <br />
          website: {gym.website}
          <br />
          phone: {gym.phone}
          <br />
          email: {gym.email}
          <br />
          address1: {gym.address1}
          <br />
          address2: {gym.address2}
          <br />
          city: {gym.city}
          <br />
          state: {gym.state}
          <br />
          zip: {gym.zip}
          <br />
          walls: {gym.walls.items}
          <br />
          editors: {gym.editors}
          <br />
          owner: {gym.owner}
          <br />
          can edit: {canEdit}
          <br />
        </div>
      )
    )
  }
}

Gym.propTypes = {
  ...baseClassComponentPropTypes,
}

export default exportClassComponent(Gym)

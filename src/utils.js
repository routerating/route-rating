import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import { API, graphqlOperation } from 'aws-amplify'
import { createGym } from './graphql/mutations'

export const exportClassComponent = (component, styles) => {
  if (styles) {
    return withStyles(styles, { withTheme: true })(withRouter(component))
  }

  return withRouter(component)
}

export const constructAddress = async (
  address1,
  address2,
  city,
  state,
  zip,
) => {
  return `${address1}|${address2}|${city}|${state}|${zip}`
}

export const deconstructAddress = async address => {
  if (!address) return null

  const addressArray = address
    .split('|')
    .map(value => (value === 'null' ? '' : value))

  return (
    (addressArray.length === 5 && {
      address1: addressArray[0],
      address2: addressArray[1],
      city: addressArray[2],
      state: addressArray[3],
      zip: addressArray[4],
    }) ||
    null
  )
}

export const GymBuilder = {
  construct: gym => {
    let gymBuilderClass = new GymBuilderClass()

    if (gym.name) {
      gym.key = gym.name.replace(' ', '-').toLowercase()
    }

    gymBuilderClass = { ...gymBuilderClass, ...gym }
    return gymBuilderClass
  },
}

export class GymBuilderClass {
  setName = name => {
    this.name = name
    this.key = name.replace(' ', '-').toLowercase()
    return this
  }

  setWebsite = website => {
    this.website = website
    return this
  }

  setAddress1 = address1 => {
    this.address1 = address1
    return this
  }

  setAddress2 = address2 => {
    this.address2 = address2
    return this
  }

  setCity = city => {
    this.city = city
    return this
  }

  setState = state => {
    this.state = state
    return state
  }

  setZip = zip => {
    this.zip = zip
    return zip
  }

  setPhone = phone => {
    this.phone = phone
    return phone
  }

  setLogo = logo => {
    this.logo = logo
    return logo
  }

  setEmail = email => {
    this.email = email
    return this
  }

  setOwner = owner => {
    this.owner = owner
    return owner
  }

  setEditor = editors => {
    this.editors = editors
    return editors
  }

  build = () => {
    return API.graphql(graphqlOperation(createGym, { ...this }))
  }
}

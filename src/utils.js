import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import { API, graphqlOperation } from 'aws-amplify'
import { createGym } from './graphql/mutations'
import { Chance } from 'chance'

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

export const createKey = ({ name }) => {
  if (name)
    return `${name.replace(' ', '-').toLowerCase()}-${Date.now().toString()}`
}

export const runGQL = (query, input) => {
  return API.graphql(graphqlOperation(query, input ? { input } : undefined))
}

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const populateGyms = async () => {
  const chance = new Chance()

  const name = chance.name()

  runGQL(createGym, {
    name,
    key: `${name.replace(/ /g, '-')}-${Date.now().toString()}`,
    address1: chance.address(),
    city: chance.city(),
    state: chance.state(),
    zip: chance.zip(),
    phone: chance.phone(),
    website: chance.url(),
    email: chance.email(),
    disabled: false,
  })
}

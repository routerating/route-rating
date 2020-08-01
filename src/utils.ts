import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import { API, graphqlOperation } from 'aws-amplify'
import { createGym } from './graphql/mutations'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Chance } from 'chance'
import { Address } from './types'

export const exportClassComponent = (
  component: any,
  styles: any,
): typeof component => {
  if (styles) {
    return withStyles(styles, { withTheme: true })(withRouter(component))
  }

  return withRouter(component)
}

export const constructAddress = async (
  address1: string,
  address2: string | null | undefined,
  city: string,
  state: string,
  zip: string,
): Promise<string> => {
  return `${address1}|${address2}|${city}|${state}|${zip}`
}

export const deconstructAddress = async (
  address: string,
): Promise<Address | null> => {
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

export const createKey = ({ name }: { name?: string }): string | undefined => {
  if (name)
    return `${name.replace(' ', '-').toLowerCase()}-${Date.now().toString()}`
}

export const runGQLMutation = (query: any, input: any): Promise<any> => {
  return GraphQLAPI.graphql(graphqlOperation(query, { input }))
}

export const runGQLQuery = (query: any, input: any): Promise<any> => {
  return API.graphql(graphqlOperation(query, { ...input }))
}

export const uuidv4 = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const populateGyms = async (): Promise<void> => {
  const chance = new Chance()

  const name = chance.name()

  runGQLMutation(createGym, {
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

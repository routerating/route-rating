import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core'

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

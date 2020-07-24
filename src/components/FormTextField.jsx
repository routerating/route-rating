import { Grid, TextField } from '@material-ui/core'

import PropTypes from 'prop-types'
import React from 'react'

const FormTextField = props => {
  const { children } = props
  return (
    <Grid item xs={12}>
      <TextField {...props} />
      {children}
    </Grid>
  )
}

FormTextField.propTypes = {
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  id: PropTypes.string,
  autoComplete: PropTypes.string,
  inputProps: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

export default FormTextField

import { Grid, TextField } from '@material-ui/core'
import React, { Component } from 'react'

import PropTypes from 'prop-types'

export class FormTextField extends Component {
  static propTypes = {
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
  }

  render() {
    return (
      <Grid item xs={12}>
        <TextField {...this.props} />
      </Grid>
    )
  }
}

export default FormTextField

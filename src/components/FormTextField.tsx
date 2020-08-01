import { Grid, TextField, TextFieldProps } from '@material-ui/core'

import React from 'react'

const FormTextField: React.FC<TextFieldProps> = props => {
  const { children } = props
  return (
    <Grid item xs={12}>
      <TextField {...props} />
      {children}
    </Grid>
  )
}

export default FormTextField

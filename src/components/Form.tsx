import { Container, Paper, Typography, Theme } from '@material-ui/core'
import React, { Component, SyntheticEvent } from 'react'

import { exportClassComponent } from '../utils'

const formStyles = (theme: Theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2.5rem 0',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
})

type FormStyles = {
  paper: string
  form: string
}

type FormProps = {
  classes: FormStyles
  children: any
  title: string
  onSubmit: (event: SyntheticEvent) => void | Promise<void>
}

class Form extends Component<FormProps> {
  private classes: FormStyles

  constructor(props: FormProps) {
    super(props)
    this.classes = this.props.classes
  }

  render = () => {
    return (
      <Paper className={this.classes.paper}>
        <Typography component="h1" variant="h5">
          {this.props.title}
        </Typography>
        <Container
          component="form"
          onSubmit={this.props.onSubmit}
          className={this.classes.form}>
          {this.props.children}
        </Container>
      </Paper>
    )
  }
}

export default exportClassComponent(Form, formStyles)

import { Container, Paper, Typography, withStyles } from '@material-ui/core'
import React, { Component } from 'react'

import PropTypes from 'prop-types'

const formStyles = (theme) => ({
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

class Form extends Component {
  static propTypes = {
    title: PropTypes.string,
    handleSubmit: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]),
  }

  constructor(props) {
    super(props)
    this.classes = this.props.classes
  }

  render() {
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

export default withStyles(formStyles, { withTheme: true })(Form)

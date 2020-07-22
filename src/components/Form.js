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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
})

class Form extends Component {
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
          onSubmit={this.props.handleSubmit}
          className={this.classes.form}>
          {this.props.children}
        </Container>
      </Paper>
    )
  }
}

Form.propTypes = {
  title: PropTypes.string,
  handleSubmit: PropTypes.func,
  children: PropTypes.element,
}

export default withStyles(formStyles, { withTheme: true })(Form)

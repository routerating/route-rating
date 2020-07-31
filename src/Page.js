import { Component } from 'react'
import { baseClassComponentPropTypes } from './utils'

class Page extends Component {
  constructor(props) {
    super(props)

    this.props.setLoading(true)
  }

  isLoading = async () => {
    this.props.setLoading(true)
  }

  doneLoading = async () => {
    this.props.setLoading(false)
  }
}

Page.propTypes = {
  ...baseClassComponentPropTypes,
}

export default Page

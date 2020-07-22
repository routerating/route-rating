import { API, Auth, graphqlOperation } from 'aws-amplify'
import React, { Component } from 'react'

import Form from '../components/Form'
import { userByEmail } from '../graphql/queries'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      givenName: null,
      familyName: null,
      email: null,
      phoneNumber: null,
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    console.log(await Auth.currentUserInfo())

    const user = await Auth.currentAuthenticatedUser()
    const {
      email,
      given_name: givenName,
      family_name: familyName,
      phone_number: phone,
    } = user.attributes

    const graphqlResponse = await API.graphql(
      graphqlOperation(userByEmail, { email }),
    )

    const users = graphqlResponse.data.userByEmail.items

    let newState = {
      email,
      familyName,
      givenName,
      phone,
    }

    if (users.length > 0) {
      const { address1, address2, city, state } = users

      newState = { ...newState, address1, address2, city, state }
    }

    this.setState({ ...newState, isLoading: false })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    console.log(event)
  }

  render() {
    return (
      !this.state.isLoading && (
        <Form handleSubmit={this.handleSubmit} title="Your Profile">
          <h1>asdf</h1>
        </Form>
      )
    )
  }
}

export default Profile

import React, { Component } from 'react'
import LoginForm from '../../Components/signInPage/signInPage'
import { Section } from '../../Components/Utils/Utils'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  onLoginSuccess = () => {
    const { location, history } = this.props
    //const destination = (location.state || {}).from || '/'
    history.push('/firstView')
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.onLoginSuccess}
        />
      </Section>
    )
  }
}
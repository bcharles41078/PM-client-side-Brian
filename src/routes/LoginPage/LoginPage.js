import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import { Section } from '../../Components/Utils/Utils'
import './LoginPage.css'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  onLoginSuccess = () => {
    const { history } = this.props
    //const destination = (location.state || {}).from || '/'
    history.push('/dashboard')
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
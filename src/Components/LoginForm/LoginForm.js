import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import { Button, Input } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'
import './LoginForm.css'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  state = { error: null, isloading: false }


  handleSubmitJWtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null, isloading: true})
    const { user_name, password } = ev.target
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(`${res.authToken}`)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error, isloading: false })
      })
  }

  render() {
    const { error } = this.state
    if (this.state.isloading) {
      return (
        <h1>Loading...</h1>
      )
    }
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJWtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='labels-and-inputs'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <Input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </Input>
        
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Login
        </Button>
      </form>
    )
  }
}
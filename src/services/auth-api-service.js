import config from '../config'

const AuthApiService = {
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/auth/user`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => {
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      })
        
      .catch(error => alert(error.error))
  },
  postLogin({ user_name, password }) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user_name, password }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(err => Promise.reject(err))
          : res.json()
    )
  },
}

export default AuthApiService

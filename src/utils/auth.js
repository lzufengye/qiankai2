import request from 'superagent'
import ServerConfig from '../config/server-config'

module.exports = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    request.post(ServerConfig['serverUrl'] + '/consumers/sign_in')
      .send({ "consumer": {
        "email": email,
        "password": pass
      } })
      .end((err, res) => {
        if(JSON.parse(res.text).consumer.authentication_token != undefined) {
          localStorage.token = JSON.parse(res.text).consumer.authentication_token
          cb({
            authenticated: true
          })
          this.onChange(true)
        } else {
          cb({ authenticated: false })
        }
      });
  },

  register(email, password, password_confirmation, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    if (password != password_confirmation) {
      return
    }
    request.post(ServerConfig['serverUrl'] + '/consumers')
      .send({ "consumer": {
        "email": email,
        "password": password,
        "password_confirmation": password_confirmation
      } })
      .end((err, res) => {
        if(JSON.parse(res.text).consumer.authentication_token != undefined) {
          localStorage.token = JSON.parse(res.text).consumer.authentication_token
          cb({
            authenticated: true
          })
          this.onChange(true)
        } else {
          cb({ authenticated: false })
        }
      });
  },

  getToken: function () {
    return localStorage.token
  },

  logout: function (cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn: function () {
    return !!localStorage.token
  },

  onChange: function () {}
}

function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    if (email === 'joe@example.com' && pass === 'password1') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }
  }, 0)
}

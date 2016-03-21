import React from 'react'
import auth from '../../../utils/auth'

const Login = React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  getInitialState() {
    return {
      error: false
    }
  },

  componentDidMount() {
    $('.product-category').css('visibility', 'hidden')
  },

  handleSubmit(event) {
    event.preventDefault()

    const email = this.refs.email.value
    const password = this.refs.password.value
    const password_confirmation = this.refs.password_confirmation.value

    auth.register(email, password, password_confirmation, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })

      const { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname)
      } else {
        this.context.router.replace('/')
      }
    })
  },

  render() {
    return (
      <div className='container'>
        <div className='login'>
          <form onSubmit={this.handleSubmit}>
            <table>
              <tr>
                <td>用户名: </td>
                <td><input ref="email" placeholder="邮箱" defaultValue="joe@example.com" /></td>
                <td></td>
              </tr>
              <tr>
                <td>密 码: </td>
                <td><input ref="password" placeholder="密码" /></td>
                <td>(请输入10位以上密码)</td>
              </tr>
              <tr>
                <td>密码确认: </td>
                <td><input ref="password_confirmation" placeholder="密码确认" /></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td><button type="submit">注册</button></td>
                <td></td>
              </tr>
            </table>
        {this.state.error && (
          <p>请输入正确的用户名或密码</p>
        )}
          </form>
        </div>
      </div>
    )
  }

})

export default Login

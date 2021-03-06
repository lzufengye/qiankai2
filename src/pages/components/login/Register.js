import React from 'react'
import auth from '../../../utils/auth'
import mobileUtils from '../../../utils/mobile-utils'
import layer from '../../../utils/layer'

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
    const user_name = this.refs.user_name.value
    const phone = this.refs.phone.value
    const password = this.refs.password.value
    const password_confirmation = this.refs.password_confirmation.value

    if(email != '' && password != '' && password_confirmation != '' && password == password_confirmation) {
      auth.register(user_name, phone, email, password, password_confirmation, (loggedIn) => {
        if (!loggedIn)
          return this.setState({ error: true })

        const { location } = this.props

        if(loggedIn['authenticated']) {
          if (location.state && location.state.nextPathname) {
            this.context.router.replace(location.state.nextPathname)
          } else {
            this.context.router.replace('/')
          }
        } else {
          layer.msg(loggedIn['errors']);
        }
      })
    } else {
      layer.msg('请输入合法的邮箱和密码');
    }
  },

  render() {
    return (
      <div className='container'>
        <div className='login'>
          <form onSubmit={this.handleSubmit}>
            <table>
              <tr>
                <td>姓名: </td>
                <td><input ref="user_name" placeholder="姓名" /></td>
                <td></td>
              </tr>
              <tr>
                <td>电话: </td>
                <td><input ref="phone" placeholder="电话" /></td>
                <td></td>
              </tr>
              <tr>
                <td>邮箱: </td>
                <td><input ref="email" placeholder="邮箱" defaultValue="joe@example.com" /></td>
                <td></td>
              </tr>
              <tr>
                <td>密 码: </td>
                <td><input type='password' ref="password" placeholder="密码" /></td>
                <td>(请输入10位以上密码)</td>
              </tr>
              <tr>
                <td>密码确认: </td>
                <td><input type='password' ref="password_confirmation" placeholder="密码确认" /></td>
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

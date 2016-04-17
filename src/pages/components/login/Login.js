import React from 'react'
import auth from '../../../utils/auth'
import mobileUtils from '../../../utils/mobile-utils'
import { browserHistory } from 'react-router'

const Login = React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  getInitialState() {
    return {
      error: false
    }
  },

  componentWillMount() {
    if(mobileUtils.mobileCheck()) {
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx95d402cee77415c9&redirect_uri=http%3A%2F%2Fwww.kaijiewang.com%2Fwechat-callback&response_type=code&scope=snsapi_userinfo&state=WECHAT#wechat_redirect'
    }
  },

  componentDidMount() {
    $('.product-category').css('visibility', 'hidden')
    if(mobileUtils.mobileCheck()) {
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx95d402cee77415c9&redirect_uri=http%3A%2F%2Fwww.kaijiewang.com%2Fwechat-callback&response_type=code&scope=snsapi_userinfo&state=WECHAT#wechat_redirect'
    }
  },

  handleSubmit(event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    auth.login(email, pass, (loggedIn) => {
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
    var containerClass = 'container' + (mobileUtils.mobileCheck() ? ' mobile-products-container' : '');

    return (
      <div className={containerClass}>
        <div className='login'>
          <form onSubmit={this.handleSubmit}>
            <table>
              <tr>
                <td>用户名: </td>
                <td><input ref="email" placeholder="email" /></td>
              </tr>
              <tr>
                <td>密 码: </td>
                <td><input type='password' ref="pass" placeholder="password" /></td>
              </tr>
              <tr>
                <td></td>
                <td><button type="submit">登录</button></td>
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

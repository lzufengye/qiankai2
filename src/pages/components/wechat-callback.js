import React from 'react'
import request from 'superagent'
import ServerConfig from '../../config/server-config'

var WechatCallback = React.createClass({
  getInitialState() {
    return {
      oauthInfo: ''
    };
  },

  componentDidMount() {
    if(this.props.params['state'] != 'WECHAT' || this.props.params['code'] == 'authdeny') {
      this.setState({oauthInfo: '登录失败'})
    } else {
      request.post(ServerConfig['serverUrl'] + '/api/oauth_sign_in')
        .send({ code: this.props.params['code'] })
        .end((err, res) => {
          if(JSON.parse(res.text).consumer != undefined && JSON.parse(res.text).consumer.authentication_token != undefined) {
            localStorage.token = JSON.parse(res.text).consumer.authentication_token
            cb({
              authenticated: true
            })
            this.onChange(true)
          } else {
            if(cb != undefined) {
              cb({ authenticated: false })
            }
          }
        })
    }
  },

  render () {
    return (
      <div>{this.state.oauthInfo}</div>
    );
  }
});

export default WechatCallback
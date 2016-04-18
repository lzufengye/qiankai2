import React from 'react'
import request from 'superagent'
import ServerConfig from '../../config/server-config'
import { browserHistory } from 'react-router'

var WechatCallback = React.createClass({
  getInitialState() {
    return {
      oauthInfo: ''
    };
  },

  componentDidMount() {
    request.post(ServerConfig['serverUrl'] + '/api/oauth_sign_in')
      .send({code: 'teste'})
      .end((err, res) => {
        if (JSON.parse(res.text).consumer != undefined && JSON.parse(res.text).consumer.authentication_token != undefined) {
          localStorage.token = JSON.parse(res.text).consumer.authentication_token
          browserHistory.push('/shopping-cart-to-order')
        } else {
          browserHistory.push('/shopping-cart')
        }
      })
  },

  render() {
    return (
      <div>{this.state.oauthInfo}  <span>{this.props.params}</span></div>
    );
  }
});

export default WechatCallback
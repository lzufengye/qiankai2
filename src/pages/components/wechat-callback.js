import React from 'react'
import request from 'superagent'

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
      request.post(ServerConfig['serverUrl'] + '/oauth_sign_in')
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
    var style = {
      backgroundImage: 'url(' + this.props.backgroundImage + ')'
    };

    var shadowMarginLeft = {
      marginLeft: this.props.shadowMarginLeft
    };

    return (
      <a className='section-title' style={style} href={this.props.href}>
        <div className='section-shadow' style={shadowMarginLeft}>
          <image src={this.props.sectionIcon}/>
          <br/>
          {this.props.sectionTitle}
        </div>
      </a>
    );
  }
});

export default WechatCallback
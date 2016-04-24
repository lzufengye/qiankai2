import React from 'react'

import WaitingForPayCartItemList from './components/cart/waiting-for-pay'
import Order from '../components/order'

import { browserHistory } from 'react-router'
import request from 'superagent'
import ServerConfig from '../../config/server-config'
import mobileUtils from '../../utils/mobile-utils'

var OrderPay = React.createClass({
  getInitialState() {
    return {
      charge: {},
      order: {}
    };
  },

  componentWillMount() {
    request.get(ServerConfig['serverUrl'] + '/api/transactions/new?sn=' + this.props.params.sn + '&token=' + localStorage.token)
      .end((err, res) => {
        var response = JSON.parse(res.text);
        if (response.transaction.error) {
          layer.msg('支付网关异常，请稍后完成支付');
        } else {
          this.setState({charge: response.transaction.charge});
        }
      });
    var order = JSON.parse(localStorage.qwezstfp);
    this.setState({'order': order});
  },

  componentDidMount() {
    $('.product-category').css('visibility', 'visible');
  },

  payForOrder: function () {
    if(this.state.charge) {
      pingpp.createPayment(this.state.charge, function(result, error){
        if (result == "success") {
          layer.msg('支付成功');
          localStorage.qwezstfp = JSON.stringify({});
          this.setState({charge: {}});
          $('.pay-order').attr("disabled","true");
        } else if (result == "fail") {
          layer.msg('支付失败，请重试');
        } else if (result == "cancel") {
          layer.msg('支付已取消');
        }
      });
    }
  },

  render() {
    var containerClass = 'products-container' + (mobileUtils.mobileCheck() ? ' mobile-products-container' : '')

    return (
      <div className={containerClass}>
      {<Order order={this.state.order}/>}
      {<button className="btn cart-goto-order pay-order" onClick={this.payForOrder} type="button">{'确认支付'}</button>} 
      </div>
    );
  }
});

export default OrderPay

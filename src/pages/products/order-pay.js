import React from 'react'
import Header from './components/header/header'
import Footer from '../../footer'
import { browserHistory } from 'react-router'

var OrderPay = React.createClass({
  componentDidMount() {
    setTimeout(this.jumpToHomepage, 5000);
  },

  jumpToHomepage() {
    browserHistory.push('/')
  },

  render() {
    return (
      <div className='products-container'>
        <Header display='none'>
        </Header>
        <div className='product-detail'>
          模拟支付
        </div>
        <Footer/>
      </div>
    );
  }
});

export default OrderPay

import React from 'react'

import CartPage from './components/carttable'
import Header from './components/header/header'
import Footer from '../../footer'
import mobileUtils from '../../utils/mobile-utils'

var Cart = React.createClass({
  componentDidMount() {
    $('.product-category').css('visibility', 'hidden')
  },

  render() {
    var containerClass = 'products-container' + (mobileUtils.mobileCheck() ? ' mobile-products-container' : '');

    return (
      <div className={containerClass}>
        <CartPage />
      </div>
    );
  }
});

export default Cart
import React from 'react'

import CartPage from './components/carttable'
import Header from './components/header/header'
import Footer from '../../footer'

var Cart = React.createClass({
  componentDidMount() {
    $('.product-category').css('visibility', 'hidden')
  },

  render() {
    return (
      <div className='products-container'>
        <CartPage />
      </div>
    );
  }
});

export default Cart
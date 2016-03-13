import React from 'react'

import CartPage from './components/carttable'
import Header from './components/header/header'
import Footer from '../../footer'

var Cart = React.createClass({
  render() {
    return (
      <div className='products-container'>
        <Header />
        <CartPage />
        <Footer />
      </div>
    );
  }
});

export default Cart
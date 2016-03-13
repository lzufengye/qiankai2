import React from 'react'

import CartPage from './components/carttable'
import Header from './components/header/header'

var Cart = React.createClass({
  render() {
    return (
      <div className='products-container'>
        <Header />
        <CartPage />
      </div>
    );
  }
});

export default Cart
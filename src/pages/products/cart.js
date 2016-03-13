import React from 'react'
import CartTable from './components/carttable'

var Cart = React.createClass({
  render() {
    return (
      <div className='container'>
        <CartTable/>
      </div>
    );
  }
});

export default Cart
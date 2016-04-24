import React from 'react'

import CartTableHead from './cart-table-header'
import CartTableBody from './cart-table-body'

var WaitingForPayCartItemList = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="cart-mod col-md-12">
          <h2 className="cart-mod-title">
             {'商品列表'}</h2>
          <div className="qing-table">
            <CartTableHead editable={false}/>
            <CartTableBody data={this.props.list} editable={false}/>
          </div>
        </div>
      </div>
    )
  }
});

export default WaitingForPayCartItemList
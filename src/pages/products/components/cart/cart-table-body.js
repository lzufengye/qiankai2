import React from 'react'

import CartItem from './cart-item'

var CartTableBody = React.createClass({
  getDefaultProps: function () {
    return {
      data: [],
      editable: true
    }
  },
  propTypes: {
    data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  },
  selectCartItem: function () {
    //console.log('11');
  },
  changeQty: function () {

  },
  render: function () {
    var $this = this;
    return (
      <div className="qing-table-body">
				{this.props.data.map(function (item, i) {
          return <CartItem key={'cart-item' + i} item={item} editable={$this.props.editable}/>
        })}
      </div>
    );
  }
});

export default CartTableBody
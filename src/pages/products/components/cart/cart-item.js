import CartActions from '../../actions/cart'

import React from 'react'
import LinkedStateMixin from 'react/lib/LinkedStateMixin'

var CartItem = React.createClass({
  handleToggleChecked: function () {
    CartActions.toggleSelectItem(this.props.item['id']);
  },
  subtractQty: function () {
    if (this.props.item['qty'] != 1) {
      CartActions.subtractQty(this.props.item['id']);
    }
  },
  addQty: function () {
    CartActions.addQty(this.props.item['id']);
  },
  removeItem: function (e) {
    CartActions.deleteItem(this.props.item['id']);
    e.preventDefault();
  },
  mixins: [LinkedStateMixin],
  render: function () {
    var item = this.props.item;
    var cbxHtml = '', delHtml = '', qtyHtml;
    if (this.props.editable) {
      cbxHtml = (<div className="qing-col-td cart-checkbox">
        <label className="qing-checkbox" htmlFor={"cartItem-" + item['id']}>
          <input type="checkbox" onChange={this.handleToggleChecked} checked={!!item['selected']} id={"cartItem-" + item['id']} className="cart-item" value={item['id']}/>
          <i></i>
        </label>
      </div>)
      delHtml = (
        <div className="qing-col-td">
          <a href="#" onClick={this.removeItem}>{'删除'}</a>
        </div>
      )
      qtyHtml = (
        <div className="shop-product-qty">
          <button className={item['qty'] == 1 ? 'qty-btn qty-btn-disabled' : 'qty-btn'} onClick={this.subtractQty} data-qty="subtract" type="button">-</button>
          <input type="text" readOnly="readonly" value={item['qty']} name="buy-num" id="buy-num" className="qty-field"/>
          <button className="qty-btn" onClick={this.addQty} data-qty="add" type="button">+</button>
        </div>
      )
    } else {
      qtyHtml = <span >{item['qty']}</span>
    }
    return (
      <div className="qing-table-row">
					{cbxHtml}
        <div className="qing-col-td cart-col-name align-left">
          <img src={item['images'][0]} className="cart-item-img" width="120" height="120"/>
          <ul className="cart-item-title">
            <li>{item['name']}</li>
          </ul>

        </div>
        <div className="qing-col-td cart-col-price">
          <i className="fa fa-rmb"></i>{item['price']}</div>
        <div className="qing-col-td cart-col-qty">
						{qtyHtml}
        </div>
        <div className="qing-col-td cart-col-sum">
          <i className="fa fa-rmb"></i>{item['qty'] * item['price']}</div>
					{delHtml}
      </div>
    )
  }
});

export default CartItem

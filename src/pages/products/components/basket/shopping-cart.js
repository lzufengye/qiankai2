import React from 'react'
import Reflux from 'reflux'

import basketStore from '../../stores/basket-store'
import actions from '../../actions/app-actions'

var ShoppingCart = React.createClass({

  mixins: [Reflux.connect(basketStore), Reflux.ListenerMixin],

  getBasketTotals() {
    return basketStore.getBasketTotals();
  },

  getBasketData() {
    return basketStore.getBasketData();
  },

  onBasketChange() {
    this.setState(this.getBasketTotals());
  },

  componentDidMount() {
    this.setState(this.getBasketTotals());
    this.listenTo(actions.addItem, this.onBasketChange);
    this.listenTo(actions.removeItem, this.onBasketChange);
  },

  render() {
    return (
      <li>
        <span><image src='/assets/images/products/shopping-cart.png'/></span>
        购物车
        <span className="shopping-number">{this.state.qty}</span>
      </li>
    );
  }
});

export default ShoppingCart

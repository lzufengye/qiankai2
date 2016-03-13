import React from 'react'
import Reflux from 'reflux'

import basketStore from '../../stores/basket-store'
import actions from '../../actions/product-actions'

import AddToBasket from '../basket/add-to-basket.js'
import RemoveFromBasket from '../basket/remove-from-basket.js'

var Basket = React.createClass({

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
    var statusClassName = this.state.qty === 0 ? 'appBasket--is-empty ' : '';
    var list = this.getBasketData().map((item, n)=> {
      return (
        <li key={n} className="pure-g">
          <div className="pure-u-1-2">
            <span className="appBasket-itemDetails">
              {item.name} : £{item.price}.00
            </span>
            <span className="appBasket-qty">x {item.qty}</span>
            <AddToBasket text="+" item={item} />
            <RemoveFromBasket item={item} />
          </div>
        </li>);
    });
    var emptyBasket = this.state.qty === 0 ? '您的购物车是空的' : ''
    var checkOut = this.state.qty === 0 ? '' : <a href='/shopping-cart'>去结算</a>
    return (
      <div className={"appBasket pure-u-3-5 pure-u-md-3-5 pure-u-lg-2-5 " + statusClassName}>
        <div className="pure-g">
          <div className="appBasket-label pure-u-1-2">{emptyBasket}</div>
          <div className="pure-u-1-2">
            <span className="appBasket-nrItems"> x {this.state.qty}</span>
            <span className="appBasket-total">¥ {this.state.total}.00</span>
          </div>
        </div>
        <ul className="basketList list-reset">{list}</ul>
        <div className='bottom-part'>
        {checkOut}
        </div>
      </div>
    );
  }
});

export default Basket

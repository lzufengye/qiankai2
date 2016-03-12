//require('./item.css');

import React from 'react'
import Reflux from 'reflux'

import basketStore from '../../stores/basket-store'
import actions from '../../actions/app-actions'

import AddToBasket from '../basket/add-to-basket.js'
import RemoveFromBasket from '../basket/remove-from-basket.js'

var Item = React.createClass({
  mixins: [Reflux.connect(basketStore),Reflux.ListenerMixin],

  isInBasket() {
    return basketStore.isInBasket(this.props.item);
  },

  getBasketQty() {
    return basketStore.getBasketQty(this.props.item);
  },

  onStatusChange: function(productType) {
    if (typeof productType === "string") {
      //console.log('current productType', productType);
    }
    this.setState({inBasket : this.isInBasket()});
    this.setState({inBasketQty : this.getBasketQty()});
  },

  componentDidMount: function() {
    this.setState({inBasket : this.isInBasket()});
    this.setState({inBasketQty : this.getBasketQty()});
    this.listenTo(actions.pageChange, this.onStatusChange);
    this.listenTo(actions.addItem, this.onStatusChange);
    this.listenTo(actions.removeItem, this.onStatusChange);
  },

  getBasketControls() {
    let controls = <AddToBasket text="Add to basket" item={this.props.item} />;
    if (this.state.inBasket) {
      controls = (<div><AddToBasket text="+" item={this.props.item} /> <RemoveFromBasket item={this.props.item} /></div>);
    }
    return controls;
  },

  componentDidEnter() {
    console.log('componentWillEnter');
  },


  componentWillEnter() {
    console.log('componentWillEnter');
  },

  render: function() {
    let statusClassName = this.state.inBasket ? 'is-inBasket ' : '',
        itemStyle = {
          transitionDelay: this.props.index * 0.25 + 's'
        };
    return (
      <li style={itemStyle} className='pure-u-1 pure-u-md-1-3 pure-u-lg-1-4' >
        <div className={"appItem appItem--"+ statusClassName}>
          <img className={'img-responsive'} src={this.props.item.image} alt="" />
          <div className="goods-name truncate">{this.props.item.name}</div>
          <div className="appItem-price">¥ {this.props.item.price}.00</div>
        </div>
      </li>
    );
    //
  }
});

export default Item

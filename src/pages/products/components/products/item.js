//require('./item.css');

import React from 'react'
import Reflux from 'reflux'

import basketStore from '../../stores/basket-store'
import actions from '../../actions/product-actions'

import { Link } from 'react-router'

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

  componentDidEnter() {
    console.log('componentWillEnter');
  },


  componentWillEnter() {
    console.log('componentWillEnter');
  },

  render: function() {
    let statusClassName = this.state.inBasket ? 'is-inBasket ' : '',
        itemStyle = {
          transitionDelay: this.props.index * 0.1 + 's'
        };

    var soldOutClass = 'sold-out' + (this.props.item.stock_number == 0 ? '' : ' hidden');

    return (
      <li style={itemStyle} className='product-item pure-u-1 pure-u-md-1-3 pure-u-lg-1-4' >
        <div className={soldOutClass}>
          <img src='/assets/images/products/sold-out.png'/>
          <div className='sold-out-label'>已售完</div>
        </div>
        <Link to={'/product/' + this.props.id} className={"appItem appItem--"+ statusClassName}>
          <img className={'img-responsive'} src={this.props.item.image} alt="" />
            <div className="goods-name truncate">{this.props.item.name}</div>
          <div className="appItem-price">¥ {this.props.item.price} {this.props.item.unit}</div>
        </Link>
      </li>
    );
  }
});

export default Item

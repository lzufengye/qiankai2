import React from 'react'
import Reflux from 'reflux'

import actions from './actions/customer-actions'
import store from './stores/customer-store'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

import Item from './components/products/item'

var CustomerProducts = React.createClass({
  mixins: [Reflux.connect(store), Reflux.ListenerMixin],

  componentDidMount() {
    actions.loadCustomerProducts(this.props.params.id);
    console.log('fas', this.props.params.id);
    $('.product-category').css('visibility', 'hidden');
  },

  render() {
    var items = this.state.products.map((item, i) => {
      item.type = this.state.productType;

      return <Item key={item.id} item={item} id={item.id} index={i} />;
    });

    var style = {height: this.props.height};

    return (
      <div className='customer-products'>
        <div className='customer-header'>{this.state.currentCustomer}</div>
        <div className='product-section' style={style}>
          <ReactCSSTransitionGroup component="ul" className="pure-g appItems list-reset" id="item-group"  transitionName="itemTransition" transitionLeave={false}>
          {items}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
});

export default CustomerProducts;

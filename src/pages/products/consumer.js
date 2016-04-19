import React from 'react'
import Reflux from 'reflux'

import actions from './actions/consumer-actions'
import store from './stores/consumer-store'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

import mobileUtils from '../../utils/mobile-utils'

import Order from '../components/order'

var Consumer = React.createClass({
  mixins: [Reflux.connect(store), Reflux.ListenerMixin],

  componentDidMount() {
    $('.product-category').css('visibility', 'hidden');
    actions.loadConsumerOrders();
  },

  render() {
    var orders = this.state.orders.map((order,i) => {
      return <Order order={order}/>;
    });

    var containerClass = 'customer-container' + (mobileUtils.mobileCheck() ? ' mobile-customers-container' : '');

    return (
      <div className={containerClass}>
        <ReactCSSTransitionGroup component="ul" className="pure-g appItems list-reset" id="item-group"  transitionName="itemTransition" transitionLeave={false}>
          {orders}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Consumer;

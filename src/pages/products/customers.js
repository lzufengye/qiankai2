import React from 'react'
import Reflux from 'reflux'

import actions from './actions/customer-actions'
import store from './stores/customer-store'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

import Customer from './components/customer'
import mobileUtils from '../../utils/mobile-utils'

var Customers = React.createClass({
  mixins: [Reflux.connect(store), Reflux.ListenerMixin],

  componentDidMount() {
    actions.loadCustomers();
    $('.product-category').css('visibility', 'hidden');
  },

  render() {
    var customers = this.state.customers.map((customer,i) => {
      return <Customer key={customer.id} item={customer} id={customer.id} index={i} />;
    });

    var containerClass = 'customer-container' + (mobileUtils.mobileCheck() ? ' mobile-customers-container' : '');

    return (
      <div className={containerClass}>
        <ReactCSSTransitionGroup component="ul" className="pure-g appItems list-reset" id="item-group"  transitionName="itemTransition" transitionLeave={false}>
          {customers}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Customers;

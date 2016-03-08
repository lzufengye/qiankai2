import React from 'react'
import Reflux from 'reflux'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

import store from '../../stores/product-store'
import actions from '../../actions/app-actions'

import Item from './item.js'

var Product = React.createClass({

  mixins: [Reflux.connect(store), Reflux.ListenerMixin],

  refreshPage() {
    this.setState({
      productType: this.props.type
    });
    actions.pageChange(this.props.type);
  },

  componentDidMount: function() {
    this.listenTo(store, this.refreshPage);
    actions.loadPage(this.props.type, true);
  },

  render: function() {
    var items = this.state.products[this.props.type].map((item,i) => {
      item.type = this.state.productType;
      return <Item key={item.id} item={item} index={i} />;
    });
    return (
      <div>
        <ReactCSSTransitionGroup component="ul" className="pure-g appItems list-reset" id="item-group"  transitionName="itemTransition" transitionLeave={false}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Product

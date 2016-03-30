import React from 'react'
import Reflux from 'reflux'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

import Item from './components/products/item'
import Header from './components/header/header'
import Footer from '../../footer'

import store from './stores/products-store'
import actions from './actions/product-actions'

var SearchProduct = React.createClass({
  mixins: [Reflux.connect(store), Reflux.ListenerMixin],

  componentDidMount() {
    actions.searchProducts(this.props.params.searchValue);
  },

  componentWillReceiveProps(nextProps) {
    actions.searchProducts(nextProps.params.searchValue);
  },

  render() {
    var items = this.state.products.search_result.map((item, i) => {
      item.type = this.props.params.category;
      return <Item key={item.id} item={item} id={item.id} index={i} />;
    });

    var style = {height: this.props.height};

    return (
      <div className='products-container' style={style}>
        <div className='product-sub-page'>
          <div className='product-list-container'>
            <h1>{this.props.params.searchValue}</h1>
        {this.props.children}
            <ReactCSSTransitionGroup component="ul" className="pure-g appItems list-reset" id="item-group"  transitionName="itemTransition" transitionLeave={false}>
          {items}
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
});

export default SearchProduct


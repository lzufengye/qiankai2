import React from 'react'
import Reflux from 'reflux'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

import ProductSectionTitle from './product-section-title'
import Item from './item'

import store from '../../stores/products-store'
import actions from '../../actions/product-actions'

var ProductSection = React.createClass({
  mixins: [Reflux.connect(store), Reflux.ListenerMixin],

  componentDidMount () {
    actions.loadProducts(this.props.type);
  },

  render() {
    var items = this.state.products[this.props.type].map((item,i) => {
      item.type = this.state.productType;
      return <Item key={item.id} item={item} index={i} />;
    });
    return (
      <div className='product-section'>
        <ProductSectionTitle backgroundImage={this.props.backgroundImage} width={this.props.width} height={this.props.height} title={this.props.title} link={this.props.link}/>
        <ReactCSSTransitionGroup component="ul" className="pure-g appItems list-reset" id="item-group"  transitionName="itemTransition" transitionLeave={false}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default ProductSection


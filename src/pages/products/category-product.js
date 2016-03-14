import React from 'react'
import Reflux from 'reflux'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

import Item from './components/products/item'
import Header from './components/header/header'
import Footer from '../../footer'

import store from './stores/category-products-store'
import actions from './actions/product-actions'

var CategoryProduct = React.createClass({
  mixins: [Reflux.connect(store), Reflux.ListenerMixin],

  componentDidMount() {
    actions.loadProductsByCategory(this.props.params.category);
  },

  render() {
    var items = this.state.products.map((item, i) => {
      item.type = this.props.params.category;
      return <Item key={item.id} item={item} id={item.id} index={i} />;
    });

    var style = {height: this.props.height};
    var titleMapping = {self_sale: '开县自营', kaixian_special: '开县特产', imported: '进口商品', daily_usage: '生活用品', wine_drink: '食品酒水',
      beautify: '美妆护肤', camera: '数码相机', home_machine: '家用电器', heritage: '非物质文化遗产', green: '绿色食品', organic: '有机食品', foundation: '农产品地理标志'
    };

    return (
      <div className='products-container' style={style}>
        <Header>
        </Header>
        <div className='product-sub-page'>
          <h1>{titleMapping[this.props.params.category]}</h1>
        {this.props.children}
          <ReactCSSTransitionGroup component="ul" className="pure-g appItems list-reset" id="item-group"  transitionName="itemTransition" transitionLeave={false}>
          {items}
          </ReactCSSTransitionGroup>
        </div>
        <Footer />
      </div>
    );
  }
});

export default CategoryProduct


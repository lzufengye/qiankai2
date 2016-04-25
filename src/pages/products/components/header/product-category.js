import React from 'react'
import Reflux from 'reflux'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

import store from '../../stores/category-store'
import actions from '../../actions/product-actions'
import CategoryItem from './category-item'

var ProductCategory = React.createClass({
  mixins: [Reflux.connect(store), Reflux.ListenerMixin],

  componentDidMount () {
    actions.loadCategory(true);
  },

  render() {
    var categories = this.state.categories.map(function (category) {
      return <CategoryItem key={category.id} category={category} />
    });

    var displaySubMenu = () => {
      actions.displayCategory();
    };

    var hideSubMenu = () => {
      actions.hideCategory();
    }

    var style = {
      display: this.props.display
    };

    return (
      <div className='product-category'>
        <a href='#' className='highlighted' style={style}>
          全部商品分类
          <span><image className='right-arrow' src='/assets/images/products/right-arrow.png'/></span>
        </a>
        <div className='categories' style={style}>
          {categories}
        </div>
      </div>
    );
  }
});
export default ProductCategory

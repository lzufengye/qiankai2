import React from 'react'
import Reflux from 'reflux'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

var CategoryItem = React.createClass({
  render() {
    var subCategories = this.props.category.subCategories.map(function (subCategory) {
      return <a href={'/products-by-category/'+subCategory.name}><li>{subCategory.display}</li></a>
    });

    return (
      <div className='category-item'>
        <a href={'/products-by-category/'+this.props.category.name}>{this.props.category.display}</a>
        <ul>
        {subCategories}
        </ul>
      </div>
    );
  }
});
export default CategoryItem

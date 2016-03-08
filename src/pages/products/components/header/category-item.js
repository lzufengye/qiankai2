import React from 'react'
import Reflux from 'reflux'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

var CategoryItem = React.createClass({
  render() {
    var subCategories = this.props.category.subCategories.map(function (subCategory) {
      return <li>{subCategory.display}</li>
    });

    return (
      <div className='category-item'>
        {this.props.category.display}
        <ul>
        {subCategories}
        </ul>
      </div>
    );
  }
});
export default CategoryItem

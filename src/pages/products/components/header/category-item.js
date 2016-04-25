import React from 'react'
import Reflux from 'reflux'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

var CategoryItem = React.createClass({
  render() {
    var subSubCategories = [];
    var that = this;

    var subCategories = this.props.category.subCategories.map(function (subCategory) {
      if (typeof(subCategory.subCategories) != 'undefined') {
        subSubCategories.push(<br/>);
        subSubCategories.push(<a href={'/products-by-category/' + subCategory.name} className={'sub-sub-category-title'}>{subCategory.display}</a>);
        subCategory.subCategories.map(function (subCategoryItem) {
          subSubCategories.push(<a href={'/products-by-category/' + subCategoryItem.name}>
            <li>{subCategoryItem.display}</li>
          </a>);
        });
      }

      return <a href={'/products-by-category/' + subCategory.name}>
        <li>{subCategory.display}</li>
      </a>
    });

    var hideSubMenu = () => {
      $('#' + that.props.category.name).hide();
    };

    var displaySubMenu = () => {
      $('#' + that.props.category.name).show();
    };

    var displaySubSubCategories = subSubCategories.length > 0 ? <ul onMouseOver={displaySubMenu} onMouseOut={hideSubMenu} className='sub-sub-category' id={this.props.category.name}>
          {subSubCategories}
    </ul> : '';

    return (
      <div className='category-item' onMouseOver={displaySubMenu} onMouseOut={hideSubMenu}>
        <a href={'/products-by-category/' + this.props.category.name}>{this.props.category.display}</a>
        <ul onMouseOver={displaySubMenu} onMouseOut={hideSubMenu}>
        {subCategories}
        {displaySubSubCategories}
        </ul>
      </div>
    );
  }
});
export default CategoryItem

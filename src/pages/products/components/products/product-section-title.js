import React from 'react'
import Reflux from 'reflux'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

var ProductSectionTitle = React.createClass({
  render() {
    var style = {
      width: this.props.width,
      height: this.props.height,
      backgroundImage: 'url(' + this.props.backgroundImage + ')'
    };

    return (
      <a className='product-section-title' href={this.props.link} style={style}>
        <div>{this.props.title}</div>
      </a>
    );
  }
});

export default ProductSectionTitle

import React from 'react'

var ProductMoreInfo = React.createClass({
  render() {
    let product_details = this.props.product_details.map(function (image, index) {
      return <div className='product-more-image'><image src={image} data-src={image}/></div>
    });

    let services = this.props.services.map(function (image, index) {
      return <div className='product-more-image'><image src={image} data-src={image}/></div>
    });

    return (
      <div >
        <ul className='titles'>
          <li>商品详情</li>
          <li>包装及参数</li>
          <li>评价</li>
          <li>咨询</li>
          <li>售后保障</li>
        </ul>
        {product_details}
        {services}
      </div>
    );
  }
});

export default ProductMoreInfo

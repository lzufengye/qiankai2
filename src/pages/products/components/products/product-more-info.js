import React from 'react'

var ProductMoreInfo = React.createClass({
  render() {
    return (
      <div >
        <ul className='titles'>
          <li>商品详情</li>
          <li>包装及参数</li>
          <li>评价</li>
          <li>咨询</li>
          <li>售后保障</li>
        </ul>
        <div>
          <image src='/assets/images/products/product-detail.png'/>
        </div>
        <div>
          <image src='/assets/images/products/service.png'/>
        </div>
        <div>
          <image src='/assets/images/products/comments.png'/>
        </div>
      </div>
    );
  }
});

export default ProductMoreInfo

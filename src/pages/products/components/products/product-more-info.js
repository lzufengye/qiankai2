import React from 'react'

var ProductMoreInfo = React.createClass({
  render() {
    console.log(this.props);

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
          <image src={this.props.product_detail}/>
        </div>
        <div>
          <image src={this.props.service}/>
        </div>
      </div>
    );
  }
});

export default ProductMoreInfo

import React from 'react'

var LineItem = React.createClass({
  render() {
    var lineItem = this.props.lineItem

    return (
      <div className='line-item'>
        <a className='line-item-item' href={'/product/' + lineItem.product.id}>
          <img src={lineItem.product.image}/>
        </a>
        <a className='line-item-item line-item-item-name' href={'/product/' + lineItem.product.id}>
          <div>{lineItem.product.name}</div>
        </a>
        <div className='line-item-item'>单价：{lineItem.product.price}</div>
        <div className='line-item-item'>数量：{lineItem.quantity}</div>
      </div>
    );
  }
});

export default LineItem
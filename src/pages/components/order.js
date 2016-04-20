import React from 'react'
import LineItem from './line-item'

var Order = React.createClass({
  render() {
    var order = this.props.order
    var lineItems = order.line_items.map((lineItem, i) => {
      return <LineItem lineItem={lineItem}/>
    });

    return (
      <div className='order-container'>
        <div className='order-header'>
          <div className='order-header-item order-created-date'>{order.created_at}</div>
          <div className='order-header-item'>订单号：{order.sn}</div>
          <div className='order-header-item'>{order.state}</div>
        </div>
        <div className='order-detail'>
          <div className='order-line-item-container'>
        {lineItems}
          </div>
          <div className='order-price-container'>
            <div>总价：{order.total_price}</div>
            <div>运费：{order.ship_fee}</div>
          </div>
        </div>
      </div>
    );
  }
});

export default Order
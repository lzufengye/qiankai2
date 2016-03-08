import React from 'react'
import Reflux from 'reflux'
import Item from '../products/item.js'

var CustomerIndex = React.createClass({
  mixins: [Reflux.connect(advertisementStore), Reflux.ListenerMixin],

  render() {
    var customers = this.state.customers.map(function (customer) {
      return <a value={customer.id} className={customer.id == this.state.selected ? 'active' : 'inactive'}>{customer.name}</a>
    });

    var products = this.status.products.map(function (product, i) {
      return <Item key={product.id} item={product} index={i} />;
    });

    return (
      <div>
        {customers}
        {products}
      </div>
    );
  }

});

export default CustomerIndex

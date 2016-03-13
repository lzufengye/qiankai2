import React from 'react'
import Reflux from 'reflux'

import CartActions from '../../actions/cart'

var CartTableHead = React.createClass({
  getDefaultProps: function () {
    return {
      'editable': true,
      'data': [
        {'label': '', 'className': 'cart-checkbox select-all', 'type': 'checkbox', 'forEdit': true},
        {'label': '商品名称', 'className': 'cart-col-name', 'type': 'text', 'forEdit': false},
        {'label': '单价', 'className': 'cart-col-price', 'type': 'text', 'forEdit': false},
        {'label': '数量', 'className': 'cart-col-qty', 'type': 'text', 'forEdit': false},
        {'label': '小计', 'className': 'cart-col-sum', 'type': 'text', 'forEdit': false},
        {'label': '操作', 'className': 'cart-col-op', 'type': 'text', 'forEdit': true}]
    }
  },
  toggleAll: function (evt) {
    CartActions.toggleSelectAll(evt.target.checked);
  },
  render: function () {
    var that = this;
    var h = this.props.data.map(function (item, i) {
      if (item['forEdit'] && !that.props.editable) {
        return '';
      }
      var t;
      if (item['type'] == 'text') {
        t = item['label']
      } else if (item['type'] == 'checkbox') {
        t = (<label className="qing-checkbox" htmlFor={"col-index-" + i}>
          <input type="checkbox" onChange={that.toggleAll} className={item['className']} id={'col-index-' + i}/>
          <i></i>
        </label>);
      }
      return (
        <div key={i} className={"qing-col qing-col-th " + item['className']}>
					{t}
        </div>
      )
    });
    return (
      <div className="qing-table-head">
					{h}
      </div>
    )
  }
});

export default CartTableHead

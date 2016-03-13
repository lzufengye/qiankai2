import Reflux from 'reflux'

import CartActions from '../actions/cart'
import _ from 'lodash'
import Qing from '../../../utils/qing'
import request from 'superagent'
import layer from '../../../utils/layer'
import MemberActions from '../actions/member'

var CartStore = Reflux.createStore({
  listenables: [CartActions],
  shipFee: 0,
  selectedAddressId: '',
  productTotalFee: 0,
  invoiceTitle: '',
  selectedList: [],
  init: function () {
    //地址有变化时要通知过来
    this.listenTo(MemberActions.selectAddress, this.onSelectAddress);
  },
  initProductTotalFee: function (fee) {
    this.productTotalFee = fee;
  },
  //选中项以下单
  onSelectItemToOrder: function (selectedList) {
    this.selectedList = selectedList;
  },

  loadSelectedItems: function () {
    this.trigger({'selectedList': this.selectedList});
  },
  //保存发票信息
  onSaveInvoice: function (isEnbled, invoiceTitle) {
    //console.log('Enabled:'+isEnbled);
    this.invoiceTitle = isEnbled ? invoiceTitle : '';
    //console.log('set invoiceTitle'+this.invoiceTitle);
    this.trigger({'invoiceTitle': this.invoiceTitle});
  },
  onSelectAddress: function (addr) {
    if (this.shipFee)
      layer.msg('地址变更，重新计算运费');
    // console.log('this.shipFee'+this.shipFee);
    // console.log('this.productTotalFee'+this.productTotalFee);
    Qing.apiPost('shipping.getFee', {'cityId': addr['cityId'], 'pay': this.productTotalFee}, function (resp) {
      if (!resp.error) {
        this.selectedAddressId = addr['id'];
        this.shipFee = parseFloat(resp.data.fee);
        this.trigger({'shipFee': this.shipFee, 'selectedAddressId': this.selectedAddressId});
      } else {
        layer.closeAll();
        layer.msg(resp.msg);
      }
    }.bind(this));

  },
  //建订单
  onCreateOrder: function (data, callback) {
    layer.msg('提交订单中...');
    Qing.apiPost('order.create', data, function (resp) {
      layer.msg(resp.msg);
      if (!resp.error && 'function' == typeof callback) {
        callback(resp);
      }
    });
  },
  //加载购物车项目
  onLoadItems: function () {
    var $this = this;

    $this.list = [];
    request.get('/data/cart.json')
      .end((err, res) => {
        $this.list = JSON.parse(res.text).data;
        _.map($this.list, function (item) {
          item['selected'] = false
        });
        $this.loaded = true;
        $this.trigger({'list': $this.list, 'loaded': $this.loaded});
      });
  },
  onToggleSelectAll: function (selected) {
    this.list = _.map(this.list, function (item) {
      item.selected = selected;
      return item;
    });
    //console.log(this.list);
    this.updateList(this.list);
  },
  //删除购物车中的项目
  onDeleteItem: function (id) {
    var foundItem = this.getItemById(id);
    var qty = foundItem.qty;
    this.updateQty(0, foundItem);
  },
  //选中某项
  onToggleSelectItem: function (itemId) {
    //Q:取到的foundItem居然是引用的，一旦值变化，list也会变?
    var foundItem = this.getItemById(itemId);
    if (foundItem) {
      foundItem.selected = !foundItem.selected;
      this.updateList(this.list);
    }
  },
  //数量减少
  onSubtractQty: function (id) {
    var foundItem = this.getItemById(id);
    var qty = foundItem.qty;
    qty--;
    if (qty == 0) {
      return;
    } else {
      this.updateQty(qty, foundItem, true);
    }
  },
  //数量增加
  onAddQty: function (id) {
    var foundItem = this.getItemById(id);
    var qty = foundItem.qty;
    this.updateQty(++qty, foundItem, false);
  },
  updateList: function (list) {
    this.list = list;
    this.trigger({'list': list});
  },
  updateQty: function (qty, foundItem, reload) {
    reload = typeof reload == 'undefined' ? true : false;
    var $this = this;
    if (foundItem) {
      request.get('/data/cart.updateQty.json')
        .end((err, resp) => {
          if (resp.error) {
            layer.msg(resp.msg);
            if (resp.code == 80000) {
              //foundItem.qty = qty;
              //$this.trigger($this.list);
              if (reload) CartActions.loadItems();
            }
          } else {
            if (qty > 0) {
              foundItem.qty = qty;
            } else {
              //删除项目
              _.remove($this.list, function (item) {
                return item['id'] == foundItem['id'];
              });
              //console.log($this.list);
            }
            $this.updateList($this.list);
          }
        });
    }
  },
  getItemBySn: function (sn) {
    return _.find(this.list, function (item) {
      return item.sn === sn;
    })
  },
  getItemById: function (id) {
    return _.find(this.list, function (item) {
      return item.id === id;
    });
  }

});

export default CartStore
import Reflux from 'reflux'

import MemberStore from './member'
import MemberActions from '../actions/member'
import _ from 'lodash'
import Qing from '../../../utils/qing'
import layer from '../../../utils/layer'

var CartToOrder = Reflux.createStore({
  shipFee: 0,
  selectedAddressId: '',
  productTotalFee: 0,
  init: function () {
    //地址有变化时要通知过来
    this.listenTo(MemberActions.selectAddress, this.onSelectAddress);
  },
  initProductTotalFee: function (fee) {
    this.productTotalFee = fee;
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

  }
});

export default CartToOrder
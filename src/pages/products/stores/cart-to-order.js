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
    var $this = this;

    if (this.shipFee)
      layer.msg('地址变更，重新计算运费');

    request.get('/data/shipping.getFee.json')
      .end((err, resp) => {
        if (!resp.error) {
          if(addr != undefined) {
            $this.selectedAddressId = addr['id'];
          }
          $this.shipFee = parseFloat(JSON.parse(resp.text).data.fee);
          $this.trigger({'shipFee': $this.shipFee, 'selectedAddressId': $this.selectedAddressId});
        } else {
          layer.closeAll();
          layer.msg(resp.msg);
        }
      });

  }
});

export default CartToOrder
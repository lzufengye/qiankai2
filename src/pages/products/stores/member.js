import Reflux from 'reflux'

import MemberActions from '../actions/member'
import layer from '../../../utils/layer'
import RegionActions from '../actions/region'
import RegionStore from '../stores/region'
import _ from 'lodash'
import Qing from '../../../utils/qing'
import request from 'superagent'
import ServerConfig from '../../../config/server-config'

var Member = Reflux.createStore({
  listenables: [MemberActions],
  addressData: {
    address: '',
    receiver: '',
    phone: '',
    id: '',
    isDefault: '0',
    selected: 0
  },
  selectedAddressId: '',
  initAddressData: {},
  //列表默认显示几个
  showItemLimit: 4,
  init: function () {
    this.addressData = _.assign(this.addressData, RegionStore.getInitData());
    this.initAddressData = this.addressData;
    //侦听RegionStore数据变化
    this.listenTo(RegionStore, function (s) {
      this.addressData = _.assign(this.addressData, s);
      this.trigger(this.addressData);
    });
  },
  onToggleShowMoreAddress: function () {
    if (this.showItemLimit != this.list.length) {
      this.showItemLimit = this.list.length;
    } else {
      this.showItemLimit = 4;
    }
    //重排序
    this.list = _.sortByOrder(this.list, ['selected', 'isDefault'], ['desc', 'desc']);

    this.trigger({'list': this.list, 'showItemLimit': this.showItemLimit});
  },
  //选中某地址用于配货
  onSelectAddress: function (addr) {
    if(addr != undefined) {
      this.selectedAddressId = addr['id'];
    }
    this.list = _.map(this.list, function (item) {
      if (this && item['id'] == this.selectedAddressId) {
        item['selected'] = 1;
      } else {
        item['selected'] = 0;
      }
      return item;
    });
    this.trigger({'selectedAddressId': this.selectedAddressId, 'list': this.list});
  },
  onSaveAddress: function (data, callback) {
    request.post(ServerConfig.serverUrl + '/api/addresses?token='  + localStorage.token)
      .send(data)
      .end((err, resp) => {
        if ('function' == typeof callback) {
          callback(resp);
        }
        if (!resp.error) {
          //更新list
          this.onLoadAddressList();
        }
      }).bind(this);
  },
  onNewAddress: function () {
    var data = this.getInitAddressObject(true);
    this.trigger(data);
  },
  getInitAddressObject: function () {
    //省份列表不再重新初始化
    this.initAddressData['provinceList'] = this.addressData['provinceList'];
    return this.initAddressData;
  },
  onLoadAddress: function (addressObject, callback) {
    this.addressData.receiver = addressObject['receiver'];
    this.addressData.phone = addressObject['phone'];
    this.addressData.address = addressObject['address'];
    this.addressData.selectedProvinceId = addressObject['provinceId'];
    this.addressData.selectedCityId = addressObject['name'];
    this.addressData.id = addressObject['id'];
    this.addressData.isDefault = addressObject['isDefault'];
    this.addressData.selectedRegion = addressObject['provinceName'] + '/' + addressObject['cityName'];

    //根据provinceId与cityId取得相关内容
    this.addressData.selectedProvince = _.find(this.addressData.provinceList, function (p) {
      return p.id === addressObject['provinceId'];
    });
    var $this = this;
    RegionActions.selectProvince(this.addressData.selectedProvince, function () {
      $this.addressData.selectedCityId = addressObject['name'];
      $this.addressData.selectedCity = _.find($this.addressData.cityList, function (c) {
        return c.id === $this.addressData.selectedCityId;
      });
      //由于RegionActions事件的影响，selectedRegion被清掉，需要重置
      $this.addressData.selectedRegion = addressObject['provinceName'] + '/' + addressObject['cityName'];
      //console.log($this.addressData);
      $this.trigger($this.addressData);
      if ('function' == typeof callback) {
        callback.call();
      }
    });
    //this.trigger(this.addressData);
  },
  onLoadAddressList: function () {
    var $this = this;

    request.get(ServerConfig.serverUrl + '/api/addresses?token=' + localStorage.token)
      .end((err, resp) => {
        $this.list = JSON.parse(resp.text).addresses;
        $this.trigger({'list': JSON.parse(resp.text).addresses});
        //选中默认
        if (!this.selectedAddressId && _.isArray($this.list) && $this.list.length > 0) {
          var defaultAddr = _.find($this.list, function (item) {
            return item['isDefault'] == 1;
          });
          MemberActions.selectAddress(defaultAddr);
        }
      });
  }
});

export default Member
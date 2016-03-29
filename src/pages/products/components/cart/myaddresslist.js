import React from 'react'
import Reflux from 'reflux'

import MemberActions from '../../actions/member'
import MemberStore from '../../stores/member'
import AddressEditor from '../addresseditor'
import layer from '../../../../utils/layer'
//地址项
var MyAddressItem = React.createClass({
  editAddrItem: function (e) {
    this.props.editHandler(this.props.data);
    e.stopPropagation();
  },
  selectAddrItem: function () {
    this.props.selectHandler(this.props.data);
  },
  render: function () {
    return (
      <div className="col-md-3 qing-no-padding">
        <div className={(this.props.data['id'] == this.props.selectedId) ? 'cart-addr-item cart-addr-active' : 'cart-addr-item'} onClick={this.selectAddrItem}>
          <div className="cart-addr-title">
						{this.props.data['provinceName'] + this.props.data['cityName']} （{this.props.data['receiver'] + '收'}）
          </div>
          <div className="cart-addr-detail" >
						{this.props.data['address'] + ' ' + this.props.data['phone']}
            <br/>
            <a className="cart-addr-edit" onClick={this.editAddrItem}>
              <i className="fa fa-pencil"></i>{'修改'}</a>
          </div>
          <i></i>
					{(this.props.data['isDefault'] == 1) ? <span className="cart-default-addr">{'默认地址'}</span> : ''}

        </div>
      </div>
    )
  }
});
//地址列表
var AddressList = React.createClass({
  getDefaultProps: function () {
    return {
      'selectAddress': function () {
      }
    }
  },
  getInitialState: function () {
    return {
      list: [],
      selectedAddressId: '',
      showItemLimit: 4
    }
  },
  editorLayerIndex: null,
  mixins: [Reflux.connect(MemberStore)],
  componentDidMount: function () {
    MemberActions.loadAddressList();
  },
  newAddress: function () {
    MemberActions.newAddress();
    this.editorLayerIndex = layer.open({
      type: 1,
      skin: 'layui-layer-demo', //样式类名
      shift: 2,
      shadeClose: true, //开启遮罩关闭
      maxWidth: 900,
      area: '500px',
      closeBtn: 1,
      title: '新建收货地址',
      content: $('#addressEditor')
    });
  },
  hideAddressEditor: function () {
    layer.closeAll();
  },
  saveAddress: function (data) {
    MemberActions.saveAddress(data, function (resp) {
      layer.msg(resp.msg);
      layer.close(this.editorLayerIndex);
    }.bind(this));
  },
  editAddress: function (addr) {
    MemberActions.loadAddress(addr);
    this.editorLayerIndex = layer.open({
      type: 1,
      skin: 'layui-layer-demo', //样式类名
      shift: 2,
      shadeClose: true, //开启遮罩关闭
      maxWidth: 900,
      area: '500px',
      closeBtn: 1,
      title: '修改收货地址',
      content: $('#addressEditor')
    });
  },
  selectAddress: function (addr) {
    MemberActions.selectAddress(addr);
    this.props.selectAddress(addr['id']);
  },
  toggleShowMoreAddress: function () {
    MemberActions.toggleShowMoreAddress();
  },
  render: function () {
    var moreAddrs = '';
    if (_.isArray(this.state.list)) {
      if (this.state.list.length > this.state.showItemLimit) {
        moreAddrs = <a className="cart-addr-more" onClick={this.toggleShowMoreAddress}>{'显示更多地址'}</a>
      } else {
        moreAddrs = <a className="cart-addr-more" onClick={this.toggleShowMoreAddress}>{'向上收起'}</a>
      }
    }
    return (
      <div className="cart-mod row">
        <h2 className="cart-mod-title">
           {'收货地址'}</h2>
        <div className="cart-addr-list qing-pad-bottom-10">
					{_.map(this.state.list, function (addr, i) {
            if (i >= this.state.showItemLimit) {
              return;
            }
            return <MyAddressItem data={addr} selectedId={this.state.selectedAddressId} selectHandler={this.selectAddress} editHandler={this.editAddress} key={addr['id']}/>
          }, this)}
        </div>
        <div className="col-md-12">
          <button className="btn" onClick={this.newAddress} type="button">
            {'新增收货地址'}</button>
						{moreAddrs}
        </div>

        <div className="container-fluid" style={{display: 'none'}} id="addressEditor">
          <AddressEditor saveHandler={this.saveAddress} cancelSave={this.hideAddressEditor}/>
        </div>
      </div>
    )
  }
});

export default AddressList
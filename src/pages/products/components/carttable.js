import CartActions from '../actions/cart'
import RegionActions from '../actions/region'
import MemberActions from '../actions/member'
import InvoiceActions from '../actions/invoice'
import CartStore from '../stores/cart'
import RegionStore from '../stores/region'
import MemberStore from '../stores/member'
import InvoiceStore from '../stores/invoice'

import Reflux from 'reflux'
import React from 'react'
import LinkedStateMixin from 'react/lib/LinkedStateMixin'
import cookie from 'react-cookie'

import { browserHistory } from 'react-router'
import layer from '../../../utils/layer'
import LinkedStateRadioGroupMixin from '../../../utils/linkedStateRadioGroupMixin'
import CartTableHead from './cart/cart-table-header'
import CartTableBody from './cart/cart-table-body'

//空购物车
var EmptyShoppingCart = React.createClass({
	render: function () {
		return (
			<div className="qing-empty-cart">
				<h2>{'您的购物车还是空的！'}</h2>
			</div>
		);
	}
});
function flowCartSummary() {
	if ($('#cart-summary').length) {
		var curTop = parseInt($(document).scrollTop()) + parseInt($(window).height()) - parseInt($('#cart-summary').height());
		var minTop = $('#cart-summary').data('minTop');
		if (curTop < minTop) {
			if (!$('#cart-summary').hasClass('cart-summary-up')) {
				$('#cart-summary').addClass('cart-summary-up');
				//console.log('addClass');
			}
		} else {
			if ($('#cart-summary').hasClass('cart-summary-up')) {
				$('#cart-summary').removeClass('cart-summary-up');
				//console.log('removeClass');
			}
		}
	}
}
//合计部分
var CartSummary = React.createClass({
	getInitialState: function () {
		return {
			className: 'cart-summary clearfix'
		}
	},

	componentDidMount: function () {
		var minTop = $('#cart-summary').offset().top;
		$('#cart-summary').data('minTop', minTop);
		$(window).scroll(function () {
			flowCartSummary();
		});
		flowCartSummary();
	},

	readyCreateOrder: function () {
		var selectedList = _.filter(this.props.data, function (item) {
			return item['selected'] == true;
		});
		if (_.isArray(selectedList) && selectedList.length > 0) {
			CartActions.selectItemToOrder(selectedList);
			localStorage.basket = JSON.stringify(selectedList)
			browserHistory.push('/shopping-cart-to-order');
		} else
			layer.msg('请选择要购买的商品');
	},
	render: function () {
		var selectedLen = 0;
		_.map(this.props.data, function (item) {
			if (item['selected']) {
				selectedLen += parseInt(item['qty']);
			}
		});

		var selectedItemString = '已选商品' + selectedLen + '件';
		var totalPay = 0;
		_.map(this.props.data, function (item) {
			if (item['selected']) {
				totalPay += parseInt(item['qty']) * parseFloat(item['price'])
			}
		});
		return (
			<div id="cart-summary" className={this.state.className}>
				<div className="pull-left"></div>
				<div className="pull-right">
					<span className="cart-selected-num" dangerouslySetInnerHTML={{
						__html: selectedItemString
					}}></span>
					<span className="cart-pay-amount">{'合计（不含运费）'}
						<em>
							<i className="fa fa-rmb"></i>{totalPay}</em>
					</span>
					<button className="btn cart-goto-order" onClick={this.readyCreateOrder} type="button">{'去结算'}</button>
				</div>
			</div>
		)
	}
});
//购物车应用
var CartApp = React.createClass({
	mixins: [Reflux.connect(CartStore)],
	getInitialState: function () {
		return {
			loaded: false,
			list: []
		}
	},
	componentDidMount: function () {
		CartActions.loadItems();
	},
	render: function () {
		return (
			<CartTable list={this.state.list} loaded={this.state.loaded} />
		)
	}
});
//购物车表
var CartTable = React.createClass({
	//mixins:[ReactRouter.state],
	render: function () {
		var content = summary = '';
		if (this.props.loaded === false) {
			layer.load(1);
			content = <p className="alert alert-warning">
				<i className="fa fa-info"></i> {'加载中...'}</p>
		} else {
			layer.closeAll();
			var content = <EmptyShoppingCart />;
			var summary = <CartSummary data={this.props.list}/>;
			if (this.props.list != null && this.props.list.length > 0) {
				content = (<div className="qing-table">
					<CartTableHead editable={true}/>
					<CartTableBody data={this.props.list} editable={true}/>
				</div>
				);
			} else {
				summary = '';
			}
		}
		return (
			<div>
				{content}
				{summary}
			</div>
		)
	}
});

var CartMemo = React.createClass({
	render: function () {
		return (
			<div className="cart-mod">
				<h2 className="cart-mod-title">
					<i className="icon iconfont">&#xe625;</i> {'我要留言'}</h2>
				<textarea className="form-control" rows="3">{this.props.orderMemo}</textarea>
			</div>
		)
	}
});
//支付方式
var CartPayWay = React.createClass({
	render: function () {
		return (
			<div className="cart-mod">
				<h2 className="cart-mod-title">
					<i className="icon iconfont">&#xe611;</i> {'支付方式'}</h2>
				<span>
					<img src={QING_IMGHOST + 'www/i/alipay.jpg'}/>
				</span>
				<span>
					<img src={QING_IMGHOST + 'www/i/wxpay.jpg'}/>
				</span>
			</div>
		)
	}
});

var CartPage = React.createClass({
	render() {
		return (
			<CartApp>
				</CartApp>
		);
	}
});

export default CartPage

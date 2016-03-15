import React from 'react'
import Basket from '../basket/basket'
import ShoppingCart from '../basket/shopping-cart'
import NavLink from '../../../../header/nav-link'
import ProductCategory from './product-category'
import MenuItem from './menu-item'

var Header =
  React.createClass({
    displayBasket() {
      $('.appBasket').css({visibility: 'visible'});
    },

    hideBasket() {
      $('.appBasket').css({visibility: 'hidden'});
    },

    render() {
      var that = this;
      var shoppingMallItems = [{name: '开县自营', link: '/products-by-category/self_sale'},
        {name: '名特产品', link: '/products-by-category/kaixian_special'},
        {name: '乡村土货', link: '/products-by-category/village_product'},
        {name: '工艺产品', link: '/products-by-category/hand_craft'},
        {name: '县外产品', link: '/products-by-category/out_kaixian'},
        {name: '进口产品', link: '/products-by-category/imported'}
      ];
      var travelItems = [{name: '热门产品', link: '#'},
        {name: '乡村旅游', link: '#'},
        {name: '自驾旅游', link: '#'},
        {name: '酒店预订', link: '#'},
        {name: '虚拟旅游', link: '#'},
        {name: '驴友之家', link: '#'}
      ];
      var convenienceLifeItems = [{name: '购票缴费', link: '#'},
        {name: '健康服务', link: '#'},
        {name: '就业服务', link: '/convenience-life/jobs'},
        {name: '餐饮娱乐', link: '#'},
        {name: '房屋中介', link: '#'},
        {name: '家政服务', link: '#'}
      ];
      var financeServiceItems = [{name: '投资理财', link: '#'},
        {name: '融资担保', link: '#'},
        {name: '小额贷款', link: '/convenience-life/jobs'},
        {name: '银行服务', link: '#'},
        {name: '保险服务', link: '#'},
        {name: '证券资讯', link: '#'}
      ];
      var innovationSpaceItems = [{name: '商家展示', link: '#'},
        {name: '孵化体验', link: '#'},
        {name: '合作配套', link: '/convenience-life/jobs'},
        {name: '活动发布', link: '#'},
        {name: '教育培训', link: '#'},
        {name: '创客之家', link: '#'}
      ];
      var companyItems = [{name: '企业入驻', link: '#'},
        {name: '政策咨询', link: '#'},
        {name: '专家把脉', link: '/convenience-life/jobs'},
        {name: '商务运作', link: '#'},
        {name: '法务服务', link: '#'},
        {name: '协会服务', link: '#'}
      ];

      return (
          <div className="pure-g">
            <header className="appHeader pure-u-1">
              <div className="top-nav">
                <ul className="right clear">
                  <li>登录</li>
                  <li>注册</li>
                  <li>我的订单</li>
                  <li>我的开街</li>
                  <ShoppingCart />
                </ul>
              </div>
              <div className="middle-nav">
                <image className='logo-image' src='/assets/images/products/logo.jpg' />
                <image className='logo-title' src='/assets/images/products/logo-title.png' />
              </div>
              <div className="bottom-nav">
                <ProductCategory />
                <MenuItem menuIndex={1} subMenu={shoppingMallItems} name='开街商城' link='/products/all' />
                <MenuItem menuIndex={2} subMenu={travelItems} name='智慧旅游' link='/travel.html' />
                <MenuItem menuIndex={3} subMenu={convenienceLifeItems} name='便民服务' link='/convenience-life/newses' />
                <MenuItem menuIndex={4} subMenu={financeServiceItems} name='金融服务' link='/convenience-life/newses' />
                <MenuItem menuIndex={5} subMenu={innovationSpaceItems} name='众创空间' link='/innovation-space/activities' />
                <MenuItem menuIndex={6} subMenu={companyItems} name='企业服务' link='/innovation-space/activities' />
              </div>
              { this.props.children }
            </header>
            <div className='basket-container' onMouseOver={that.displayBasket} onMouseOut={that.hideBasket}>
              <Basket />
            </div>
          </div>
      );
    }
  });
export default Header

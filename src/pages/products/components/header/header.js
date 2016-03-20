import React from 'react'
import Basket from '../basket/basket'
import ShoppingCart from '../basket/shopping-cart'
import NavLink from '../../../../header/nav-link'
import ProductCategory from './product-category'
import MenuItem from './menu-item'
import auth from '../../../../utils/auth'

var Header =
  React.createClass({
    displayBasket() {
      $('.appBasket').css({visibility: 'visible'});
    },

    hideBasket() {
      $('.appBasket').css({visibility: 'hidden'});
    },

    getInitialState() {
      return {
        loggedIn: auth.loggedIn()
      }
    },

    updateAuth(loggedIn) {
      this.setState({
        loggedIn: !!loggedIn
      })
    },

    componentWillMount() {
      auth.onChange = this.updateAuth
      auth.login()
    },

    render() {
      var that = this;
      var shoppingMallItems = [{name: '开街县货', link: '/products-by-category/self_sale'},
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
      var financeServiceItems = [{name: '投资理财', link: '/finance-service/articles/investment'},
        {name: '融资担保', link: '/finance-service/articles/financing_guarantee'},
        {name: '小额贷款', link: '/finance-service/articles/microfinance'},
        {name: '银行服务', link: '/finance-service/articles/bank_services'},
        {name: '保险服务', link: '/finance-service/articles/insurance_services'},
        {name: '证券资讯', link: '/finance-service/articles/securities_information'}
      ];
      var innovationSpaceItems = [{name: '商家展示', link: '/innovation-space/articles/customer_show'},
        {name: '孵化体验', link: '/innovation-space/articles/incubation'},
        {name: '合作配套', link: '/innovation-space/articles/cooperation'},
        {name: '活动发布', link: '/innovation-space/activities'},
        {name: '教育培训', link: '/innovation-space/articles/education'},
        {name: '创客之家', link: '/finance-service/articles/guest_house'}
      ];
      var companyItems = [{name: '企业入驻', link: '/company-service/articles/company_settlement'},
        {name: '政策咨询', link: '/company-service/articles/company_policies'},
        {name: '专家把脉', link: '/company-service/articles/experts'},
        {name: '商务运作', link: '/company-service/articles/business_running'},
        {name: '法务服务', link: '/company-service/articles/law_services'},
        {name: '协会服务', link: '/company-service/articles/association_service'}
      ];

      console.log(this.state.loggedIn);

      return (
        <div className="pure-g">
          <header className="appHeader pure-u-1">
            <div className="top-nav">
              <ul className="right clear">
                  {this.state.loggedIn ? (
                    <li>
                      <a href="/logout">退出</a>
                    </li>
                  ) : (
                    <li>
                      <a href="/login">登录</a>
                    </li>
                  )}
                {this.state.loggedIn ? ('') : (<li>
                  <a href="/login">注册</a>
                </li>)}
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
              <ProductCategory display={this.props.display}/>
              <MenuItem menuIndex={1} subMenu={shoppingMallItems} name='开街商城' link='/products/all' />
              <MenuItem menuIndex={2} subMenu={travelItems} name='智慧旅游' link='/travel.html' />
              <MenuItem menuIndex={3} subMenu={convenienceLifeItems} name='便民服务' link='/convenience-life/newses' />
              <MenuItem menuIndex={4} subMenu={financeServiceItems} name='金融服务' link='/finance-service/articles/investment' />
              <MenuItem menuIndex={5} subMenu={innovationSpaceItems} name='众创空间' link='/innovation-space/activities' />
              <MenuItem menuIndex={6} subMenu={companyItems} name='企业服务' link='/company-service/articles/company_settlement' />
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

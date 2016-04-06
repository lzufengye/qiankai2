import React from 'react'
import Basket from '../basket/basket'
import ShoppingCart from '../basket/shopping-cart'
import NavLink from '../../../../header/nav-link'
import ProductCategory from './product-category'
import MenuItem from './menu-item'
import auth from '../../../../utils/auth'
import SearchBar from '../../../../header/search-bar'

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
      var shoppingMallItems = [{name: '开街自营', link: '/products-by-category/self_sale'},
        {name: '名特产品', link: '/products-by-category/kaixian_special'},
        {name: '乡村土货', link: '/products-by-category/xiangcuntuhuo'},
        {name: '工业产品', link: '/products-by-category/gongyichanping'},
        {name: '县外产品', link: '/products-by-category/xianwaichanping'},
        {name: '进口产品', link: '/products-by-category/imported'}
      ];
      var travelItems = [{name: '热门产品', link: '#'},
        {name: '乡村旅游', link: '#'},
        {name: '自驾旅游', link: 'http://bbs.cqkx.com/forum-142-1.html'},
        {name: '酒店预订', link: '#'},
        {name: '虚拟旅游', link: '#'},
        {name: '驴友之家', link: 'http://bbs.cqkx.com/forum-129-1.html'}
      ];
      var convenienceLifeItems = [{name: '购票缴费', link: 'https://jiaofei.alipay.com/jiaofei.htm?_pdType=aecfbbfgeabbifdfdieh&_scType=bacfajegafddadijhagd'},
        {name: '健康服务', link: 'http://bbs.cqkx.com/forum.php?mod=forumdisplay&fid=288'},
        {name: '就业服务', link: 'http://www.kzrc.gov.cn/'},
        {name: '餐饮娱乐', link: 'http://bbs.cqkx.com/forum-129-1.html'},
        {name: '房屋中介', link: 'http://bbs.cqkx.com/forum-131-1.html'},
        {name: '家政服务', link: 'http://job.cqkx.com/index.php?m=com&c=search&hy=&jobids=&cityid=&pr=&mun=&exp=&salary=&edu=&up'}
      ];
      var financeServiceItems = [{name: '投资理财', link: 'http://www.kqjr.cn'},
        {name: '融资担保', link: 'http://www.cqkxxn.com/'},
        {name: '小额贷款', link: 'http://www.kqjr.cn'},
        {name: '银行服务', link: '/finance-service/articles/bank_services'},
        {name: '保险服务', link: 'https://yebprod.alipay.com/yeb/index.htm'},
        {name: '证券资讯', link: 'http://www.kqjr.cn/Article/Index?code=news'}
      ];
      var innovationSpaceItems = [{name: '商家展示', link: '/innovation-space/articles/customer_show'},
        {name: '孵化体验', link: '/innovation-space/articles/incubation'},
        {name: '合作配套', link: '/innovation-space/articles/cooperation'},
        {name: '活动发布', link: '/innovation-space/activities'},
        {name: '教育培训', link: '/innovation-space/articles/education'},
        {name: '创客之家', link: '/innovation-space/articles/guest_house'}
      ];
      var companyItems = [{name: '企业入驻', link: '/customers'},
        {name: '政策咨询', link: '/company-service/articles/company_policies'},
        {name: '专家把脉', link: '/company-service/articles/experts'},
        {name: '商务运作', link: '/company-service/articles/business_running'},
        {name: '法务服务', link: '/company-service/articles/law_services'},
        {name: '协会服务', link: '/company-service/articles/association_service'}
      ];

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
                  <a href="/register">注册</a>
                </li>)}
                <li>我的订单</li>
                <ShoppingCart />
              </ul>
            </div>
            <div className="middle-nav">
              <image className='logo-image' src='/assets/images/products/logo.jpg' />
              <image className='logo-title' src='/assets/images/products/logo-title.jpg' />
              <SearchBar />
            </div>
            <div className="bottom-nav">
              <ProductCategory display={this.props.display}/>
              <MenuItem menuIndex={1} subMenu={shoppingMallItems} name='开街商城' link='/' />
              <MenuItem menuIndex={2} subMenu={travelItems} name='智慧旅游' link='/travel.html' />
              <MenuItem menuIndex={3} subMenu={convenienceLifeItems} name='便民服务' link='/convenience-life/newses' />
              <MenuItem menuIndex={4} subMenu={financeServiceItems} name='金融服务' link='/finance-service/articles/investment' />
              <MenuItem menuIndex={5} subMenu={innovationSpaceItems} name='众创空间' link='/innovation-space/activities' />
              <MenuItem menuIndex={6} subMenu={companyItems} name='企业服务' link='/company-service/articles/company_settlement' />
            </div>
          </header>
          <div className='basket-container' onMouseOver={that.displayBasket} onMouseOut={that.hideBasket}>
            <Basket />
          </div>
        </div>
      );
    }
  });
export default Header

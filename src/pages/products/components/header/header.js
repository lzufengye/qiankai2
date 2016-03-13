import React from 'react'
import Basket from '../basket/basket'
import ShoppingCart from '../basket/shopping-cart'
import NavLink from '../../../../header/nav-link'
import ProductCategory from './product-category'

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

      return (
          <div className="pure-g">
            <header className="appHeader pure-u-1">
              <div className="top-nav">
                <span><image src='/assets/images/products/home-button.png'/></span>
                <span className="back-home">返回首页</span>
                <ul>
                  <li>网站导航</li>
                  <li>消息</li>
                </ul>
                <ul className="right clear">
                  <li>登录</li>
                  <li>注册</li>
                  <li>我的订单</li>
                  <li>我的开街</li>
                  <ShoppingCart />
                </ul>
              </div>
              <div className="middle-nav">
                <image className='logo-image' src='/assets/images/products/logo3.png' />
                <image className='logo-title' src='/assets/images/products/logo-title.png' />
              </div>
              <div className="bottom-nav">
                <ProductCategory />
                <NavLink to="/" onlyActiveOnIndex>首页</NavLink>
                <a href='#'>智慧旅游</a>
                <NavLink to="/convenience-life/newses">便民服务</NavLink>
                <NavLink to="/" onlyActiveOnIndex>热点资讯</NavLink>
                <NavLink to="/innovation-space/activities" >众创空间</NavLink>
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

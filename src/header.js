import React from 'react'
import Menu from './header/menu'
import MenuItem from './header/menu-item'
import NavLink from './header/nav-link'
import SearchBar from './header/search-bar'

var Header = React.createClass({
  render() {
    return (
      <div className='header'>
        <image className='logo' src='/assets/images/logo.png' />
        <Menu >
          <NavLink to="/" onlyActiveOnIndex>首页</NavLink>
          <a href='http://www.sxstg.cn/' target='_blank'>三峡生态购</a>
          <NavLink to="/convenience-life/newses">便民生活</NavLink>
          <NavLink to="/education-service/articles/learning" >教育服务</NavLink>
          <NavLink to="/innovation-space/activities" >众创空间</NavLink>
          <NavLink to="/about" onlyActiveOnIndex>关于我们</NavLink>
          <NavLink to="/products/food" onlyActiveOnIndex>商城</NavLink>
          <SearchBar />
        </Menu>
      </div>
    );
  }
});

export default Header
import React from 'react'
import Menu from './header/menu'
import MenuItem from './header/menu-item'
import NavLink from './header/nav-link'
import SearchBar from './header/search-bar'

var Header = React.createClass({
  render() {
    return (
      <div className='header'>
        <image className='logo' src='' />
        <Menu >
          <NavLink to="/" onlyActiveOnIndex>首页</NavLink>
          <NavLink to="/page2" onlyActiveOnIndex>首页</NavLink>
          <NavLink to="/about" onlyActiveOnIndex>首页</NavLink>
          <SearchBar />
        </Menu>
      </div>
    );
  }
});

export default Header
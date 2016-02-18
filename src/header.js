import React from 'react'
import Menu from './components/menu'
import MenuItem from './components/menu-item.js'

var Header = React.createClass({
  render: function() {
    return (
      <div className='header'>
        <image className='logo' src='/study/build/assets/images/logo.png' />
        <Menu >
          <a href='www.baidu.com' className='node focus'>菜单一</a>
          <a href='www.baidu.com' className='node'>菜单二</a>
        </Menu>
      </div>
    );
  }
});

export default Header
import React from 'react'
import NavLink from './header/nav-link'

var Footer = React.createClass({
  render() {
    return (
      <div className='footer'>
        <div>
          <NavLink to="/about" onlyActiveOnIndex>网站介绍</NavLink>
          |
          <NavLink to="/about" onlyActiveOnIndex>公司介绍</NavLink>
          |
          <NavLink to="/about" onlyActiveOnIndex>联系方式</NavLink>
        </div>
        <div>
          重庆乾开电子商务有限公司版权所有
        </div>
      </div>
    );
  }
});

export default Footer
import React from 'react'
import NavLink from './header/nav-link'

var Footer = React.createClass({
  render() {
    var className = 'footer' + (this.props.isMobile ? ' mobile-footer' : '');

    return (
      <div className={className}>
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
        <div className='beian'>
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50023402000162" >
            <img src="/assets/images/beian.png"/>
            <div>渝公网安备 50023402000162号</div>
          </a>
        </div>
      </div>
    );
  }
});

export default Footer
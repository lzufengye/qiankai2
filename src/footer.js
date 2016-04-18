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
          <NavLink to="/">联系电话: 400 0933 876</NavLink>
        </div>
        <div className='beian'>
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50023402000162" >
            <img src="/assets/images/beian.png"/>
            <div>渝公网安备 50023402000162号</div>
          </a>
          <div>ICP备案号：渝ICP备15009385号-1</div>
        </div>
        <div className='beian'>
          <div>食品流通许可证：SP5002341610076106</div>
        </div>
        <div>
          ©2016 重庆乾开电子商务有限公司 版权所有
        </div>
      </div>
    );
  }
});

export default Footer
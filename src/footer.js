import React from 'react'

var Footer = React.createClass({
  render() {
    return (
      <div className='footer'>
        <div>
          <a>网站介绍</a>
          |
          <a>公司介绍</a>
          |
          <a>联系方式</a>
        </div>
        <div>
          重庆乾开电子商务有限公司版权所有
        </div>
      </div>
    );
  }
});

export default Footer
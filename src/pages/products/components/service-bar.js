import React from 'react'

var Service = React.createClass({
  render() {
    return (
      <div className='right-bar'>
        <div className='good-stuff'>
          <a href='/products-by-category/organic' className='good-stuff-section'><img src='/assets/images/youji.jpg'/></a>
          <a href='/products-by-category/green' className='good-stuff-section'><img src='/assets/images/lvse.jpg'/></a>
          <a href='/products-by-category/foundation' className='good-stuff-section'><img src='/assets/images/jidi.jpg'/></a>
          <a href='/products-by-category/heritage' className='good-stuff-section'><img src='/assets/images/yichan.jpg'/></a>
        </div>
        <div id='facilitate-service'>
          <ul>
            <li>
              <a href='http://app.alipay.com:80/home/appGateway.htm?appId=1000000020' target='_blank'>
                <img src='/assets/images/mobile-fee.png'/>
                <br/>
                手机充值
              </a>
            </li>
            <li>
              <a href='http://app.alipay.com:80/home/appGateway.htm?appId=1000000015' target='_blank'>
                <img src='/assets/images/credit-card.png'/>
                <br/>
                信用卡还款
              </a>
            </li>
            <li>
              <a href='http://app.alipay.com:80/home/appGateway.htm?appId=1000000108' target='_blank'>
                <img src='/assets/images/tv-fee.png'/>
                <br/>
                有线电视缴费
              </a>
            </li>
            <li>
              <a href='http://app.alipay.com:80/home/appGateway.htm?appId=1000000056' target='_blank'>
                <img src='/assets/images/telephone-fee.png'/>
                <br/>
                固话宽带
              </a>
            </li>
            <li>
              <a href='http://app.alipay.com:80/home/appGateway.htm?appId=1000000086' target='_blank'>
                <img src='/assets/images/house-service.png'/>
                <br/>
                物业缴费
              </a>
            </li>
            <li>
              <a href='http://app.alipay.com:80/home/appGateway.htm?appId=1000000051' target='_blank'>
                <img src='/assets/images/traffic-fee.png'/>
                <br/>
                交通违章
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

export default Service
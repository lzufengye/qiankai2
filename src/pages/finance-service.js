import React from 'react'
import ImageWithTitle from './components/image-with-title.js'
import CustomerSlider from './components/slider.js'
import SectionTitle from './components/section-title.js'
import Block from './components/block.js'
import InformationBoard from './components/information-board'
import NavLink from '../header/nav-link'
import ServerConfig from '../config/server-config'
import mobileUtils from '../utils/mobile-utils'

var FinanceService = React.createClass({

  componentDidMount() {
    $('.product-category').css('visibility', 'hidden');
  },

  render() {
    var containerClass = 'container' + (mobileUtils.mobileCheck() ? ' mobile-products-container' : '');
    var blockWidth = mobileUtils.mobileCheck() ? '33.3%' : '185px';
    var blockHeight = mobileUtils.mobileCheck() ? '30px' : '122px';

    return (
      <div className={containerClass}>
        <div className='left-part left-menu'>
          <a href="http://www.kqjr.cn" target='_blank'>
            <Block backgroundColor='#ec87c1' width={blockWidth} height={blockHeight} blockIcon='/assets/images/activities.png'>
              <div className='title-cn'>投资理财</div>
              <div className='title-en'>Investment</div>
            </Block>
          </a>
          <a href="http://www.cqkxxn.com/" target='_blank'>
            <Block backgroundColor='#967bdc' width={blockWidth} height={blockHeight} blockIcon='/assets/images/project.png'>
              <div className='title-cn'>融资担保</div>
              <div className='title-en'>Financing Guarantee</div>
            </Block>
          </a>
          <a href="http://www.kqjr.cn" target='_blank'>
            <Block backgroundColor='#22b658' width={blockWidth} height={blockHeight} blockIcon='/assets/images/services.png'>
              <div className='title-cn'>小额贷款</div>
              <div className='title-en'>Microfinance</div>
            </Block>
          </a>
          <a href="/finance-service/articles/bank_services" target='_blank'>
            <Block backgroundColor='#fb6e52' width={blockWidth} height={blockHeight} blockIcon='/assets/images/incubators.png'>
              <div className='title-cn'>银行服务</div>
              <div className='title-en'>Bank Services</div>
            </Block>
          </a>
          <a href="https://yebprod.alipay.com/yeb/index.htm" target='_blank'>
            <Block backgroundColor='#f6bb43' width={blockWidth} height={blockHeight} blockIcon='/assets/images/incubators.png'>
              <div className='title-cn'>保险服务</div>
              <div className='title-en'>Insurance Services</div>
            </Block>
          </a>
          <a href="http://www.kqjr.cn/Article/Index?code=news" target='_blank'>
            <Block backgroundColor='#169fa5' width={blockWidth} height={blockHeight} blockIcon='/assets/images/support.png'>
              <div className='title-cn'>证券资讯</div>
              <div className='title-en'>Securities Information</div>
            </Block>
          </a>
        </div>
        {this.props.children}
      </div>

    );
  }
});

export default FinanceService
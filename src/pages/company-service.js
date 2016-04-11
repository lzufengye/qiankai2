import React from 'react'
import ImageWithTitle from './components/image-with-title.js'
import CustomerSlider from './components/slider.js'
import SectionTitle from './components/section-title.js'
import Block from './components/block.js'
import NavLink from '../header/nav-link'
import ServerConfig from '../config/server-config'
import mobileUtils from '../utils/mobile-utils'

var CompanyService = React.createClass({

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
          <NavLink to="/customers">
            <Block backgroundColor='#ec87c1' width={blockWidth} height={blockHeight} blockIcon='/assets/images/activities.png'>
              <div className='title-cn'>企业入驻</div>
              <div className='title-en'>Company Settlement</div>
            </Block>
          </NavLink>
          <NavLink to="/company-service/articles/company_policies">
            <Block backgroundColor='#967bdc' width={blockWidth} height={blockHeight} blockIcon='/assets/images/project.png'>
              <div className='title-cn'>政策咨询</div>
              <div className='title-en'>Policies</div>
            </Block>
          </NavLink>
          <NavLink to="/company-service/articles/experts">
            <Block backgroundColor='#22b658' width={blockWidth} height={blockHeight} blockIcon='/assets/images/services.png'>
              <div className='title-cn'>专家把脉</div>
              <div className='title-en'>Experts</div>
            </Block>
          </NavLink>
          <NavLink to="/company-service/articles/business_running">
          <Block backgroundColor='#fb6e52' width={blockWidth} height={blockHeight} blockIcon='/assets/images/incubators.png'>
            <div className='title-cn'>商务运作</div>
            <div className='title-en'>Business Running</div>
          </Block>
        </NavLink>
          <NavLink to="/company-service/articles/law_services">
            <Block backgroundColor='#f6bb43' width={blockWidth} height={blockHeight} blockIcon='/assets/images/incubators.png'>
              <div className='title-cn'>法务服务</div>
              <div className='title-en'>Law Services</div>
            </Block>
          </NavLink>
          <NavLink to="/company-service/articles/association_service">
            <Block backgroundColor='#169fa5' width={blockWidth} height={blockHeight} blockIcon='/assets/images/support.png'>
              <div className='title-cn'>协会服务</div>
              <div className='title-en'>Association Service</div>
            </Block>
          </NavLink>
        </div>
        {this.props.children}
      </div>

    );
  }
});

export default CompanyService
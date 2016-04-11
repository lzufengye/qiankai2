import React from 'react'
import ImageWithTitle from './components/image-with-title.js'
import CustomerSlider from './components/slider.js'
import SectionTitle from './components/section-title.js'
import Block from './components/block.js'
import InformationBoard from './components/information-board'
import NavLink from '../header/nav-link'
import ArticleList from './article-list'
import ServerConfig from '../config/server-config'
import mobileUtils from '../utils/mobile-utils'

var InnovationSpace = React.createClass({

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
          <NavLink to="/innovation-space/articles/customer_show">
            <Block backgroundColor='#967bdc' width={blockWidth} height={blockHeight} blockIcon='/assets/images/project.png'>
              <div className='title-cn'>商家展示</div>
              <div className='title-en'>Projects</div>
            </Block>
          </NavLink>
          <NavLink to="/innovation-space/articles/incubation">
            <Block backgroundColor='#fb6e52' width={blockWidth} height={blockHeight} blockIcon='/assets/images/incubators.png'>
              <div className='title-cn'>孵化体验</div>
              <div className='title-en'>Settle and incubation</div>
            </Block>
          </NavLink>
          <NavLink to="/innovation-space/articles/cooperation">
            <Block backgroundColor='#169fa5' width={blockWidth} height={blockHeight} blockIcon='/assets/images/support.png'>
              <div className='title-cn'>合作配套</div>
              <div className='title-en'>Cooperation and support</div>
            </Block>
          </NavLink>
          <NavLink to="/innovation-space/activities">
            <Block backgroundColor='#ec87c1' width={blockWidth} height={blockHeight} blockIcon='/assets/images/activities.png'>
              <div className='title-cn'>主题活动</div>
              <div className='title-en'>Activites</div>
            </Block>
          </NavLink>
          <NavLink to="/innovation-space/articles/education">
            <Block backgroundColor='#22b658' width={blockWidth} height={blockHeight} blockIcon='/assets/images/services.png'>
              <div className='title-cn'>教育培训</div>
              <div className='title-en'>/innovation-space/articles/education</div>
            </Block>
          </NavLink>
          <NavLink to="/innovation-space/articles/guest_house">
            <Block backgroundColor='#f6bb43' width={blockWidth} height={blockHeight} blockIcon='/assets/images/incubators.png'>
              <div className='title-cn'>创客之家</div>
              <div className='title-en'>Guest House</div>
            </Block>
          </NavLink>
        </div>
        {this.props.children}
      </div>

    );
  }
});

export default InnovationSpace
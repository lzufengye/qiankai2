import React from 'react'
import ImageWithTitle from './components/image-with-title.js'
import CustomerSlider from './components/slider.js'
import SectionTitle from './components/section-title.js'
import Block from './components/block.js'
import InformationBoard from './components/information-board'
import NavLink from '../header/nav-link'
import ArticleList from './article-list'
import ServerConfig from '../config/server-config'

var InnovationSpace = React.createClass({

  render() {
    return (
      <div className='container'>
        <div className='left-part left-menu'>
          <NavLink to="/innovation-space/activities">
            <Block backgroundColor='#ec87c1' width='185px' height='112px' blockIcon='/assets/images/activities.png'>
              <div className='title-cn'>主题活动</div>
              <div className='title-en'>Activites</div>
            </Block>
          </NavLink>
          <NavLink to="/innovation-space/articles/innovation_space">
            <Block backgroundColor='#967bdc' width='185px' height='112px' blockIcon='/assets/images/project.png'>
              <div className='title-cn'>众创空间展示</div>
              <div className='title-en'>Projects</div>
            </Block>
          </NavLink>
          <NavLink to="/innovation-space/articles/service">
            <Block backgroundColor='#22b658' width='185px' height='112px' blockIcon='/assets/images/services.png'>
              <div className='title-cn'>政策与服务</div>
              <div className='title-en'>Services</div>
            </Block>
          </NavLink>
          <NavLink to="/innovation-space/articles/incubation">
            <Block backgroundColor='#fb6e52' width='185px' height='112px' blockIcon='/assets/images/incubators.png'>
              <div className='title-cn'>入驻与孵化</div>
              <div className='title-en'>Settle and incubation</div>
            </Block>
          </NavLink>
          <NavLink to="/innovation-space/articles/cooperation">
            <Block backgroundColor='#169fa5' width='185px' height='112px' blockIcon='/assets/images/support.png'>
              <div className='title-cn'>合作与配套</div>
              <div className='title-en'>Cooperation and support</div>
            </Block>
          </NavLink>
        </div>
        {this.props.children}
      </div>

    );
  }
});

export default InnovationSpace
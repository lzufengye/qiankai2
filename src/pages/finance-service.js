import React from 'react'
import ImageWithTitle from './components/image-with-title.js'
import CustomerSlider from './components/slider.js'
import SectionTitle from './components/section-title.js'
import Block from './components/block.js'
import InformationBoard from './components/information-board'
import NavLink from '../header/nav-link'
import ServerConfig from '../config/server-config'

var FinanceService = React.createClass({
  render() {
    return (
      <div className='container'>
        <div className='left-part left-menu'>
          <NavLink to="/finance-service/articles/investment">
            <Block backgroundColor='#ec87c1' width='185px' height='112px' blockIcon='/assets/images/activities.png'>
              <div className='title-cn'>投资理财</div>
              <div className='title-en'>Investment</div>
            </Block>
          </NavLink>
          <NavLink to="/finance-service/articles/financing_guarantee">
            <Block backgroundColor='#967bdc' width='185px' height='112px' blockIcon='/assets/images/project.png'>
              <div className='title-cn'>融资担保</div>
              <div className='title-en'>Financing Guarantee</div>
            </Block>
          </NavLink>
          <NavLink to="/finance-service/articles/microfinance">
            <Block backgroundColor='#22b658' width='185px' height='112px' blockIcon='/assets/images/services.png'>
              <div className='title-cn'>小额贷款</div>
              <div className='title-en'>Microfinance</div>
            </Block>
          </NavLink>
          <NavLink to="/finance-service/articles/bank_services">
          <Block backgroundColor='#fb6e52' width='185px' height='112px' blockIcon='/assets/images/incubators.png'>
            <div className='title-cn'>银行服务</div>
            <div className='title-en'>Bank Services</div>
          </Block>
        </NavLink>
          <NavLink to="/finance-service/articles/insurance_services">
            <Block backgroundColor='#f6bb43' width='185px' height='112px' blockIcon='/assets/images/incubators.png'>
              <div className='title-cn'>保险服务</div>
              <div className='title-en'>Insurance Services</div>
            </Block>
          </NavLink>
          <NavLink to="/finance-service/articles/securities_information">
            <Block backgroundColor='#169fa5' width='185px' height='112px' blockIcon='/assets/images/support.png'>
              <div className='title-cn'>证券资讯</div>
              <div className='title-en'>Securities Information</div>
            </Block>
          </NavLink>
        </div>
        {this.props.children}
      </div>

    );
  }
});

export default FinanceService
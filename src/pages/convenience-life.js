import React from 'react'
import ImageWithTitle from './components/image-with-title.js'
import CustomerSlider from './components/slider.js'
import SectionTitle from './components/section-title.js'
import Block from './components/block.js'
import InformationBoard from './components/information-board'
import NavLink from '../header/nav-link'
import ArticleList from './article-list'

var ConvenienceLife = React.createClass({
  getInitialState() {
    return {
      newses: [],
      jobs: []
    };
  },

  componentDidMount() {
    $('.product-category').css('visibility', 'hidden');
  },

  render() {
    return (
      <div className='container'>
        <div className='left-part left-menu'>
          <a href='https://jiaofei.alipay.com/jiaofei.htm?_pdType=aecfbbfgeabbifdfdieh&_scType=bacfajegafddadijhagd' target='_blank'>
            <Block backgroundColor='#967bdc' width='185px' height='112px' blockIcon='/assets/images/energy.png'>
              <div className='title-cn'>购票缴费</div>
              <div className='title-en'>Water, electricity, gas payment</div>
            </Block>
          </a>
          <a href="http://bbs.cqkx.com/forum.php?mod=forumdisplay&fid=288" target='_blank'>
            <Block backgroundColor='#169fa5' width='185px' height='112px' blockIcon='/assets/images/beautiful.png'>
              <div className='title-cn'>健康服务</div>
              <div className='title-en'>heath service</div>
            </Block>
          </a>
          <a href="http://www.kzrc.gov.cn/" target='_blank'>
            <Block backgroundColor='#37bd9c' width='185px' height='112px' blockIcon='/assets/images/job-post.png'>
              <div className='title-cn'>就业服务</div>
              <div className='title-en'>Employment Information</div>
            </Block>
          </a>
          <a href="http://bbs.cqkx.com/forum-129-1.html" target='_blank'>
            <Block backgroundColor='#f6bb43' width='185px' height='112px' blockIcon='/assets/images/incubators.png'>
              <div className='title-cn'>餐饮娱乐</div>
              <div className='title-en'>Catering</div>
            </Block>
          </a>
          <a href="http://bbs.cqkx.com/forum-131-1.html" target='_blank'>
            <Block backgroundColor='#22b658' width='185px' height='112px' blockIcon='/assets/images/incubators.png'>
              <div className='title-cn'>房屋中介</div>
              <div className='title-en'>Agency</div>
            </Block>
          </a>
          <a href="http://job.cqkx.com/index.php?m=com&c=search&hy=&jobids=&cityid=&pr=&mun=&exp=&salary=&edu=&up" target='_blank'>
            <Block backgroundColor='#fb6e52' width='185px' height='112px' blockIcon='/assets/images/incubators.png'>
              <div className='title-cn'>家政服务</div>
              <div className='title-en'>Family service</div>
            </Block>
          </a>

        </div>
        {this.props.children}
      </div>

    );
  }
});

export default ConvenienceLife
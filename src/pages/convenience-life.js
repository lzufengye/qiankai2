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

  loadJobInfosFromServer: function () {
    $.ajax({
      url: 'http://localhost:3000/api/jobs?latest=true',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({jobs: data['jobs']});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error('localhost:3000/api/jobs', status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount() {
    this.loadJobInfosFromServer();
  },

  render() {
    var latestNewses = this.state.newses.map(function (news) {
      return <NavLink to="/page2">{news.title}</NavLink>
    });

    var latestJobs = this.state.jobs.map(function (job) {
      return <NavLink to="/page2">{job.title}</NavLink>
    });

    return (
      <div className='container'>
        <div className='left-part left-menu'>
          <NavLink to="/convenience-life/newses">
            <Block backgroundColor='#f6bb43' width='185px' height='112px' blockIcon='/assets/images/newspaper.png'>
              <div className='title-cn'>资讯中心</div>
              <div className='title-en'>information Centre</div>
            </Block>
          </NavLink>
          <NavLink to="/convenience-life/jobs">
            <Block backgroundColor='#37bd9c' width='185px' height='112px' blockIcon='/assets/images/job-post.png'>
              <div className='title-cn'>就业信息</div>
              <div className='title-en'>Employment Information</div>
            </Block>
          </NavLink>
          <Block backgroundColor='#ec87c1' width='185px' height='112px'>
            <a href='http://app.alipay.com/home/appGateway.htm?appId=1000000020' target='_blank'>手机充值
              <image className='link-image' src='/assets/images/cell-phone.png'/>
            </a>
            <a href='https://jiaofei.alipay.com/guhua.htm?_pdType=bbcjbfefaccjfbjdabhd' target='_blank'>固话宽带
              <image className='link-image' src='/assets/images/old-typical-phone.png'/>
            </a>
            <a href='https://jiaofei.alipay.com/fare/ebppChargeEntering.htm?chargeType=catv' target='_blank'>有线电视缴费
              <image className='link-image' src='/assets/images/tv-monitor.png'/>
            </a>
          </Block>
          <a href='https://jiaofei.alipay.com/jiaofei.htm?_pdType=aecfbbfgeabbifdfdieh&_scType=bacfajegafddadijhagd' target='_blank'>
            <Block backgroundColor='#967bdc' width='185px' height='112px' blockIcon='/assets/images/energy.png'>
              <div className='title-cn'>水电煤缴费</div>
              <div className='title-en'>Water, electricity, gas payment</div>
            </Block>
          </a>
          <Block backgroundColor='#8dc153' width='185px' height='112px'>
            <a href='https://ccrprod.alipay.com/credit.htm?_pdType=bbcebbcffijdjheiaigf' target='_blank'>信用卡还款
              <image className='link-image' src='/assets/images/credit-cards.png'/>
            </a>
            <a href='https://ebppprod.alipay.com/estate.htm?_pdType=accibafdfbdebceidcae' target='_blank'>物业缴费
              <image className='link-image' src='/assets/images/home.png'/>
            </a>
          </Block>
          <Block backgroundColor='#fb6e52' width='185px' height='112px'>
            <a href='https://ebppprod.alipay.com/traffic.htm?_pdType=bbcjbfefaciiiieiijgj' target='_blank'>交通违章
              <image className='link-image' src='/assets/images/car-icon.png'/>
            </a>
            <a href='http://app.alipay.com/appGateway.htm?appId=1000000113' target='_blank'>医院挂号
              <image className='link-image' src='/assets/images/hospital-building.png'/>
            </a>
          </Block>
          <Block backgroundColor='#22b658' width='185px' height='112px'>
            <a href='http://kx.cq.gov.cn/' target='_blank'>开县政府网
              <image className='link-image' src='/assets/images/embassy.png'/>
            </a>
            <a href='http://www.kxwsj.gov.cn/' target='_blank'>开县卫生局
              <image className='link-image' src='/assets/images/heart-insurance-symbol.png'/>
            </a>
          </Block>
          <a href='http://www.sxstg.cn/index.php?ctl=youhuis' target='_blank'>
            <Block backgroundColor='#169fa5' width='185px' height='112px' blockIcon='/assets/images/beautiful.png'>
              <div className='title-cn'>美丽开县</div>
              <div className='title-en'>Beautiful scenery</div>
            </Block>
          </a>
        </div>
        {this.props.children}
      </div>

    );
  }
});

export default ConvenienceLife
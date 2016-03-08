import React from 'react'
import ImageWithTitle from './components/image-with-title'
import CustomerSlider from './components/slider'
import SectionTitle from './components/section-title'
import Block from './components/block'
import InformationBoard from './components/information-board'
import NavLink from '../header/nav-link'
import ServerConfig from '../config/server-config'

var Home = React.createClass({
  getInitialState() {
    return {
      products: [],
      newses: [],
      jobs: [],
      articles: [],
      activities: []
    };
  },

  loadHotProductsFromServer: function () {
    $.ajax({
      url: ServerConfig['serverUrl'] + '/api/products?hot=true',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({products: data['products']});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(ServerConfig['serverUrl'] + '/api/products', status, err.toString());
      }.bind(this)
    });
  },

  loadHotNewsesFromServer: function () {
    $.ajax({
      url: ServerConfig['serverUrl'] + '/api/newses?latest=true',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({newses: data['newses']});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(ServerConfig['serverUrl'] + '/api/newses', status, err.toString());
      }.bind(this)
    });
  },

  loadJobInfosFromServer: function () {
    $.ajax({
      url: ServerConfig['serverUrl'] + '/api/jobs?latest=true',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({jobs: data['jobs']});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(ServerConfig['serverUrl'] + '/api/jobs', status, err.toString());
      }.bind(this)
    });
  },

  loadArticlesFromServer: function () {
    $.ajax({
      url: ServerConfig['serverUrl'] + '/api/articles?category=learning',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({articles: data['articles']});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(ServerConfig['serverUrl'] + '/api/articles', status, err.toString());
      }.bind(this)
    });
  },

  loadActivitiesFromServer: function () {
    $.ajax({
      url: ServerConfig['serverUrl'] + '/api/activities',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({activities: data['activities']});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(ServerConfig['serverUrl'] + '/api/activities', status, err.toString());
      }.bind(this)
    });
  },

  loadAdvertisementFromServer: function () {
    $.ajax({
      url: ServerConfig['serverUrl'] + '/api/advertisements',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({advertisements: [data['advertisement']]});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(ServerConfig['serverUrl'] + '/api/advertisements', status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount() {
    this.loadHotProductsFromServer();
    this.loadHotNewsesFromServer();
    this.loadJobInfosFromServer();
    this.loadArticlesFromServer();
    this.loadActivitiesFromServer();
    console.log('ENV', process.env.NODE_ENV)
  },

  render() {
    var hotProducts = this.state.products.map(function (product) {
      return <a href={product.link} target='_blank'>
        <ImageWithTitle title={product.name} src={product.image_url}/>
      </a>
    });

    var latestNewses = this.state.newses.map(function (news) {
      var link = "/article/newses/" + news.id
      return <NavLink to={link}>{news.title}</NavLink>
    });

    var latestJobs = this.state.jobs.map(function (job) {
      var link = "/article/jobs/" + job.id
      return <NavLink to={link}>{job.title}</NavLink>
    });

    var latestArticles = this.state.articles.map(function (article) {
      var link = "/article/articles/" + article.id
      return <NavLink to={link}>{article.title}</NavLink>
    });

    var latestActivities = this.state.activities.map(function (activity) {
      var link = "/article/activities/" + activity.id
      return <NavLink to={link}>{activity.title}</NavLink>
    });

    return (
      <div className='container'>
        <CustomerSlider>
          {hotProducts}
        </CustomerSlider>
        <SectionTitle href='http://www.sxstg.cn/' backgroundImage='/assets/images/online-shopping.jpg'
          sectionIcon='/assets/images/shopping-cart.png'
          sectionTitle='三峡生态购'
          shadowMarginLeft='50%'
        />
        <div>
          <a href='http://www.sxstg.cn/' target='_blank'>
            <Block backgroundColor='#8dc153'
              width='200px'
              blockIcon='/assets/images/t-shirt-on-a-hang.png'
            >
              <div className='title-cn'>热门商品</div>
              <div className='title-en'>Popular Products</div>
            </Block>
          </a>
          <a href='http://www.sxstg.cn/index.php?ctl=mall' target='_blank'>
            <Block backgroundColor='#37bd9c'
              width='200px'
              blockIcon='/assets/images/farm-products.png'
            >
              <div className='title-cn'>自有产品</div>
              <div className='title-en'>Own products</div>
            </Block>
          </a>
          <a href='http://www.sxstg.cn/index.php?ctl=stores' target='_blank'>
            <Block backgroundColor='#d870ad'
              width='300px'
              blockIcon='/assets/images/man-with-company.png'
            >
              <div className='title-cn'>入驻商家</div>
              <div className='title-en'>Companies</div>
            </Block>
          </a>
          <a href='http://www.sxstg.cn/index.php?ctl=group' target='_blank'>
            <Block backgroundColor='#0c92d1'
              width='150px'
              blockIcon='/assets/images/handshake.png'
            >
              <div className='title-cn'>合作商家</div>
              <div className='title-en'>cooperation</div>
            </Block>
          </a>
          <a href='http://www.sxstg.cn/index.php?ctl=youhuis' target='_blank'>
            <Block backgroundColor='#967bdc'
              width='150px'
              blockIcon='/assets/images/supermarket-promotions-percentages-label-tool.png'
            >
              <div className='title-cn'>促销活动</div>
              <div className='title-en'>Promotions</div>
            </Block>
          </a>

        </div>
        <div className='new-section'>
          <InformationBoard backgroundColor='#f6bb43' width='400px' title='资讯中心' link='/convenience-life/newses'>
          {latestNewses}
          </InformationBoard>
          <NavLink to='/convenience-life/newses'>
            <SectionTitle href='' backgroundImage='/assets/images/kaixian1.jpg'
              sectionIcon='/assets/images/service.png'
              sectionTitle='便民生活'
              shadowMarginLeft='0'
            />
          </NavLink>
          <div className='left-part'>
            <Block backgroundColor='#ec87c1' width='200px'>
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
              <Block backgroundColor='#967bdc' width='200px' blockIcon='/assets/images/energy.png'>
                <div className='title-cn'>水电煤缴费</div>
                <div className='title-en'>Water, electricity, gas payment</div>
              </Block>
            </a>
            <Block backgroundColor='#22b658' width='300px'>
              <a href='http://kx.cq.gov.cn/' target='_blank'>开县政府网
                <image className='link-image' src='/assets/images/embassy.png'/>
              </a>
              <a href='http://www.kxwsj.gov.cn/' target='_blank'>开县卫生局
                <image className='link-image' src='/assets/images/heart-insurance-symbol.png'/>
              </a>
            </Block>
            <Block backgroundColor='#8dc153' width='200px'>
              <a href='https://ccrprod.alipay.com/credit.htm?_pdType=bbcebbcffijdjheiaigf' target='_blank'>信用卡还款
                <image className='link-image' src='/assets/images/credit-cards.png'/>
              </a>
              <a href='https://ebppprod.alipay.com/estate.htm?_pdType=accibafdfbdebceidcae' target='_blank'>物业缴费
                <image className='link-image' src='/assets/images/home.png'/>
              </a>
            </Block>
            <Block backgroundColor='#fb6e52' width='200px'>
              <a href='https://ebppprod.alipay.com/traffic.htm?_pdType=bbcjbfefaciiiieiijgj' target='_blank'>交通违章
                <image className='link-image' src='/assets/images/car-icon.png'/>
              </a>
              <a href='http://app.alipay.com/appGateway.htm?appId=1000000113' target='_blank'>医院挂号
                <image className='link-image' src='/assets/images/hospital-building.png'/>
              </a>
            </Block>
            <NavLink to='/convenience-life/articles/kaixian'>
              <Block backgroundColor='#169fa5' width='300px' blockIcon='/assets/images/beautiful.png'>
                <div className='title-cn'>美丽开县</div>
                <div className='title-en'>Beautiful scenery</div>
              </Block>
            </NavLink>
          </div>
          <InformationBoard className='job-infos' backgroundColor='#f8f8f8' width='300px' color='#888' title='就业信息' link='/convenience-life/jobs'>
          {latestJobs}
          </InformationBoard>
        </div>
        <div className='new-section'>
          <InformationBoard backgroundColor='#0c92d1' width='400px' height='450px' title='学习中心' link='/education-service/articles/learning'>
          {latestArticles}
          </InformationBoard>
          <div className='right-part'>
            <NavLink to='/education-service/articles/learning'>
              <SectionTitle href='' backgroundImage='/assets/images/kaixian2.jpg'
                sectionIcon='/assets/images/education.png'
                sectionTitle='教育服务'
                shadowMarginLeft='50%'
              />
            </NavLink>
            <Block backgroundColor='#37bd9c' width='200px' blockIcon='/assets/images/school.png'>
              <div className='title-cn'>学校缴费</div>
              <div className='title-cn'>幼儿园缴费</div>
            </Block>
            <NavLink to='/education-service/articles/course'>
              <Block backgroundColor='#8dc153' width='200px' blockIcon='/assets/images/online-course.png'>
                <div className='title-cn'>课程介绍</div>
                <div className='title-en'>Course Introduction</div>
              </Block>
            </NavLink>
            <NavLink to='/education-service/articles/training'>
              <Block backgroundColor='#d870ad' width='200px' blockIcon='/assets/images/seo-training.png'>
                <div className='title-cn'>教育培训</div>
                <div className='title-en'>Education and Training</div>
              </Block>
            </NavLink>
          </div>
        </div>
        <div className='new-section'>
          <InformationBoard backgroundColor='#967bdc' width='400px' title='主题活动' link='/innovation-space/activities'>
          {latestActivities}
          </InformationBoard>
          <NavLink to='/innovation-space/activities'>
            <SectionTitle href='' backgroundImage='/assets/images/innovation.jpg'
              sectionIcon='/assets/images/innovation.png'
              sectionTitle='众创空间'
              shadowMarginLeft='0'
            />
          </NavLink>
          <Block backgroundImage='/assets/images/policy.jpg' width='200px'>
          </Block>
          <Block backgroundColor='#0c92d1' width='200px'>
            <NavLink to='/innovation-space/articles/innovation_space'>众创空间展示
              <image className='link-image' src='/assets/images/project.png'/>
            </NavLink>
            <NavLink to='/innovation-space/articles/service'>政策与服务
              <image className='link-image' src='/assets/images/services.png'/>
            </NavLink>
          </Block>
          <NavLink to='/innovation-space/articles/incubation'>
            <Block backgroundColor='#f6bb43' width='300px' blockIcon='/assets/images/incubators.png'>
              <div className='title-cn'>入驻与孵化</div>
              <div className='title-en'>Settle and incubation</div>
            </Block>
          </NavLink>
          <NavLink to='/innovation-space/articles/cooperation'>
            <Block backgroundColor='#d870ad' width='300px' blockIcon='/assets/images/support.png'>
              <div className='title-cn'>合作与配套</div>
              <div className='title-en'>Cooperation and support</div>
            </Block>
          </NavLink>
        </div>
        <div id="weather">
          <iframe width="200" scrolling="no" height="75" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&id=12&icon=1&num=5"></iframe>
        </div>
      </div>
    );
  }
});

export default Home
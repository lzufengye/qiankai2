import React from 'react'
import ImageWithTitle from './components/image-with-title.js'
import CustomerSlider from './components/slider.js'
import SectionTitle from './components/section-title.js'
import Block from './components/block.js'
import InformationBoard from './components/information-board'
import NavLink from '../header/nav-link'
import ArticleList from './article-list'

var InnovationSpace = React.createClass({
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
          <NavLink to="/innovation-space/activities">
            <Block backgroundColor='#ec87c1' width='185px' height='112px' blockIcon='/assets/images/activities.png'>
              <div className='title-cn'>主题活动</div>
              <div className='title-en'>Activites</div>
            </Block>
          </NavLink>
          <NavLink to="/innovation-space/activities">
            <Block backgroundColor='#967bdc' width='185px' height='112px' blockIcon='/assets/images/project.png'>
              <div className='title-cn'>众创空间展示</div>
              <div className='title-en'>Projects</div>
            </Block>
          </NavLink>
          <NavLink to="/innovation-space/activities">
            <Block backgroundColor='#22b658' width='185px' height='112px' blockIcon='/assets/images/services.png'>
              <div className='title-cn'>政策与服务</div>
              <div className='title-en'>Services</div>
            </Block>
          </NavLink>
          <Block backgroundColor='#fb6e52' width='185px' height='112px' blockIcon='/assets/images/incubators.png'>
            <div className='title-cn'>入驻与孵化</div>
            <div className='title-en'>Settle and incubation</div>
          </Block>
          <Block backgroundColor='#169fa5' width='185px' height='112px' blockIcon='/assets/images/support.png'>
            <div className='title-cn'>合作与配套</div>
            <div className='title-en'>Cooperation and support</div>
          </Block>
        </div>
        {this.props.children}
      </div>

    );
  }
});

export default InnovationSpace
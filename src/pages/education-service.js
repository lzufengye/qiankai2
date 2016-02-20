import React from 'react'
import ImageWithTitle from './components/image-with-title.js'
import CustomerSlider from './components/slider.js'
import SectionTitle from './components/section-title.js'
import Block from './components/block.js'
import InformationBoard from './components/information-board'
import NavLink from '../header/nav-link'
import ArticleList from './article-list'

var EducationService = React.createClass({
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
          <NavLink to="/education-service/articles">
            <Block backgroundColor='#f6bb43' width='185px' height='112px' blockIcon='/assets/images/study-center.png'>
              <div className='title-cn'>学习中心</div>
              <div className='title-en'>Study Centre</div>
            </Block>
          </NavLink>
          <Block backgroundColor='#37bd9c' width='185px' height='112px' blockIcon='/assets/images/school.png'>
            <div className='title-cn'>学校缴费</div>
            <div className='title-cn'>幼儿园缴费</div>
          </Block>
          <Block backgroundColor='#8dc153' width='185px' height='112px' blockIcon='/assets/images/online-course.png'>
            <div className='title-cn'>课程介绍</div>
            <div className='title-en'>Course Introduction</div>
          </Block>
          <Block backgroundColor='#d870ad' width='185px' height='112px' blockIcon='/assets/images/seo-training.png'>
            <div className='title-cn'>教育培训</div>
            <div className='title-en'>Education and Training</div>
          </Block>
        </div>
        {this.props.children}
      </div>

    );
  }
});

export default EducationService
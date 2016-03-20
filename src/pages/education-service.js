import React from 'react'
import ImageWithTitle from './components/image-with-title.js'
import CustomerSlider from './components/slider.js'
import SectionTitle from './components/section-title.js'
import Block from './components/block.js'
import InformationBoard from './components/information-board'
import NavLink from '../header/nav-link'
import ArticleList from './article-list'

var EducationService = React.createClass({

  componentDidMount() {
    $('.product-category').css('visibility', 'hidden');
  },

  render() {
    return (
      <div className='container'>
        <div className='left-part left-menu'>
          <NavLink to="/education-service/articles/learning">
            <Block backgroundColor='#f6bb43' width='185px' height='112px' blockIcon='/assets/images/study-center.png'>
              <div className='title-cn'>学习中心</div>
              <div className='title-en'>Study Centre</div>
            </Block>
          </NavLink>
          <Block backgroundColor='#37bd9c' width='185px' height='112px' blockIcon='/assets/images/school.png'>
            <div className='title-cn'>学校缴费</div>
            <div className='title-cn'>幼儿园缴费</div>
          </Block>
          <NavLink to="/education-service/articles/course">
            <Block backgroundColor='#8dc153' width='185px' height='112px' blockIcon='/assets/images/online-course.png'>
              <div className='title-cn'>课程介绍</div>
              <div className='title-en'>Course Introduction</div>
            </Block>
          </NavLink>
          <NavLink to="/education-service/articles/training">
            <Block backgroundColor='#d870ad' width='185px' height='112px' blockIcon='/assets/images/seo-training.png'>
              <div className='title-cn'>教育培训</div>
              <div className='title-en'>Education and Training</div>
            </Block>
          </NavLink>
        </div>
        {this.props.children}
      </div>

    );
  }
});

export default EducationService
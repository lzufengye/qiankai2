import React from 'react'
import ImageWithTitle from './components/image-with-title.js'
import CustomerSlider from './components/slider.js'
import SectionTitle from './components/section-title.js'

var Container = React.createClass({
  render: function() {
    return (
      <div className='container'>
        <CustomerSlider>
          <ImageWithTitle title='图片一' src=''/>
          <ImageWithTitle title='图片二' src=''/>
          <ImageWithTitle title='图片三' src=''/>
        </CustomerSlider>
        <SectionTitle backgroundImage='http://imgphoto.gmw.cn/attachement/jpg/site2/20110812/14feb5e05c0c0faed0694f.jpg'
          sectionIcon='/study/build/assets/images/home-button.png'
          sectionTitle='第一部分'
        />
      </div>
    );
  }
});

export default Container
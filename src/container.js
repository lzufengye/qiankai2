import React from 'react'
import ImageWithTitle from './components/image-with-title.js'
import CustomerSlider from './components/slider.js'
import SectionTitle from './components/section-title.js'
import Block from './components/block.js'

var Container = React.createClass({
  render: function() {
    return (
      <div className='container'>
        <CustomerSlider>
          <ImageWithTitle title='图片一' src=''/>
          <ImageWithTitle title='图片二' src=''/>
          <ImageWithTitle title='图片三' src=''/>
        </CustomerSlider>
        <SectionTitle backgroundImage='/study/build/assets/images/shopping-header.jpg'
          sectionIcon='/study/build/assets/images/shopping-cart.png'
          sectionTitle='三峡生态购'
          shadowMarginLeft='50%'
        />
        <div>
          <Block backgroundColor='#e9573e'
            width='200px'
            blockTitle='模块一'
            blockTitleEnglish='block first'
            blockIcon='/study/build/assets/images/briefcase-outline.png'
          />
          <Block backgroundColor='#f6bb43'
            width='200px'
            blockTitle='模块二'
            blockTitleEnglish='block first'
            blockIcon='/study/build/assets/images/briefcase-outline.png'
          />
          <Block backgroundColor='#8dc153'
            width='150px'
            blockTitle='模块三'
            blockTitleEnglish='block first'
            blockIcon='/study/build/assets/images/briefcase-outline.png'
          />
          <Block backgroundColor='#37bd9c'
            width='150px'
            blockTitle='模块四'
            blockTitleEnglish='block first'
            blockIcon='/study/build/assets/images/briefcase-outline.png'
          />
          <Block backgroundColor='#d870ad'
            width='150px'
            blockTitle='模块五'
            blockTitleEnglish='block first'
            blockIcon='/study/build/assets/images/briefcase-outline.png'
          />
          <Block backgroundColor='#0c92d1'
            width='150px'
            blockTitle='模块六'
            blockTitleEnglish='block first'
            blockIcon='/study/build/assets/images/briefcase-outline.png'
          />
        </div>
      </div>
    );
  }
});

export default Container
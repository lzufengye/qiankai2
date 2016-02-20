import React from 'react'
import ImageWithTitle from './components/image-with-title'
import CustomerSlider from './components/slider'
import SectionTitle from './components/section-title'
import Block from './components/block'
import Article from './article'

var About = React.createClass({
  render() {
    var params = {title: 'articles', id: 'about'}

    return (
      <div className='container'>
        <Article params={params}/>
      </div>
    );
  }
});

export default About
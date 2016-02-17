import React from 'react'

var ImageWithTitle = React.createClass({
  render: function () {
    return (
      <div className='slick-slide'>
        <image src={this.props.src}/>
        <div className='image-title'>{this.props.title}</div>
      </div>
    );
  }
});

export default ImageWithTitle
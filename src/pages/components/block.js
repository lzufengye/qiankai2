import React from 'react'

var Block = React.createClass({
  render() {
    var style = {
      width: this.props.width
    };

    var blockStyle = {
      backgroundColor: this.props.backgroundColor,
    }

    return (
      <div className='block-wrapper' style={style}>
        <div className='block' style={blockStyle}>
          <div className='title-cn'>{this.props.blockTitle}</div>
          <div className='title-en'>{this.props.blockTitleEnglish}</div>
          <image src={this.props.blockIcon}/>
        </div>
      </div>
    );
  }
});

export default Block
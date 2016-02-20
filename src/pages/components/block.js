import React from 'react'

var Block = React.createClass({
  render() {
    var style = {
      width: this.props.width,
      height: this.props.height
    };

    var blockStyle = {
      backgroundColor: this.props.backgroundColor,
      backgroundImage: 'url(' + this.props.backgroundImage + ')'
    }

    return (
      <div className='block-wrapper' style={style}>
        <div className='block' style={blockStyle}>
          {this.props.children}
          <image src={this.props.blockIcon}/>
        </div>
      </div>
    );
  }
});

export default Block
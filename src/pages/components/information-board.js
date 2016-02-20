import React from 'react'

var InformationBoard = React.createClass({
  render() {
    var wrapperStyle = {
      width: this.props.width,
      height: this.props.height || '300px',
      display: 'inline-block'
    };

    var boardStyle = {
      backgroundColor: this.props.backgroundColor,
      color: this.props.color
    }

    var information = this.props.children && this.props.children.length > 1 ? this.props.children.map(function (info) {
      return (
        <li>
          {info}
        </li>
      )
    }) : this.props.children;

    var className = 'information-board ' + this.props.className;

    return (
      <div className='wrapper' style={wrapperStyle}>
        <div className={className} style={boardStyle}>
        <div className='information-title'>{this.props.title}</div>
          <ul>{information}</ul>
        </div>
      </div>
    );
  }
});

export default InformationBoard
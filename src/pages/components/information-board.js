import React from 'react'
import NavLink from '../../header/nav-link'

var InformationBoard = React.createClass({
  render() {
    var wrapperStyle = {
      width: this.props.width,
      height: this.props.height || '300px',
      display: 'inline-block'
    };

    var boardStyle = {
      backgroundColor: this.props.backgroundColor,
      height: this.props.height == '450px' ? '444px' : '',
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
    var title = this.props.link ? (<NavLink to={this.props.link}>{this.props.title}</NavLink>) : (this.props.title);
    return (
      <div className='wrapper' style={wrapperStyle}>
        <div className={className} style={boardStyle}>
        <div className='information-title'>{title}</div>
          <ul>{information}</ul>
        </div>
      </div>
    );
  }
});

export default InformationBoard
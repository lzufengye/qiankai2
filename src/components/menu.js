import React from 'react'

var Menu = React.createClass({
  render: function () {
    return (
      <div className='menu'>
      {this.props.children}
      </div>
    );
  }
});

export default Menu
import React from 'react'

var MenuItem = React.createClass({
  render: function () {
    var items = this.props.subMenu.map(function (item) {
      return (
        <li>{item}</li>
      );
    });

    return (
      <ul className='menu-item'>
      {items}
      </ul>
    );
  }
});

export default MenuItem
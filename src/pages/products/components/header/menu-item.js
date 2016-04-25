import React from 'react'

var MenuItem = React.createClass({
  render() {
    var that = this;

    var items = this.props.subMenu.map(function (item) {
      return (
        <li key={item.name}>
          <a href={item.link}>{item.name}</a>
        </li>
      );
    });

    var hideSubMenu = () => {
      $('#menu-item' + that.props.menuIndex).hide();
    };

    var displaySubMenu = () => {
      $('#menu-item' + that.props.menuIndex).show();
    };

    return (
      <div className='menus'>
        <a href={this.props.link} onMouseOver={displaySubMenu} onMouseOut={hideSubMenu}>{this.props.name}</a>
        <ul className='menu-item' id={'menu-item' + this.props.menuIndex} onMouseOver={displaySubMenu} onMouseOut={hideSubMenu}>
          {items}
        </ul>
      </div>
    );
  }
});

export default MenuItem

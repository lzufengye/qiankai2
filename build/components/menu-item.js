'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = _react2.default.createClass({
  displayName: 'MenuItem',

  render: function render() {
    var items = this.props.subMenu.map(function (item) {
      return _react2.default.createElement(
        'li',
        null,
        item
      );
    });

    return _react2.default.createElement(
      'ul',
      { className: 'menu-item' },
      items
    );
  }
});

exports.default = MenuItem;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = _react2.default.createClass({
  displayName: 'Menu',

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'menu' },
      this.props.children
    );
  }
});

exports.default = Menu;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menu = require('./components/menu');

var _menu2 = _interopRequireDefault(_menu);

var _menuItem = require('./components/menu-item.js');

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _react2.default.createClass({
  displayName: 'Header',

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'header' },
      _react2.default.createElement('image', { className: 'header-image', src: '' }),
      _react2.default.createElement(
        _menu2.default,
        null,
        _react2.default.createElement(
          'a',
          { href: 'www.baidu.com', className: 'node focus' },
          '菜单一'
        ),
        _react2.default.createElement(
          'a',
          { href: 'www.baidu.com', className: 'node' },
          '菜单二'
        )
      )
    );
  }
});

exports.default = Header;
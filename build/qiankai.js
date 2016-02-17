'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = require('./header.js');

var _header2 = _interopRequireDefault(_header);

var _container = require('./container.js');

var _container2 = _interopRequireDefault(_container);

var _footer = require('./footer.js');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = _react2.default.createClass({
  displayName: 'App',

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'app' },
      _react2.default.createElement(_header2.default, null),
      _react2.default.createElement(_container2.default, null),
      _react2.default.createElement(_footer2.default, null)
    );
  }
});

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('content'));
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageWithTitle = _react2.default.createClass({
  displayName: 'ImageWithTitle',

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'slick-slide' },
      _react2.default.createElement('image', { src: this.props.src }),
      _react2.default.createElement(
        'div',
        { className: 'image-title' },
        this.props.title
      )
    );
  }
});

exports.default = ImageWithTitle;
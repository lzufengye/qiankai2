'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = _react2.default.createClass({
  displayName: 'Block',

  render: function render() {
    var style = {
      width: this.props.width
    };

    var blockStyle = {
      backgroundColor: this.props.backgroundColor
    };

    return _react2.default.createElement(
      'div',
      { className: 'block-wrapper', style: style },
      _react2.default.createElement(
        'div',
        { className: 'block', style: blockStyle },
        _react2.default.createElement(
          'div',
          { className: 'title-cn' },
          this.props.blockTitle
        ),
        _react2.default.createElement(
          'div',
          { className: 'title-en' },
          this.props.blockTitleEnglish
        ),
        _react2.default.createElement('image', { src: this.props.blockIcon })
      )
    );
  }
});

exports.default = Block;
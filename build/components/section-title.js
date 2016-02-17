'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SectionTitle = _react2.default.createClass({
  displayName: 'SectionTitle',

  render: function render() {
    var style = {
      backgroundImage: 'url(' + this.props.backgroundImage + ')'
    };

    return _react2.default.createElement(
      'div',
      { className: 'section-title', style: style },
      _react2.default.createElement(
        'div',
        { className: 'section-shadow' },
        _react2.default.createElement('image', { src: this.props.sectionIcon }),
        _react2.default.createElement('br', null),
        this.props.sectionTitle
      )
    );
  }
});

exports.default = SectionTitle;
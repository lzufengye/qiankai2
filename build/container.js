'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _imageWithTitle = require('./components/image-with-title.js');

var _imageWithTitle2 = _interopRequireDefault(_imageWithTitle);

var _slider = require('./components/slider.js');

var _slider2 = _interopRequireDefault(_slider);

var _sectionTitle = require('./components/section-title.js');

var _sectionTitle2 = _interopRequireDefault(_sectionTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _react2.default.createClass({
  displayName: 'Container',

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        _slider2.default,
        null,
        _react2.default.createElement(_imageWithTitle2.default, { title: '图片一', src: '' }),
        _react2.default.createElement(_imageWithTitle2.default, { title: '图片二', src: '' }),
        _react2.default.createElement(_imageWithTitle2.default, { title: '图片三', src: '' })
      ),
      _react2.default.createElement(_sectionTitle2.default, { backgroundImage: 'http://imgphoto.gmw.cn/attachement/jpg/site2/20110812/14feb5e05c0c0faed0694f.jpg',
        sectionIcon: '/study/build/assets/images/home-button.png',
        sectionTitle: '第一部分'
      })
    );
  }
});

exports.default = Container;
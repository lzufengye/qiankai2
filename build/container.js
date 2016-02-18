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

var _block = require('./components/block.js');

var _block2 = _interopRequireDefault(_block);

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
      _react2.default.createElement(_sectionTitle2.default, { backgroundImage: '/study/build/assets/images/shopping-header.jpg',
        sectionIcon: '/study/build/assets/images/shopping-cart.png',
        sectionTitle: '三峡生态购',
        shadowMarginLeft: '50%'
      }),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_block2.default, { backgroundColor: '#e9573e',
          width: '200px',
          blockTitle: '模块一',
          blockTitleEnglish: 'block first',
          blockIcon: '/study/build/assets/images/briefcase-outline.png'
        }),
        _react2.default.createElement(_block2.default, { backgroundColor: '#f6bb43',
          width: '200px',
          blockTitle: '模块二',
          blockTitleEnglish: 'block first',
          blockIcon: '/study/build/assets/images/briefcase-outline.png'
        }),
        _react2.default.createElement(_block2.default, { backgroundColor: '#8dc153',
          width: '150px',
          blockTitle: '模块三',
          blockTitleEnglish: 'block first',
          blockIcon: '/study/build/assets/images/briefcase-outline.png'
        }),
        _react2.default.createElement(_block2.default, { backgroundColor: '#37bd9c',
          width: '150px',
          blockTitle: '模块四',
          blockTitleEnglish: 'block first',
          blockIcon: '/study/build/assets/images/briefcase-outline.png'
        }),
        _react2.default.createElement(_block2.default, { backgroundColor: '#d870ad',
          width: '150px',
          blockTitle: '模块五',
          blockTitleEnglish: 'block first',
          blockIcon: '/study/build/assets/images/briefcase-outline.png'
        }),
        _react2.default.createElement(_block2.default, { backgroundColor: '#0c92d1',
          width: '150px',
          blockTitle: '模块六',
          blockTitleEnglish: 'block first',
          blockIcon: '/study/build/assets/images/briefcase-outline.png'
        })
      )
    );
  }
});

exports.default = Container;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = require('react');
var Slider = require('react-slick');

var CustomerSlider = React.createClass({
  displayName: 'CustomerSlider',

  render: function render() {
    var settings = {
      //dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      slidesToScroll: 1
    };
    return React.createElement(
      Slider,
      settings,
      this.props.children
    );
  }
});

exports.default = CustomerSlider;
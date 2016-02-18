var React = require('react');
var Slider = require('react-slick');

var CustomerSlider = React.createClass({
  render () {
    var settings = {
      //dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
      {this.props.children}
      </Slider>
    );
  }
});

export default CustomerSlider
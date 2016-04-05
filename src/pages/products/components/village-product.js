import React from 'react'

import Item from './products/item'

var VillageProduct = React.createClass({

  showProduct() {
    $('#product_' + this.props.villageName).show();
  },

  hideProduct() {
    $('.sample-product').hide();
  },

  render: function() {
    var itemStyle = {
      transitionDelay: '0.2s'
    };
    var that = this;

    return (
      <g id={this.props.villageName} onMouseEnter={that.showProduct} onMouseOut={that.hideProduct}>
        <polyline id={'path_' + this.props.villageName} fill="none" stroke="#3AA73A" stroke-miterlimit="10" points={this.props.pathPoints}/>
        <polyline id={'fill_' + this.props.villageName} opacity="0" stroke="#3AA73A" stroke-miterlimit="10" points={this.props.fillPoints}/>
        <text onMouseEnter={that.showProduct} onMouseOut={that.hideProduct} id={'text_' + this.props.villageName} transform={this.props.transform} font-family="'SimHei'" font-size="12">{this.props.chineseName}</text>
      </g>
    );
  }
});

export default VillageProduct
import React from 'react'
import Item from './components/products/item'

var TreasureHunt = React.createClass({

  componentDidMount() {
    $('.product-category').css('visibility', 'hidden');
    $('.footer').css('margin-top', '0');
  },

  showProduct() {
    $('.sample-product').show();
  },

  hideProduct() {
    $('.sample-product').hide();
  },

  render: function () {
    var item = {
      id: 6,
      name: "腊肉",
      image: "http://7xjdwj.com1.z0.glb.clouddn.com/35.jpg",
      description: "农户手工熏制，天然无添加剂",
      price: "39"
    };
    var that = this;

    return (
      <div className='treasure-hunt-container'>
        <svg>
          <circle cx='51%' cy='12%' r='20' fillOpacity="0" onMouseEnter={that.showProduct} onMouseOut={that.hideProduct}></circle>
          <circle cx='53%' cy='10%' r='30' fillOpacity="0" onMouseEnter={that.showProduct} onMouseOut={that.hideProduct}></circle>
          <circle cx='56%' cy='12%' r='40' fillOpacity="0" onMouseEnter={that.showProduct} onMouseOut={that.hideProduct}></circle>
          <circle cx='55.5%' cy='18%' r='10' fillOpacity="0" onMouseEnter={that.showProduct} onMouseOut={that.hideProduct}></circle>
        </svg>
        <ul className='sample-product' onMouseEnter={that.showProduct} onMouseOut={that.hideProduct}>
          <Item key={item.id} item={item} id={item.id} />
        </ul>
      </div>
    );
  }
});

export default TreasureHunt;

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
      name: "南瓜子",
      image: "http://7xjdwj.com1.z0.glb.clouddn.com/images/000/000/012/original/0.jpg",
      description: "开县南瓜子",
      price: "27"
    };
    var that = this;

    return (
      <div className='treasure-hunt-container'>
        <svg>
          <circle cx='68%' cy='11%' r='30' fillOpacity="0" onMouseEnter={that.showProduct} onMouseOut={that.hideProduct}></circle>
          <circle cx='70%' cy='10%' r='50' fillOpacity="0" onMouseEnter={that.showProduct} onMouseOut={that.hideProduct}></circle>
          <circle cx='73%' cy='10%' r='60' fillOpacity="0" onMouseEnter={that.showProduct} onMouseOut={that.hideProduct}></circle>
        </svg>
        <ul className='sample-product' onMouseEnter={that.showProduct} onMouseOut={that.hideProduct}>
          <Item key={item.id} item={item} id={item.id} />
        </ul>
      </div>
    );
  }
});

export default TreasureHunt;

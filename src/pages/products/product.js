import React from 'react'
import Reflux from 'reflux'

import Header from './components/header/header'
import AddToBasket from './components/basket/add-to-basket'
import RemoveFromBasket from './components/basket/remove-from-basket'
import Basket from './components/basket/basket'
import ProductMoreInfo from './components/products/product-more-info'

import actions from './actions/product-actions'
import store from './stores/product-store'
import basketStore from './stores/basket-store'

import { Link } from 'react-router'

var Product = React.createClass({
  mixins: [Reflux.connect(store), Reflux.ListenerMixin],

  componentDidMount() {
    actions.loadProduct(this.props.params.id);
    this.setState({inBasketQty: this.getBasketQty()});
    this.listenTo(actions.addItem, this.onStatusChange);
    this.listenTo(actions.removeItem, this.onStatusChange);
  },

  onStatusChange() {
    this.setState({inBasketQty: this.getBasketQty()});
  },

  clickHandler(index) {
    $('.image-zoom-main').trigger('zoom.destroy');
    actions.changeDisplayImage(index);
  },

  startZoom() {
    $('.image-zoom-main').zoom();
  },

  destroyZoom() {
    $('.image-zoom-main').trigger('zoom.destroy');
  },

  getBasketQty() {
    return basketStore.getBasketQty(this.state.product);
  },

  render() {
    var that = this;
    let imgZoomThumb = this.state.product.images.map(function (image, index) {
      return <li className='imgzoom-thumb'  onClick={that.clickHandler.bind(this, index)} key={index}>
        <image src={image} data-src={image}/>
      </li>
    });

    console.log(this.state.product);

    return (
      <div className='products-container'>
        <Header>
        </Header>
        <div className='product-detail'>
          <div className='image-zoom'>
            <div className='image-zoom-main-container' onMouseEnter={that.startZoom}>
              <div className='image-zoom-main' onMouseOut={that.destroyZoom}>
                <image src={this.state.displayImage}/>
              </div>
            </div>
            <div className='imgzoom-thumb-main'>
              <ul>
                {imgZoomThumb}
              </ul>
            </div>
          </div>
          <div className='product-info'>
            <h1 className='product-name'>
            {this.state.product.name}
            </h1>
            <h2 className='product-description'>
            {this.state.product.description}
            </h2>
            <div className='exist-price'>
              开街特价
              <span className='mainprice'>¥ {this.state.product.price}.00</span>
              <br/>
              <div className='star'>
                <em style={{width: '92%'}}></em>
              </div>
              <span className='score'>4.5分</span>
            </div>
            <div className='proinfo-promo'>
              近期销量
              <span className='value'>{this.state.product.soldAmount}</span>
              件
              <span className='blank'></span>
              共有
              <span className='value'>{this.state.product.comments.length}</span>
              评价
            </div>
            <div className='buy-service'>
              <span className='small-lable'>{'服'}<div className='lable-spaces'> </div>{'务'}</span>
              <div className='buy-service-content'>
                {this.state.product.service}
              </div>
            </div>
            <div className='buy-count'>
              <span className='small-lable'>购买数量</span>
              <div className='change-quantity'>
                <RemoveFromBasket item={this.state.product} />
                <span className='quantity'>{this.state.inBasketQty}</span>
                <AddToBasket text="+" item={this.state.product} />
              </div>
            </div>
            <div className='proinfo-line'></div>
            <div className='shop-actions'>
              <div className='buy-action buy-now'></div>
              <AddToBasket className='buy-action add-to-cart' item={this.state.product}/>
            </div>
          </div>
        </div>
        <div className='more-info'>
          <div className='left-column'>
            <div className='title'>{'商家:' + this.state.product.customer.name}</div>
            <ul className='satisfactions'>
              <li>商家满意度</li>
              <li>商品评分: <span className='value'>{this.state.product.score}</span> 分</li>
              <li>服务态度: <span className='value'>{this.state.product.attitude}</span> 分</li>
              <li>物流态度: <span className='value'>{this.state.product.logistics}</span> 分</li>
            </ul>
            <div className='customer-info'>
              <table>
                <tr>
                  <td>公司: </td><td>{this.state.product.customer.name}</td>
                </tr>
                <tr>
                  <td>电话: </td><td>{this.state.product.customer.telephone}</td>
                </tr>
              </table>
            </div>
            <div className='bottom-part'>
              <button>进入店铺</button>
            </div>
          </div>
          <div className='right-column'>
            <ProductMoreInfo />
          </div>
        </div>
      </div>
    );
  }
});

export default Product;

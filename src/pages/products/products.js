import React from 'react'
import Reflux from 'reflux'
import Header from './components/header/header'
import Footer from '../../footer'
import CustomerSlider from '../components/slider'
import advertisementStore from './stores/advertisement-store'
import actions from './actions/product-actions'
import ProductSection from './components/products/products-section'
import ServiceBar from './components/service-bar'
import { Link } from 'react-router'

// page data
let pages = {
  pagefood: {
    pageClasses: 'page page--food',
    heading: 'Food'
  },
  pagefashion: {
    pageClasses: 'page page--fashion',
    heading: 'Fashion'
  }
};

var Products = React.createClass({
  mixins: [Reflux.connect(advertisementStore), Reflux.ListenerMixin],

  componentDidMount () {
    actions.loadAdvertisement(false);
    $('.product-category').css('visibility', 'visible');
  },

  render: function () {
    let pageName = 'food';

    var advertisements = this.state.advertisements.map(function (advertisement, index) {
      return <a href={advertisement.link} target='_blank' key={index}>
        <image src={advertisement.imageUrl}/>
      </a>
    });

    return (
      <div className='products-container'>
        <div className='slider-server-container'>
          <ServiceBar />
          <CustomerSlider>
          {advertisements}
          </CustomerSlider>
        </div>
        <ProductSection backgroundImage='http://7xjdwj.com1.z0.glb.clouddn.com/ziying.jpg' width='190px' height='500px' title='' link='/products-by-category/self_sale' type='self_sale'>
          <ul className='section-menu'>
            <li><a href='/treasure-hunt'>开县寻宝</a></li>
            <li><a href='/treasure-hunt'>满月镇</a></li>
            <li><a href='/treasure-hunt'>紫水镇</a></li>
            <li><a href='/treasure-hunt'>大德镇</a></li>
            <li><a href='/treasure-hunt'>麻柳镇</a></li>
            <li><a href='/treasure-hunt'>五通镇</a></li>
            <li><a href='/treasure-hunt'>南雅镇</a></li>
          </ul>
        </ProductSection>
        <ProductSection backgroundImage='http://7xjdwj.com1.z0.glb.clouddn.com/mingte.jpg' width='190px' height='420px' title='' link='/products-by-category/kaixian_special' type='kaixian_special'/>
        <ProductSection backgroundImage='http://7xjdwj.com1.z0.glb.clouddn.com/tuhuo.jpg' width='190px' height='420px' title='' link='/products-by-category/xiangcuntuhuo' type='xiangcuntuhuo'/>
        <ProductSection backgroundImage='http://7xjdwj.com1.z0.glb.clouddn.com/gongyechanpin.jpg' width='190px' height='420px' title='' link='/products-by-category/gongyechanping' type='gongyechanping'/>
        <ProductSection backgroundImage='http://7xjdwj.com1.z0.glb.clouddn.com/xianwai.jpg' width='190px' height='420px' title='' link='/products-by-category/xianwaichanping' type='xianwaichanping'/>
        <ProductSection backgroundImage='http://7xjdwj.com1.z0.glb.clouddn.com/jinkou.jpg' width='190px' height='420px' title='' link='/products-by-category/imported' type='imported'/>
      </div>
    );
  }
});

export default Products;

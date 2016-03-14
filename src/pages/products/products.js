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
        <Header>
        </Header>
        <div className='slider-server-container'>
          <ServiceBar />
          <CustomerSlider>
          {advertisements}
          </CustomerSlider>
        </div>
        <ProductSection backgroundImage='http://7xjdwj.com1.z0.glb.clouddn.com/section-title.jpg' width='190px' height='500px' title='开县自营' link='#' type='self_sale'>
          <ul className='section-menu'>
            <li>开县县馆</li>
            <li>满月镇</li>
            <li>紫水镇</li>
            <li>大德镇</li>
            <li>麻柳镇</li>
            <li>五通镇</li>
            <li>南雅镇</li>
          </ul>
        </ProductSection>
        <ProductSection backgroundImage='/assets/images/products/ziying.png' width='190px' height='210px' title='开县特产' link='#' type='kaixian_special'/>
        <ProductSection backgroundImage='/assets/images/products/imported.png' width='190px' height='420px' title='进口商品' link='#' type='imported'/>
        <ProductSection backgroundImage='/assets/images/products/riyong.png' width='190px' height='210px' title='生活日用' link='#' type='daily_usage'/>
        <ProductSection backgroundImage='/assets/images/products/jiushui.png' width='190px' height='210px' title='食品酒水' link='#' type='wine_drink'/>
        <ProductSection backgroundImage='/assets/images/products/hufu.png' width='190px' height='210px' title='美妆护肤' link='#' type='beautify'/>
        <ProductSection backgroundImage='/assets/images/products/xiangji.png' width='190px' height='210px' title='数码相机' link='#' type='camera'/>
        <ProductSection backgroundImage='/assets/images/products/jiadian.png' width='190px' height='420px' title='家用电器' link='#' type='home_machine'/>
        <Footer />
      </div>
    );
  }
});

export default Products;

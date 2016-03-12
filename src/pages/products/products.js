import React from 'react'
import Reflux from 'reflux'
import Items from './components/products/items'
import Basket from './components/basket/basket'
import Header from './components/header/header'
import CustomerSlider from '../components/slider'
import advertisementStore from './stores/advertisement-store'
import actions from './actions/app-actions'
import ProductSection from './components/products/products-section'
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
        <CustomerSlider>
          {advertisements}
        </CustomerSlider>
        <ProductSection backgroundImage='http://7xjdwj.com1.z0.glb.clouddn.com/section-title.jpg' width='190px' height='420px' title='开县自营' link='#' type='food'/>
        <ProductSection backgroundImage='http://7xjdwj.com1.z0.glb.clouddn.com/section-title.jpg' width='190px' height='420px' title='开县自营' link='#' type='fashion'/>
      </div>
    );
  }
});

export default Products;

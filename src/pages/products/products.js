import React from 'react'
import Reflux from 'reflux'
import Items from './components/products/items'
import Basket from './components/basket/basket'
import Header from './components/header/header'
import CustomerSlider from '../components/slider'
import advertisementStore from './stores/advertisement-store'
import actions from './actions/app-actions'
import ImageWithTitle from '../components/image-with-title'
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

    console.log('d', this.state.advertisements);

    var advertisements = this.state.advertisements.map(function (advertisement) {
      return <a href={advertisement.link} target='_blank'>
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
        <div className={pages['page' + pageName].pageClasses}>
          <h1>{pages['page' + pageName].heading}</h1>
          <Items type={pageName} />
        </div>
      </div>
    );
  }
});

export default Products;

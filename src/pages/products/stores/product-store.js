import Reflux from 'reflux'
import request from 'superagent'
import actions from '../actions/app-actions'

var ProductStore = Reflux.createStore({

  init() {
    this.data = {
      products: {
        food: [],
        fashion: []
      }
    };

    this.listenTo(actions.loadPage, this.loadPage);
  },

  loadPage(productType,cached) {
    console.log('product-store-load-page');
    if(cached !== true || this.data.products[productType].length === 0) {
      request.get('/data/' + productType +'.json')
        .end((err, res) => {
          this.data.products[productType] = JSON.parse(res.text)[0].products;
          this.trigger(this.data);
        });
    } else {
      this.trigger(this.data);
    }
  },

  getInitialState() {
    console.log('product-store');
    return this.data;
  }
});

export default ProductStore

import Reflux from 'reflux'
import request from 'superagent'
import actions from '../actions/product-actions'
import productActions from '../actions/product-actions'

var ProductsStore = Reflux.createStore({

  init() {
    this.data = {
      products: {food: [], fashion: []}
    };

    this.listenTo(productActions.loadProducts, this.loadProducts);
  },

  loadProducts(productType) {
    console.log('type', productType);
    if(this.data.products[productType].length === 0) {
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

export default ProductsStore

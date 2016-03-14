import Reflux from 'reflux'
import request from 'superagent'
import actions from '../actions/product-actions'
import productActions from '../actions/product-actions'
import ServerConfig from '../../../config/server-config'

var CategoryProductsStore = Reflux.createStore({

  init() {
    this.data = {
      products: []
    };

    this.listenTo(productActions.loadProductsByCategory, this.loadProductsByCategory);
  },

  loadProductsByCategory(category) {
    if(this.data.products.length === 0) {
      request.get(ServerConfig['serverUrl'] + '/api/products?tag=' + category)
        .end((err, res) => {
          this.data.products = JSON.parse(res.text).products;
          this.trigger(this.data);
        });
    } else {
      this.trigger(this.data);
    }
  },

  getInitialState() {
    return this.data;
  }
});

export default CategoryProductsStore

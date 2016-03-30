import Reflux from 'reflux'
import request from 'superagent'
import actions from '../actions/product-actions'
import productActions from '../actions/product-actions'
import ServerConfig from '../../../config/server-config'

var ProductsStore = Reflux.createStore({

  init() {
    this.data = {
      products: {self_sale: [], kaixian_special: [], imported: [], daily_usage: [], wine_drink: [], beautify: [], camera: [], home_machine: [], xiangcuntuhuo: [], gongyichanping: [], xianwaichanping: [], zhihuilvyou: [], search_result: []}
    };

    this.listenTo(productActions.loadProducts, this.loadProducts);
    this.listenTo(productActions.searchProducts, this.searchProducts);
  },

  loadProducts(productType) {
    if(this.data.products[productType].length === 0) {
      request.get(ServerConfig['serverUrl'] + '/api/products?tag=' + productType)
        .end((err, res) => {
          this.data.products[productType] = JSON.parse(res.text).products;
          this.trigger(this.data);
        });
    } else {
      this.trigger(this.data);
    }
  },

  searchProducts(searchValue) {
    if (searchValue != null) {
      request.get(ServerConfig['serverUrl'] + '/api/search/' + searchValue)
        .end((err, res) => {
          console.log(JSON.parse(res.text).products);
          this.data.products['search_result'] = JSON.parse(res.text).products;
          this.trigger(this.data);
        });
    }
  },

  getInitialState() {
    return this.data;
  }
});

export default ProductsStore

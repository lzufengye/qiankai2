import Reflux from 'reflux'
import request from 'superagent'
import productActions from '../actions/product-actions'
import ServerConfig from '../../../config/server-config'
import mobileUtils from '../../../utils/mobile-utils'

var ProductStore = Reflux.createStore({

  init() {
    this.data = {
      product: {id: '', images: [], comments: [], customer: {}, product_details: [], services: []},
      displayImage: ''
    };

    this.listenTo(productActions.loadProduct, this.loadProduct);
    this.listenTo(productActions.changeDisplayImage, this.changeDisplayImage);
  },

  loadProduct(id) {
    request.get(ServerConfig['serverUrl'] + '/api/products/' + id)
      .end((err, res) => {
        this.data.product = JSON.parse(res.text).product;
        if (this.data.product.images.length > 0) {
          this.data.displayImage = this.data.product.images[0];
        }
        this.trigger(this.data);
      });
    if(!mobileUtils.mobileCheck()) {
      $('.image-zoom-main').zoom();
    }
  },

  changeDisplayImage(index) {
    this.data.displayImage = this.data.product.images[index];
    this.trigger(this.data);
  },

  getInitialState() {
    return this.data;
  }
});

export default ProductStore

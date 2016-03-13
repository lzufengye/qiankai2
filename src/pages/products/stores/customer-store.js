import Reflux from 'reflux'
import request from 'superagent'
import actions from '../actions/customer-actions'

var CustomerStore = Reflux.createStore({

  init() {
    this.data = {
      customers: [],
      selected: 0,
      products: []
    };

    this.listenTo(actions.loadCustomers, this.loadCustomers);
    this.listenTo(actions.loadProducts, this.loadProducts);
  },

  loadCustomers(cached) {
    if (cached !== true || this.data.customers.length === 0) {
      request.get('/data/customers.json')
        .end((err, res) => {
          this.data.categories = JSON.parse(res.text)[0].categories;
          this.trigger(this.data);
        });
    } else {
      this.trigger(this.data);
    }
  },

  displayCategory() {
    this.data.display = 'block';
    this.trigger(this.data);
  },

  hideCategory() {
    //this.data.display = 'none';
    this.trigger(this.data);
  },

  getInitialState() {
    return this.data;
  }
});

export default CustomerStore

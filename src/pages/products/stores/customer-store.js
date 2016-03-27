import Reflux from 'reflux'
import request from 'superagent'
import actions from '../actions/customer-actions'
import ServerConfig from '../../../config/server-config'

var CustomerStore = Reflux.createStore({

  init() {
    this.data = {
      customers: [],
      products: [],
      currentCustomer: ''
    };

    this.listenTo(actions.loadCustomers, this.loadCustomers);
    this.listenTo(actions.loadCustomerProducts, this.loadCustomerProducts);
  },

  loadCustomers(cached) {
    if (cached !== true || this.data.customers.length === 0) {
      request.get(ServerConfig['serverUrl'] + '/api/customers')
        .end((err, res) => {
          this.data.customers = JSON.parse(res.text).customers;
          this.trigger(this.data);
        })
    } else {
      this.trigger(this.data);
    }
  },

  loadCustomerProducts(customer_id) {
    request.get(ServerConfig['serverUrl'] + '/api/customers/' + customer_id)
      .end((err, res) => {
        this.data.products = JSON.parse(res.text).products;
        this.data.currentCustomer = JSON.parse(res.text).customer;
          this.trigger(this.data);
      })
  },

  getInitialState() {
    return this.data;
  }
});

export default CustomerStore

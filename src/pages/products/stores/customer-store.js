import Reflux from 'reflux'
import request from 'superagent'
import actions from '../actions/customer-actions'
import ServerConfig from '../../../config/server-config'

var CustomerStore = Reflux.createStore({

  init() {
    this.data = {
      customers: []
    };

    this.listenTo(actions.loadCustomers, this.loadCustomers);
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

  getInitialState() {
    return this.data;
  }
});

export default CustomerStore

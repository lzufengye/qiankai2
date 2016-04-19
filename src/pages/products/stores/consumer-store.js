import Reflux from 'reflux'
import request from 'superagent'
import actions from '../actions/consumer-actions'
import ServerConfig from '../../../config/server-config'

var ConsumerStore = Reflux.createStore({

  init() {
    this.data = {
      orders: []
    };

    this.listenTo(actions.loadConsumerOrders, this.loadConsumerOrders);
  },

  loadConsumerOrders() {
    request.get(ServerConfig['serverUrl'] + '/api/orders?token=' + localStorage.token)
      .end((err, res) => {
        this.data.orders = JSON.parse(res.text).orders;
        this.trigger(this.data);
      })
  },

  getInitialState() {
    return this.data;
  }
});

export default ConsumerStore

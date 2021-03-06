import Reflux from 'reflux'
import request from 'superagent'
import actions from '../actions/product-actions'
import ServerConfig from '../../../config/server-config'

var AdvertisementStore = Reflux.createStore({

  init() {
    this.data = {
      advertisements: []
    };

    this.listenTo(actions.loadAdvertisement, this.loadAdvertisement);
  },

  loadAdvertisement(cached) {
    if(cached !== true) {
      request.get(ServerConfig['serverUrl'] + '/api/advertisements')
        .end((err, res) => {
          this.data.advertisements = JSON.parse(res.text).advertisements;
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

export default AdvertisementStore

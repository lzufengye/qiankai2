import Reflux from 'reflux'
import request from 'superagent'
import actions from '../actions/product-actions'

var CategoryStore = Reflux.createStore({

  init() {
    this.data = {
      categories: [],
      display: 'none'
    };

    this.listenTo(actions.loadCategory, this.loadCategory);
    this.listenTo(actions.displayCategory, this.displayCategory);
    this.listenTo(actions.hideCategory, this.hideCategory);
  },

  loadCategory(cached) {
    if (cached !== true || this.data.categories.length === 0) {
      request.get('/data/categories.json')
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
    this.data.display = 'none';
    this.trigger(this.data);
  },

  getInitialState() {
    return this.data;
  }
});

export default CategoryStore

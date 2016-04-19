import Reflux from 'reflux'
import actions from '../actions/product-actions'
import _ from 'lodash'

var BasketStore = Reflux.createStore({

  init() {
      this.data = {
        basketItems: []
      };

      if(localStorage.basket) {
        this.data = JSON.parse(localStorage.basket)
      }

      //this.listenToMany(actions);
      this.listenTo(actions.addItem, this.onAddItem);
      this.listenTo(actions.removeItem, this.onRemoveItem);
    },

    onAddItem(item) {
      if (!this.isInBasket(item)) {
        item.qty = 1;
        item.inBasket = true;
        this.data.basketItems.push(item);
      } else {
        let itemToIncrease = _.find(this.data.basketItems, { 'id': item.id });
        let itemIndex = this.data.basketItems.indexOf(itemToIncrease);
        this.data.basketItems[itemIndex].qty++;
      }

      localStorage.basket = JSON.stringify(this.data)
    },

    onRemoveItem(item){
      let itemToRemove = _.find(this.data.basketItems, { 'id': item.id });
      let itemIndex = this.data.basketItems.indexOf(itemToRemove);

      if(this.isInBasket(item) && this.data.basketItems[itemIndex].qty>1) {
        this.data.basketItems[itemIndex].qty--;
      } else {
        if (typeof itemToRemove === 'object') {
          itemToRemove.inBasket = false;
          this.data.basketItems.splice(itemIndex, 1);
        }
      }

      localStorage.basket = JSON.stringify(this.data)
    },

    getBasketTotals() {
      var qty = 0,
        total = 0;
      if(this.data.basketItems != undefined) {
        this.data.basketItems.forEach(function(basketItem) {
          qty += basketItem.qty;
          total += basketItem.qty * basketItem.price;
        });
      }
      return {
        'qty': qty,
        'total': total
      };
    },

    getBasketData() {
      return this.data.basketItems;
    },

    getBasketQty(item) {
      var basketItem = _.find(this.data.basketItems, { 'id': item.id });
      if (typeof basketItem === 'object') {
        return basketItem.qty;
      } else {
        return 0;
      }
    },

    isInBasket(item) {
      var basketItem = _.find(this.data.basketItems, { 'id': item.id });
      if (typeof basketItem === 'object') {
        return true;
      } else {
        return false;
      }
    },

    getInitialState() {
      return this.data;
    }
});

export default BasketStore

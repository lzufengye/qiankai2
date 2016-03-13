import React from 'react'
import Reflux from 'reflux'

import basketStore from '../../stores/basket-store'
import actions from '../../actions/product-actions'

var AddToBasket = React.createClass({

  mixins: [Reflux.connect(basketStore), Reflux.ListenerMixin],

  hideBasket() {
    $('.appBasket').css({visibility: 'hidden'});
  },

  render: function() {
    var that = this;

    let clickHandler = () => {
      actions.addItem(this.props.item);
      $('.appBasket').css({visibility: 'visible'});
      setTimeout(that.hideBasket, 5000);
    };

    return (
      <button onClick={clickHandler} className="addBasket pure-button">
        {this.props.text}
     </button>
    );
  }
});

export default AddToBasket

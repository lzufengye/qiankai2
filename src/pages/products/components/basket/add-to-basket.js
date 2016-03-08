import React from 'react'
import Reflux from 'reflux'

import basketStore from '../../stores/basket-store'
import actions from '../../actions/app-actions'

var AddToBasket = React.createClass({

  mixins: [Reflux.connect(basketStore), Reflux.ListenerMixin],

  render: function() {
    let clickHandler = () => {
      actions.addItem(this.props.item);
    };
    return (
      <button onClick={clickHandler} className="addBasket pure-button">
        {this.props.text}
     </button>
    );
  }
});

export default AddToBasket

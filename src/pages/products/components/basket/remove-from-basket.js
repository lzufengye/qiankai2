import React from 'react'
import Reflux from 'reflux'

import basketStore from '../../stores/basket-store'
import actions from '../../actions/app-actions'

var RemoveFromBasket = React.createClass({
  mixins: [Reflux.connect(basketStore), Reflux.ListenerMixin],

  render: function() {
    var clickHandler = actions.removeItem.bind(this, this.props.item);
    return (
      <button onClick={clickHandler} className="pure-button removeBasket">-</button>
    );
  }
});

export default RemoveFromBasket

import Reflux from 'reflux'

// REFLUX actions
var ProductActions = Reflux.createActions(
  [
    'loadCategory',
    'displayCategory',
    'hideCategory',
    'loadProduct'
  ]
);

export default ProductActions

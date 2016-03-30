import Reflux from 'reflux'

// REFLUX actions
var ProductActions = Reflux.createActions(
  [
    'loadCategory',
    'displayCategory',
    'hideCategory',
    'loadProducts',
    'searchProducts',
    'loadProduct',
    'loadProductsByCategory',
    'changeDisplayImage',
    'loadPage',
    'addItem',
    'removeItem',
    'pageChange',
    'loadAdvertisement'
  ]
);

export default ProductActions

import Reflux from 'reflux'

// REFLUX actions
var CustomerActions = Reflux.createActions(
  [
    'loadCustomers',
    'loadProducts'
  ]
);

export default CustomerActions

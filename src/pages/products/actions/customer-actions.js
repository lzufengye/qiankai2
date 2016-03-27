import Reflux from 'reflux'

// REFLUX actions
var CustomerActions = Reflux.createActions(
  [
    'loadCustomers',
    'loadCustomerProducts'
  ]
);

export default CustomerActions

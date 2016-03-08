import Reflux from 'reflux'

// REFLUX actions
var AppActions = Reflux.createActions(
  [
    'loadPage',
    'addItem',
    'removeItem',
    'pageChange',
    'loadAdvertisement'
  ]
);

export default AppActions

import Reflux from 'reflux'

var CartActions = Reflux.createActions([
  'toggleSelectAll',
  'loadItems',
  'toggleSelectItem',
  'deleteItem',
  'subtractQty',
  'addQty',

  'createOrder',
  'saveInvoice',
  'selectItemToOrder'
]);

export default CartActions
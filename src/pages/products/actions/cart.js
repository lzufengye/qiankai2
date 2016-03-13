import Reflux from 'reflux'

CartActions = Reflux.createActions([
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
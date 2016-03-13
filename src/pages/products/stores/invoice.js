import Reflux from 'reflux'

import InvoiceActions from '../actions/invoice'
import Qing from '../../../utils/qing'

var Invoice = Reflux.createStore({
  listenables: [InvoiceActions],
  getInitData: function () {

  },
  onNewInvoice: function () {

  }
});

export default Invoice
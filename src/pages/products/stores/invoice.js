import InvoiceActions from 'app/action/invoice'
import Qing from 'app/utils/qing'

Invoice = Reflux.createStore({
  listenables: [InvoiceActions],
  getInitData: function () {

  },
  onNewInvoice: function () {

  }
});

export default Invoice
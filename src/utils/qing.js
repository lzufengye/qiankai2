module.exports = {
  'apiPost': function (method, param, callback, errorCallback) {
    $.ajax({
      url: QING_APIHOST + method + '.json',
      dataType: 'json',
      type: 'GET',
      data: param,
      success: function (resp) {
        if (typeof callback == 'function') {
          callback(resp);
        }
      },
      error: function () {
        if (typeof errorCallback == 'function') {
          errorCallback();
        } else {
          alert(langs.trans('通讯出错，请联系管理员或稍候重试'));
        }
      }
    });
  }
};
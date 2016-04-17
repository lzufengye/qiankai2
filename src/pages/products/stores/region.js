import Reflux from 'reflux'

import RegionActions from '../actions/region'
import Qing from '../../../utils/qing'
import request from 'superagent'

var initRegionData = {
  provinceList: [],
  cityList: [],
  selectedProvince: {id: ''},
  selectedRegion: '请选择省市',
  selectedCity: {id: ''},
  selectedCityId: '',
  selectedProvinceId: ''
};
var Region = Reflux.createStore({
  listenables: [RegionActions],
  regionData: initRegionData,
  getInitData: function () {
    return initRegionData
  },
  //载入省份
  onLoadRegionProvince: function () {
    var $this = this;
    request.get('/data/region.provinceList.json')
      .end((err, resp) => {
        $this.regionData.provinceList = JSON.parse(resp.text).data.list;
        $this.trigger($this.regionData);
      });
  },
  //根据省份载入城市
  onSelectProvince: function (province, callback) {
    var $this = this;

    this.regionData.selectedProvince = province;
    if(province != undefined) {
      this.regionData.selectedProvinceId = province['id'];
    }
    this.regionData.selectedCityId = '';

    request.get('/data/region.cityList.'+ province['id'] +'.json')
      .end((err, resp) => {
        $this.regionData.cityList = JSON.parse(resp.text).data.list;
        $this.regionData.selectedProvince = province;
        $this.regionData.selectedRegion = province['name'];
        $this.trigger($this.regionData);
        if (typeof callback == 'function')
          callback.call();
      });
  },
  //选中城市
  onSelectCity: function (city) {
    this.regionData.selectedRegion = this.regionData.selectedProvince['name'] + '/' + city['name'];
    this.regionData.selectedCity = city;
    this.regionData.selectedCityId = city['id'];
    this.trigger(this.regionData);
  }
})

export default Region
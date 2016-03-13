import RegionActions from 'app/action/region'
import Qing from 'app/utils/qing'
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
    Qing.apiPost('region.provinceList', {}, function (resp) {
      $this.regionData.provinceList = resp.data.list;
      $this.trigger($this.regionData);
    });
  },
  //根据省份载入城市
  onSelectProvince: function (province, callback) {
    var $this = this;
    this.regionData.selectedProvince = province;
    this.regionData.selectedProvinceId = province['id'];
    this.regionData.selectedCityId = '';

    Qing.apiPost('region.cityList', {'provinceId': province['id']}, function (resp) {
      $this.regionData.cityList = resp.data.list;
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
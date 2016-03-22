import React from 'react'
import InformationBoard from './components/information-board'
import NavLink from '../header/nav-link'
import ServerConfig from '../config/server-config'

var ArticleList = React.createClass({
  getInitialState() {
    return {
      infoList: []
    };
  },

  loadListFromServer(title) {
    var searchValue = this.props.params.searchValue;
    if (searchValue != null) {
      $.ajax({
        url: ServerConfig['serverUrl'] + '/api/search/' + searchValue,
        dataType: 'json',
        cache: false,
        success: function (data) {
          this.setState({infoList: data['result']});
          console.log(data);
        }.bind(this),
        error: function (xhr, status, err) {
          console.error(ServerConfig['serverUrl'] + '/api/search/' + searchValue, status, err.toString());
        }.bind(this)
      });
    } else {
      $.ajax({
        url: ServerConfig['serverUrl'] + '/api/' + title,
        dataType: 'json',
        cache: false,
        success: function (data) {
          this.setState({infoList: data[this.props.params.title]});
        }.bind(this),
        error: function (xhr, status, err) {
          console.error(ServerConfig['serverUrl'] + '/api/' + title, status, err.toString());
        }.bind(this)
      });
    }
  },

  componentDidMount() {
    var path = this.props.params.title;
    if(this.props.params.category != null) {
      path += '?category=' + this.props.params.category;
    }
    this.loadListFromServer(path);
  },

  componentWillReceiveProps: function(nextProps) {
    var path = nextProps.params.title;
    if(nextProps.params.category != null) {
      path += '?category=' + nextProps.params.category;
    }
    this.loadListFromServer(path);
  },

  render() {
    var titleForLink = this.props.params.title;
    var infoList = this.state.infoList.map(function (info) {
      var category = info.category == undefined ? titleForLink : info.category;

      if(category == 'news') category = 'newses';

      var link = '/article/' + category  + '/' + info.id;
      return <NavLink to={link}>{info.title}</NavLink>
    });
    var titleMapping = {newses: '资讯中心', jobs: '就业信息', activities: '主题活动'};
    var articleMapping = {kaixian: '美丽开县', learning: '学习中心', course: '课程介绍', training: '教育培训',
      innovation_space: '众创空间展示', service: '政策与服务', incubation: '入驻与孵化', cooperation: '合作与配套',
      jiankang: '健康服务', canyin: '餐饮服务', fangwuzhongjie: '房屋中介', jiazheng: '家政服务', investment: '投资理财',
      financing_guarantee: '融资担保', microfinance: '小额贷款', bank_services: '银行服务', insurance_services: '保险服务',
      securities_information: '证券资讯', customer_show: '商家展示', education: '教育培训', guest_house: '创客之家',
      company_settlement: '企业入驻', company_policies: '政策咨询', experts: '专家把脉', business_running: '商务运作',
      law_services: '法务服务', association_service: '协会服务'
    };
    var title = articleMapping[this.props.params.category] || titleMapping[this.props.params.title];

    var className = 'article-list'
    if(this.props.params.searchValue != null) {
      className += ' search-result'
    }

    return (
      <InformationBoard className={className} backgroundColor='#f8f8f8' width='630px' color='#888' title={title}>
          {infoList}
      </InformationBoard>
    );
  }
});

export default ArticleList
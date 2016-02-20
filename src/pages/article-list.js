import React from 'react'
import InformationBoard from './components/information-board'
import NavLink from '../header/nav-link'

var ArticleList = React.createClass({
  getInitialState() {
    return {
      infoList: []
    };
  },

  loadListFromServer(title) {
    $.ajax({
      url: 'http://localhost:3000/api/' + title,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({infoList: data[this.props.params.title]});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error('localhost:3000/api/' + title, status, err.toString());
      }.bind(this)
    });
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
    var titleForLink = this.props.params.title
    var infoList = this.state.infoList.map(function (info) {
      var link = '/' + titleForLink + '/' + info.id
      return <NavLink to={link}>{info.title}</NavLink>
    });
    var titleMapping = {newses: '资讯中心', jobs: '就业信息', activities: '主题活动'};
    var articleMapping = {kaixian: '美丽开县', learning: '学习中心', course: '课程介绍', training: '教育培训', innovation_space: '众创空间展示', service: '政策与服务', incubation: '入驻与孵化', cooperation: '合作与配套'};
    var title = articleMapping[this.props.params.category] || titleMapping[this.props.params.title];
    return (
      <InformationBoard className='article-list' backgroundColor='#f8f8f8' width='630px' color='#888' title={title}>
          {infoList}
      </InformationBoard>
    );
  }
});

export default ArticleList
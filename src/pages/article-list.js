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
        this.setState({infoList: data[title]});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error('localhost:3000/api/' + title, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount() {
    this.loadListFromServer(this.props.params.title);
  },

  componentWillReceiveProps: function(nextProps) {
    this.loadListFromServer(nextProps.params.title);
  },

  render() {
    var infoList = this.state.infoList.map(function (info) {
      return <NavLink to="/page2">{info.title}</NavLink>
    });
    console.log(this.state.infoList);

    var titleMapping = {newses: '咨询中心', jobs: '就业信息', articles: '学习中心', activities: '主题活动'}

    return (
      <InformationBoard className='article-list' backgroundColor='#f8f8f8' width='630px' color='#888' title={titleMapping[this.props.params.title]}>
          {infoList}
      </InformationBoard>
    );
  }
});

export default ArticleList
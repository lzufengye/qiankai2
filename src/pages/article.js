import React from 'react'
import InformationBoard from './components/information-board'
import NavLink from '../header/nav-link'

var Article = React.createClass({
  getInitialState() {
    return {
      article: {}
    };
  },

  loadArticleFromServer(url) {
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({article: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount() {
    this.loadArticleFromServer('http://localhost:3000/api/' + this.props.params.title + this.props.params.id);
  },

  componentWillReceiveProps: function(nextProps) {
    this.loadArticleFromServer('http://localhost:3000/api/' + nextProps.params.title + nextProps.params.id);
  },

  render() {
    return (
      <InformationBoard className='article-list' backgroundColor='#f8f8f8' width='1000px' color='#888' title={article.title}>
          {article}
      </InformationBoard>
    );
  }
});

export default Article
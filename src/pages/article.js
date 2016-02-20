import React from 'react'
import InformationBoard from './components/information-board'
import NavLink from '../header/nav-link'
import ServerConfig from '../config/server-config'

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
        this.setState({article: data['article'] || data['news'] || data['activity'] || data['job']});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount() {
    var articleId = this.props.params.id == null ? '' : this.props.params.id
    this.loadArticleFromServer(ServerConfig['serverUrl'] + '/api/' + this.props.params.title + '/' + articleId);
  },

  componentWillReceiveProps (nextProps) {
    this.loadArticleFromServer(ServerConfig['serverUrl'] + '/api/' + this.props.params.title + '/' + articleId);
  },

  render() {
    return (
      <div className='wrapper container'>
        <div className='information-board article'>
          <div className='information-title'>{this.state.article.title}</div>
          <span dangerouslySetInnerHTML={{__html: this.state.article.text}} />
        </div>
      </div>
    );
  }
});

export default Article
import React from 'react'
import { browserHistory } from 'react-router'

var SearchBar = React.createClass({
  handleSearch(event) {
    event.preventDefault();
    const keyWord = event.target.elements[0].value;
    browserHistory.push('/search/' + keyWord);
  },

  render() {
    return (
      <form onSubmit={this.handleSearch} className='search-bar'>
        <input type='text' placeholder='请输入商品名称'/>
        <input type="submit" value="搜索" />
      </form>    );
  }
});

export default SearchBar
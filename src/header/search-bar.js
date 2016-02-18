import React from 'react'

var SearchBar = React.createClass({
  handleSearch(event) {
    event.preventDefault()
    const keyWord = event.target.elements[0].value
    console.log(keyWord)
  },

  render() {
    return (
      <form onSubmit={this.handleSearch} className='search-bar'>
        <input type='text' />
        <input type='submit' />
      </form>    );
  }
});

export default SearchBar
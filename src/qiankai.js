import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.js';
import Container from './container.js';
import Footer from './footer.js';

var App = React.createClass({
  render: function () {
    return (
      <div className="app">
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
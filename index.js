import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/app'
import Home from './src/pages/home'
import Page2 from './src/pages/page2'
import About from './src/pages/about'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/page2" component={Page2} />
      <Route path="/about" component={About} />
    </Route>
  </Router>,
  document.getElementById('content')
);
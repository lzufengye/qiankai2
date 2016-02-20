import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/app'
import Home from './src/pages/home'
import ConvenienceLife from './src/pages/convenience-life'
import About from './src/pages/about'
import ArticleList from './src/pages/article-list'
import EducationService from './src/pages/education-service'
import InnovationSpace from './src/pages/innovation-space'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/convenience-life" component={ConvenienceLife}>
        <Route path="/convenience-life/:title" component={ArticleList}/>
        <Route path="/convenience-life/:title/:id" component={Article}/>
      </Route>
      <Route path="/education-service" component={EducationService}>
        <Route path="/education-service/:title" component={ArticleList}/>
        <Route path="/education-service/:title/:id" component={Article}/>
      </Route>
      <Route path="/innovation-space" component={InnovationSpace}>
        <Route path="/innovation-space/:title" component={ArticleList}/>
        <Route path="/innovation-space/:title/:id" component={Article}/>
      </Route>
      <Route path="/about" component={About} />
    </Route>
  </Router>,
  document.getElementById('content')
);
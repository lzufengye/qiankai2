import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/app'
import Home from './src/pages/home'
import ConvenienceLife from './src/pages/convenience-life'
import About from './src/pages/about'
import ArticleList from './src/pages/article-list'
import Article from './src/pages/article'
import EducationService from './src/pages/education-service'
import InnovationSpace from './src/pages/innovation-space'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/convenience-life" component={ConvenienceLife}>
        <Route path="/convenience-life/:title" component={ArticleList}/>
        <Route path="/convenience-life/:title">
          <Route path="/convenience-life/:title/:category" component={ArticleList}/>
        </Route>
      </Route>
      <Route path="/education-service" component={EducationService}>
        <Route path="/education-service/:title">
          <Route path="/education-service/:title/:category" component={ArticleList}/>
        </Route>
      </Route>
      <Route path="/innovation-space" component={InnovationSpace}>
        <Route path="/innovation-space/:title"  component={ArticleList}/>
        <Route path="/innovation-space/:title">
          <Route path="/innovation-space/:title/:category" component={ArticleList}/>
        </Route>
      </Route>
      <Route path="/about" component={About} />
      <Route path="/search/:searchValue" component={ArticleList}/>
      <Route path="/:title/:id" component={Article}/>
    </Route>
  </Router>,
  document.getElementById('content')
);
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
import FinanceService from './src/pages/finance-service'
import Products from './src/pages/products/products'
import Product from './src/pages/products/product'
import CategoryProduct from './src/pages/products/category-product'
import Cart from './src/pages/products/cart'
import CartToOrder from './src/pages/products/components/cart-to-order'
import OrderPay from './src/pages/products/order-pay'
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
      <Route path="/finance-service" component={FinanceService}>
        <Route path="/finance-service/:title"  component={ArticleList}/>
        <Route path="/finance-service/:title">
          <Route path="/finance-service/:title/:category" component={ArticleList}/>
        </Route>
      </Route>
      <Route path="/about" component={About} />
      <Route path="/search/:searchValue" component={ArticleList}/>
      <Route path="/article/:title/:id" component={Article}/>
    </Route>
    <Route path="/products/:category" component={Products} >
    </Route>
    <Route path="/products-by-category/:category" component={CategoryProduct} >
    </Route>
    <Route path="/product/:id" component={Product} />
    <Route path="/shopping-cart" component={Cart} />
    <Route path="/shopping-cart-to-order" component={CartToOrder} />
    <Route path="/order-pay" component={CartToOrder} />
  </Router>,
  document.getElementById('content')
);
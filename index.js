import es5Shim from 'es5-shim'
import es5Sham from 'es5-shim/es5-sham'
import consolePolyfill from 'console-polyfill'

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

import routes from './src/config/routes'

ReactDOM.render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('content')
);
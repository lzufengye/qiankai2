require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

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

if (typeof Array.prototype.forEach != 'function') {
  Array.prototype.forEach = function(callback){
    for (var i = 0; i < this.length; i++){
      callback.apply(this, [this[i], i, this]);
    }
  };
}

ReactDOM.render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('content')
);
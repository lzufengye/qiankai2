if (!Array.prototype.forEach) {

  Array.prototype.forEach = function (callback, thisArg) {

    var T, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError
    if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}

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

ReactDOM.render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('content')
);
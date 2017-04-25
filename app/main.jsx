'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import axios from 'axios';

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import App from './components/App'
import AllProducts from './components/AllProducts'
import {onAllProducts} from './reducers/all-products'
import UserSetting from './components/UserSetting'
import AllOrders from './components/AllOrders'
import AllReviews from './components/AllReviews'
import AllUsers from './components/AllUsers'
import Cart from './components/Cart'
import SingleProduct from './components/SingleProduct'
import {getProduct} from './reducers/single-product'


const onProductEnter = (nextRouterState) => {
  const productId = nextRouterState.params.productId;
  store.dispatch(getProduct(productId))
}


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAllProducts}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={AllProducts} />
        <Route path="/orders" component={AllOrders} />
        <Route path="/reviews" component={AllReviews} />
        <Route path="/user/:userId/setting" component={UserSetting}/>
        <Route path="/users" component={AllUsers} />
        <Route path="/cart" component={Cart} />
        <Route path="/products/:productId" component={SingleProduct} onEnter={onProductEnter} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)

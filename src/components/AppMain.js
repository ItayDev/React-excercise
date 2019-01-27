import React, { Component } from 'react'
import {Route} from "react-router-dom";

import Home from "./AppHome";
import Cart from "./AppCart";
import Account from "./AppAcount";
import Products from "./AppProducts"
import ProductsDetails from "./AppProductsDetails";

export default class AppMain extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/account" component={Account} />
        <Route path="/products" component={Products} />
        <Route path="/products-details" component={ProductsDetails} />
      </div>
    )
  }
}

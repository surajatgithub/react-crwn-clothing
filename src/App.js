import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;

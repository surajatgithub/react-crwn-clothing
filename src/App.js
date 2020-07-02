import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/shop/hats"
          component={(props) => {
            return (
              <div>
                <button onClick={props.history.goBack}>Back</button>
                <br />
                <p>{props.location.pathname}</p>
              </div>
            );
          }}
        />
        <Route
          exact
          path="/shop/jackets"
          component={(props) => {
            return (
              <div>
                <button onClick={props.history.goBack}>Back</button>
                <br />
                <p>{props.location.pathname}</p>
              </div>
            );
          }}
        />
        <Route
          exact
          path="/shop/sneakers"
          component={(props) => {
            return (
              <div>
                <button onClick={props.history.goBack}>Back</button>
                <br />
                <p>{props.location.pathname}</p>
              </div>
            );
          }}
        />
        <Route
          exact
          path="/shop/womens"
          component={(props) => {
            return (
              <div>
                <button onClick={props.history.goBack}>Back</button>
                <br />
                <p>{props.location.pathname}</p>
              </div>
            );
          }}
        />
        <Route
          exact
          path="/shop/mens"
          component={(props) => {
            return (
              <div>
                <button onClick={props.history.goBack}>Back</button>
                <br />
                <p>{props.location.pathname}</p>
              </div>
            );
          }}
        />
      </Switch>
    );
  }
}

export default App;

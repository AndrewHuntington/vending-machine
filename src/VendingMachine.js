import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Chips from "./Chips";
import Beer from "./Beer";
import Ramen from "./Ramen";
import "./VendingMachine.css";

export default class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chips" component={Chips} />
          <Route exact path="/beer" component={Beer} />
          <Route exact path="/ramen" component={Ramen} />
        </Switch>
      </div>
    );
  }
}

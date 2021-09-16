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
          <Route exact path="/vending-machine" component={Home} />
          <Route exact path="/vending-machine/chips" component={Chips} />
          <Route exact path="/vending-machine/beer" component={Beer} />
          <Route exact path="/vending-machine/ramen" component={Ramen} />
        </Switch>
      </div>
    );
  }
}

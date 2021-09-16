import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import "./App.css";

export default class App extends Component {
  render() {
    const activeStyle = {
      fontWeight: "bold",
      color: "red",
    };

    return (
      <div className="App">
        <nav className="App-nav">
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
          <NavLink exact to="/chips" activeStyle={activeStyle}>
            Chips
          </NavLink>
          <NavLink exact to="/beer" activeStyle={activeStyle}>
            Beer
          </NavLink>
          <NavLink exact to="/ramen" activeStyle={activeStyle}>
            Ramen
          </NavLink>
        </nav>
        <VendingMachine />
      </div>
    );
  }
}

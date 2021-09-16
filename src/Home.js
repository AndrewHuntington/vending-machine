import React, { Component } from "react";
import { Link } from "react-router-dom";
import VendingMachine from "./img/v-machine.jpg";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img src={VendingMachine} />
        <div className="Home-menu">
          <ul className="Home-menu-list">
            <li>Select an Item:</li>
            <li>
              <Link to="/vending-machine/chips">Chips</Link>
            </li>
            <li>
              <Link to="/vending-machine/beer">Beer</Link>
            </li>
            <li>
              <Link to="/vending-machine/ramen">Ramen</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

// Photo by Louis from Pexels
// https://www.pexels.com/photo/a-photo-of-vending-machines-5881427/

import React, { Component } from "react";
import { Link } from "react-router-dom";
import ChipsGirl from "./img/chips.jpg";
import "./Chips.css";

export default class Chips extends Component {
  render() {
    return (
      <div className="Chips">
        <img src={ChipsGirl} />
        <div className="Chips-menu">
          <ul className="Chips-menu-list">
            <li>
              <Link to="/vending-machine">Go Back</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

// Photo by Davner Toledo from Pexels
// https://www.pexels.com/photo/expressive-woman-holding-packs-of-assorted-chips-in-market-and-shouting-4574404/

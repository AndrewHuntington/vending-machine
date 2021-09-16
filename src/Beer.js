import React, { Component } from "react";
import { Link } from "react-router-dom";
import BeerPic from "./img/beer.jpg";
import "./Beer.css";

export default class Beer extends Component {
  render() {
    return (
      <div className="Beer">
        <img src={BeerPic} />
        <div className="Beer-menu">
          <ul className="Beer-menu-list">
            <li>
              <Link to="/">Go Back</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

// Photo by Edward Eyer from Pexels
// https://www.pexels.com/photo/three-assorted-beverage-bottles-on-brown-wooden-table-667986/

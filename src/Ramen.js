import React, { Component } from "react";
import { Link } from "react-router-dom";
import RamenPic from "./img/ramen.jpg";
import "./Ramen.css";

export default class Ramen extends Component {
  render() {
    return (
      <div className="Ramen">
        <img src={RamenPic} />
        <div className="Ramen-menu">
          <ul className="Ramen-menu-list">
            <li>
              <Link to="/">Go Back</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

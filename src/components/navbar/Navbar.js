// @flow
import React from "react";
import logo from "./logo.ico";
import "materialize-css/dist/css/materialize.min.css";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <img src={logo} className="brand-logo left logo" />
        <ul id="nav-mobile" className="right hide-on-med"></ul>
      </div>
    </nav>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "./MainNavigation.css";

const mainNavigation = ({cartItemNumber}) => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart ({cartItemNumber})</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

mainNavigation.PropTypes = {
  cartItemNumber: PropTypes.number,
};
export default mainNavigation;

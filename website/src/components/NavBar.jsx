import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="navbar">
        <div>
          <button id="navbar">
            <NavLink className="navbar-item" to="/">
              Home
            </NavLink>
          </button>
          <button id="navbar">
            <NavLink className="navbar-item" to="/about">
              About
            </NavLink>
          </button>
          <button id="navbar">
            <NavLink className="navbar-item" to="/projects">
              Projects
            </NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

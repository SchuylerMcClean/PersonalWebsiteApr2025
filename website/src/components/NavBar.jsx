import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="navbar">
        <div>
          <button id="navbar">
            <a className="navbar-item" href="#home">
              Home
            </a>
          </button>
          <button>
            <a className="navbar-item" href="#about">
              About
            </a>
          </button>
          <button id="navbar">
            <a className="navbar-item" href="#projects">
              Projects
            </a>
          </button>
          <button id="navbar">
            <a className="navbar-item" href="#contact">
              Contact
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

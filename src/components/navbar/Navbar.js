import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <menu>
        <ul className="nav-links">
          <li>
            <a href="#feal">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#works">Pages</a>
          </li>
          <li>
            <a href="#shares">Screenshots</a>
          </li>
          <li>
            <a href="#challenge">Pricing</a>
          </li>
          <li>
            <a href="#Stay">Contact</a>
          </li>
        </ul>
      </menu>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
// import { AiOutlineBars } from "react-icons/ai";
// import { RiCloseLine } from "react-icons/ri";


import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
  return (
    <nav className="navbar container">
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <a href="#feal">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#download">Pages</a>
          </li>
          <li>
            <a href="#subscribe">Screenshots</a>
          </li>
          <li>
          <a href="#subscribe">Pricing</a>
        </li>
        <li>
            <a href="#subscribe">Contact</a>
          </li>
          
        </ul>
      </menu>
    
    </nav>
  );
};

export default Navbar;

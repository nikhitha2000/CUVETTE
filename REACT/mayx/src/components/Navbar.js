import React from 'react';
import { NavLink } from 'react-router-dom';
import  './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/main">Main</NavLink>
        </li>
        <li>
          <NavLink to="/feedback">Feedback</NavLink>
        </li>
        <li>
          <NavLink to="/userdetails">UserDetails</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

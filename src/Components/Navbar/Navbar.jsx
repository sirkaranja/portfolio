import React from 'react';
import './Navbar.css';

import About from '../About/About'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h3>Dan</h3>
      </div>
      <div className="nav-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href={{About}}>About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

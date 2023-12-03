import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="path_to_your_dan_logo_image" alt="Dan Logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
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

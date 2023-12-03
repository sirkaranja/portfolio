import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="main-serv">
      <h3>Services</h3>
      <div className="services-container">
        <div className="info">
          <h3>Web Development</h3>
          <p>Creating responsive and user-friendly websites using modern technologies.</p>
        </div>
        <div className="info">
          <h3>Backend Development</h3>
          <p>Building server-side applications and APIs using various technologies.</p>
        </div>
        <div className="info">
          <h3>Frontend Development</h3>
          <p>Creating interactive and responsive user interfaces for the web.</p>
        </div>
        <div className="info">
          <h3>UI/UX Design</h3>
          <p>Designing intuitive and user-friendly interfaces for digital products.</p>
        </div>
        <div className="info">
          <h3>Graphics Design</h3>
          <p>Creating visually appealing graphics and artwork for various purposes.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;

import React from 'react'
import './Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
function Portfolio() {
  return (
   <div className="main-port">
    <h3>Portfolio</h3>
    <div className="portfolio-container">
    <div className="project-info">
        <img src="https://shorturl.at/bzFGT" alt="" />
          <h3>Tripelo Agency</h3>
          <p>Creating responsive and user-friendly websites using modern technologies.</p>
          <a href="https://github.com/yourusername">Github
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://github.com/yourusername">Live Demo
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        </div>
        <div className="project-info">
        <img src="https://shorturl.at/bzFGT" alt="" />
          <h3>Events Management System</h3>
          <p>Creating responsive and user-friendly websites using modern technologies.</p>
          <a href="https://github.com/yourusername">Github
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://github.com/yourusername">Live Demo
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        </div>
        <div className="project-info">
        <img src="https://shorturl.at/bzFGT" alt="" />
          <h3>Uber clone</h3>
          <p>Creating responsive and user-friendly websites using modern technologies.</p>
          <a href="https://github.com/yourusername">Github
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://github.com/yourusername">Live Demo
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        </div>
    </div>
   </div>
  )
}

export default Portfolio
import React from 'react'
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5, faCss3,faJs, faReact, faBootstrap, faSass } from '@fortawesome/free-brands-svg-icons';
function Skills() {
  return (
    <div className="skills-main">
        <div className="front-dev">
            <h3>Frontend Developemnt</h3>
        <a href=''>
          <FontAwesomeIcon icon={faHtml5} className="icon" />
        </a>
        <a href=''>
          <FontAwesomeIcon icon={faCss3} className="icon" />
        </a>
        <a href=''>
          <FontAwesomeIcon icon={faJs} className="icon" />
        </a>
        <a href=''>
          <FontAwesomeIcon icon={faSass} className="icon" />
        </a>
        <a href=''>
          <FontAwesomeIcon icon={faBootstrap} className="icon" />
        </a>
        <a href=''>
          <FontAwesomeIcon icon={faReact} className="icon" />
        </a>
            
        </div>
        <div className="back-end">
            <h3>Backend Development</h3>
        </div>
    </div>
  )
}

export default Skills
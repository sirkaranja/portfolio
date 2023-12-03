import React from 'react'
import './Intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faGithub,
    faMedium,
    faInstagram,
    faFacebook,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons';
  import { faDesktop  } from '@fortawesome/free-solid-svg-icons';
  import { Link } from 'react-scroll';
function Intro() {
  return (
    <div className="intro-text">
    
    <div className="social-icons">
    <a href="https://github.com/yourusername">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://medium.com/yourusername">
          <FontAwesomeIcon icon={faMedium} className="icon" />
        </a>
        <a href="https://instagram.com/yourusername">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="https://facebook.com/yourusername">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </a>
        <a href="https://twitter.com/yourusername">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
        
    </div>
    <div className="text-content">
      <h1>Hi, I'm Dan</h1>
      <div className="intro-paragraphs">
        <p>A full-stack developer, web developer, API expert</p>
        <p>I develop beautiful and responsive SEO optimized websites.</p>
        <button className='btn'>Hire Me</button>
      </div>
      <div className="scroll-down">
        <Link to="sectionToScrollTo" smooth={true} duration={500}>
          <FontAwesomeIcon icon={faDesktop } className="icon" />
        </Link>
      </div>
    </div>
    <div className="img-me">
      <img src="https://shorturl.at/otvzG" alt="" srcset="" />
    </div>
  </div>
  )
}

export default Intro
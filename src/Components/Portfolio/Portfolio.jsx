import React from 'react'
import './Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import img3 from '../../assets/appoint.JPG'
import img4 from '../../assets/car1.JPG'
import img6 from '../../assets/explore1.JPG'
import img7 from '../../assets/laundry1.JPG'
import img8 from '../../assets/tour1.JPG'
function Portfolio() {
  return (
   <div className="main-port">
    <h3>Portfolio</h3>
    <div className="portfolio-container">
    <div className="project-info">
        <img src={img3} alt="" />
          <h3>Appointment Booking</h3>
          <p>Creating responsive and user-friendly websites using modern technologies.</p>
          <a href="https://github.com/sirkaranja/Dms--Appointment-Booking">Github
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://appoint-lilac.vercel.app/">Live Demo
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        </div>
        <div className="project-info">
        <img src={img6} alt="" />
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
        <img src={img4}alt="" />
          <h3>Car Rental</h3>
          <p>Creating responsive and user-friendly websites using modern technologies.</p>
          <a href="https://github.com/yourusername">Github
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://github.com/yourusername">Live Demo
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        </div>
        <div className="project-info">
        <img src={img7} alt="" />
          <h3>Laundry Servies</h3>
          <p>Creating responsive and user-friendly websites using modern technologies.</p>
          <a href="https://github.com/yourusername">Github
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://github.com/yourusername">Live Demo
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        </div>
        <div className="project-info">
        <img src={img8} alt="" />
          <h3>Tripelo Tours</h3>
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
// Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <h4>Daniel Karanja</h4>
            <div className="details">
                <h4>Links</h4>
                <p>Home</p>
                <p>About</p>
                <p>Portfolio</p>
                <p>Contact</p>
            </div>
            <div className="social-icon">
                <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
            <div className="cpy">
                <p>&copy; 2023 Your Website. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;

import React from 'react';
import './About.css';

function About() {
  return (
    <div className="main-about">
      <div className="img-container">
        <img src="https://wiki.tripwireinteractive.com/TWIimages/4/47/Placeholder.png" alt="Your descriptive alt text" />
      </div>
      <div className="details-container">
        <div className="details">
          <h1>About Me</h1>
          <p>
            With over 4+ years of experience in building <br/>professional websites for businesses, <br/>
            brands, and individuals, I bring you closer <br/> to your customers with my developer <br/> + SEO skills.
            
          </p>
          <p>Got a project? Hire me and enjoy quality <br/> & excellence in delivery.</p>
        </div>
        <div className="details-counter">
        <div className="counter-item">
            <h4 className="big-number">02+</h4>
            <span>Years of Experience</span>
          </div>
          <div className="counter-item">
            <h4 className="big-number">12</h4>
            <span>Completed Projects</span>
          </div>
        </div>
        <button className="btn-cv">Download CV</button>
      </div>
      
    </div>
  );
}

export default About;

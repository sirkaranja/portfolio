import React from 'react'
import './About.css'
function About() {
  return (
   <><div className="main-about">
          <div className="img-d">
              <img src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg" alt="img" srcset="" />
          </div>
          <div className="details">
              <h1>About Me</h1>
              <p>With over 4+ years experience in building professional websites for businesses, <br />brands and individuals,I bring you closer to your customers with my developer  <br />+ SEO skills.

                  Got a project? Hire me and enjoy quality & excellence in delivery.</p>
          </div>
          <div className="details-counter">

              <h4>02+ <span>Years of Experience</span></h4>
              <h4>12 <span>Completed Projects</span></h4>
          </div>
      </div><button className='btn-cv'>Downlaod CV</button></>
  )
}

export default About
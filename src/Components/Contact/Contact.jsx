import React, { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
      };
  return (
   <div className="main-contact">
    <h3>Contact Us</h3>
   <div className="contact-container">
   <div className="contact-info">
      <div>
        <FontAwesomeIcon icon={faPhone} />
     <p>Mobile Number <span>254798343427</span></p>
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
       <p>Email:<span>sirkaranja12@gmail.com</span></p> 
      </div>
    </div>
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
   </div>
   </div>
  )
}

export default Contact
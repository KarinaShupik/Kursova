import React from 'react';
import '../styles/ContactForm.css';  // Make sure to create this CSS file
import contactImage from '../img/con_form.png';  // Replace with the actual path to your image

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <h1>Contact from</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" name="comment"></textarea>
        
        <button type="submit">Send</button>
      </form>
      <div className="contact-image">
        <img src={contactImage} alt="Contact" />
      </div>
    </div>
  );
}

export default ContactForm;

import React from 'react';
import '../styles/ContactForm.css';  // Make sure to create this CSS file
import contactImage from '../img/con_form.png';  // Replace with the actual path to your image
import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setError(false)
      const res = await fetch('/api/auth/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      console.log(data)
      if(data.success === false){
        setError(true)
        return;
      }
    } catch (error) {
      setError(true)
    }
  } 

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Contact from</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="username" name="name" onChange={handleChange}/>
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange}/>
        
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" name="comment" onChange={handleChange}></textarea>
        
        <button type="submit">Send</button>

        <p className='err_message'>{error && 'Something went wrong!'}</p>
      </form>
      <div className="contact-image">
        <img src={contactImage} alt="Contact" />
      </div>
    </div>
  );
}

export default ContactForm;

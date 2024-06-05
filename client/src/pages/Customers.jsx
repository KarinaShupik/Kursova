import React, { useState } from 'react';
import '../styles/Customers.css';
import avatar from "../img/cus_face.png"

const testimonials = [
    {
      photo: avatar,
      name: 'Emily Johnson',
      dateTime: '00:00:00 Mon 15',
      text: 'Emily Johnson has been our loyal customer for over a decade. She loves the quality of our products and the exceptional customer service.',
    },
    {
      photo: avatar,
      name: 'Michael Smith',
      dateTime: '01:00:00 Tue 16',
      text: 'Michael Smith appreciates the variety of our products and the ease of the shopping experience. He always finds what he needs.',
    },
    {
      photo: avatar,
      name: 'Sophia Williams',
      dateTime: '02:00:00 Wed 17',
      text: 'Sophia Williams enjoys our speedy delivery service and the quality of our items. She recommends our store to all her friends.',
    },
  ];

export default function Customers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="customer_container">
      <section className="testimonials">
        <h1>Our customers</h1>
        <div className="testimonial">
          <div className="customer-photo">
            <img src={testimonials[currentSlide].photo} alt="Customer Photo" />
          </div>
          <div className="customer-info">
            <h2>{testimonials[currentSlide].name}</h2>
            <p className="date-time">{testimonials[currentSlide].dateTime}</p>
            <p className="testimonial-text">{testimonials[currentSlide].text}</p>
            <div className="pagination">
              {testimonials.map((_, index) => (
                <span key={index} className={`dot ${currentSlide === index ? 'active' : ''}`}></span>
              ))}
            </div>
          </div>
        </div>
        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>
      </section>
    </div>
  );
}

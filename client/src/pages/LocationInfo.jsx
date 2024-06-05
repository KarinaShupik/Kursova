import React from 'react';
import '../styles/LocationInfo.css';
import { Link } from "react-router-dom"

const LocationInfo = () => {
    return (
          <div className="contact-info">
          <div className="location">
            <div className="info">
              <h2>WHERE WE ARE?</h2>
              <p>Ukraine, Poltava Heroiv ATO 17</p>
              <p>099 49 88 528</p>
              <p>@kariiishi</p>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12726.037285404009!2d34.567025106053556!3d49.575768254770956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82f64cd0cbd85%3A0x528a08266c1d4938!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIgwqvQn9C-0LvRgtCw0LLRgdGM0LrQsCDQv9C-0LvRltGC0LXRhdC90ZbQutCwINGW0LzQtdC90ZYg0K7RgNGW0Y8g0JrQvtC90LTRgNCw0YLRjtC60LDCuw!5e0!3m2!1sru!2sua!4v1717572215919!5m2!1sru!2sua"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      );
};

export default LocationInfo;

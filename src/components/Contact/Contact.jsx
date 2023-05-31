import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <div className="contact-divider"></div>
        </div>
        <ul className="contact-info">
          <li>
            <i className='fa fa-phone'></i>
            <p>+1 (123) 456-7890</p>
          </li>
          <li>
            <i className='fa fa-envelope-o'></i>
            <p>nazmulhasanshadin000@gmail.com</p>
          </li>
          <li>
            <i className='fa fa-map-marker'></i>
            <p>123 Main St. Mymensingh,Gaffargaon</p>
          </li>
        </ul>
      </div>
      <div className="contact-right">
        <form action="">
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <textarea name="message" placeholder='Message'></textarea>
          <button className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

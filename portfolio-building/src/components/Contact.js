import React from 'react';
import './Contact.css';  // Create a corresponding CSS file for Contact styles

const Contact = () => (
  <section id="contact">
    <h2 className="section-title">Initiate Communication</h2>
    <form id="contact-form">
      <div className="form-group">
        <input type="text" id="name" required />
        <label htmlFor="name">Your name</label>
      </div>
      <div className="form-group">
        <input type="email" id="email" required />
        <label htmlFor="email">Your Email</label>
      </div>
      <div className="form-group">
        <textarea id="message" required></textarea>
        <label htmlFor="message">Your Message</label>
      </div>
      <button type="submit" className="btn-send">Transmit</button>
    </form>
  </section>
);

export default Contact;

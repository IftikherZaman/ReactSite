// File: src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="title">Contact Me</h2>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img src="/assets/email.png" alt="Email icon" className="icon contact-icon email-icon" />
          <p><a href="mailto:iftikherzaman.chowdhury@mail.utoronto.ca">iftikherzaman.chowdhury@mail.utoronto.ca</a></p>
        </div>
        <div className="contact-info-container">
          <img src="/assets/linkedin.png" alt="LinkedIn icon" className="icon contact-icon" />
          <p><a href="https://www.linkedin.com/in/iftikherzaman/" target="_blank" rel="noopener noreferrer">Iftikher Zaman</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
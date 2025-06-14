import React from 'react';
import '../assets/Contact.css';
import ContactVector from '../assets/contact_vector.svg';
import GitHub from '../assets/GitHub.svg';
import LinkedIn from '../assets/LinkedIn.svg';

const Contact = () => (
  <section className="contact-section">
    <div className="contact-content">
      <div className="contact-text">
        <h2 className="contact-title">Contact</h2>
        <div className="contact-info">
          <p><strong>Phone:</strong> +91 9788473957</p>
          <p><strong>Email:</strong> sabareessn12@gmail.com</p>
          <p><strong>Location:</strong> Tamil Nadu, India</p>
            <a href="https://github.com/SABAREESWARAN12"target="_blank" rel="noopener noreferrer">
                <img src={GitHub} className="social" alt="GitHub Profile"/>
            </a>
            <a href="https://www.linkedin.com/in/sabareeswaran-m-076196173/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} className="social" alt="LinkedIn Profile" />
            </a>
        </div>
      </div>
      <div className="contact-image">
        <img src={ContactVector} alt="Contact Illustration" />
      </div>
    </div>
  </section>
);

export default Contact;

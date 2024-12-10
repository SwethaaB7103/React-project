/* eslint-disable jsx-a11y/img-redundant-alt */
// src/components/ContactPage.js
import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import '../styles.css';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <br />

      {/* Contact Section */}
      <h1 align="center">Contact Us</h1>
      <p align="center">We'd love to hear from you. Please fill out the form below to get in touch with us.</p>
      <br></br>
      <section className="contact-container">
        <ContactForm />
        <div className="contact-image">
          <img src={require('../assets/pexels-cottonbro-4606344.jpg')} alt="Contact Image" height="70%" width="100%" />
        </div>
      </section>

      {/* Contact Information Section */}
      <ContactInfo />
      <br></br>
<br></br>
      <Footer />
    </div>
  );
};

export default ContactPage;

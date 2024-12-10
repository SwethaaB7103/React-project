import React from 'react';
import '../styles.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-info">
        <h4>Drop You Taxi</h4>
        <p>Providing safe and affordable travel services.</p>
      </div>
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Farechart">Fare Chart</a></li>
          <li><a href="/Conatct">Conatct</a></li>
          <li><a href="/Faq">FAQ</a></li>
          <li><a href="/Profile">Profile</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>Email: dropyoutaxi@gmail.com</p>
        <p>Phone: +91 99419 49991</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Drop You Taxi. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;

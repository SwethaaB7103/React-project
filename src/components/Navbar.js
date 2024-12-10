import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src="assets/Logo light.svg" alt="Drop You Taxi Logo" className="logo-img" />
    </div>
    <ul className="nav-links">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/farechart">Fare Chart</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/faq">FAQ</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
    <div className="cta">
      <a href="tel:+91 9941949991" className="call-button">Book via Call</a>
    </div>
    <div className="auth-btn-container">
      <Link to="/auth" className="cta-button">Login / Sign Up</Link> {/* Login/Sign Up Button */}
    </div>
  </nav>
);

export default Navbar;

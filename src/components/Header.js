import React from 'react';
import TripForm from './TripForm'; // Importing the TripForm component
import '../styles.css';

const Header = () => (
  <header className="header">
    <div className="overlay"></div>
    <div className="header-content">
      <h1 className="quote">"Travel with Comfort and Confidence"</h1>
      
      {/* Rendering the TripForm component */}
      <TripForm />
    </div>
  </header>
);

export default Header;

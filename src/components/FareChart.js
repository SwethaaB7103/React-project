// src/components/FareChart.js
import React from 'react';

const FareChart = () => {
  return (
    <div className="fare-chart-page">
    <br></br>

      {/* Fare Chart Section */}
      <section className="fare-chart">
        <div className="container">
          <h2 align="center">Fare Chart</h2>
          <p align="center">Here are the prices for our available vehicles and journeys. The fare is calculated based on distance.</p>

          <br>
          </br>
          <table className="fare-table">
            <thead>
              <tr>
                <th>Vehicle Type</th>
                <th>One-Way Fare (₹/km)</th>
                <th>Round-Trip Fare (₹/km)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sedan</td>
                <td>₹14</td>
                <td>₹13</td>
              </tr>
              <tr>
                <td>SUV</td>
                <td>₹19</td>
                <td>₹18</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <br></br>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-info">
            <h4>Drop You Taxi</h4>
            <p>Providing safe and affordable travel services.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/farechart">Fare Chart</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: dropyoutaxi@gmail.com</p>
            <p>Phone: +91 99419 49991</p>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 Drop You Taxi. All Rights Reserved. | Designed by Shinetech Team</p>
        </div>
      </footer>
    </div>
  );
};

export default FareChart;

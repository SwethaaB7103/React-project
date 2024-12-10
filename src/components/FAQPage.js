import React, { useState } from "react";
import "../styles.css";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Drop You Taxi?",
      answer: "Drop You Taxi is a taxi service providing affordable, safe, and convenient transportation for local and outstation trips.",
    },
    {
      question: "How do I book a taxi?",
      answer: "You can book a taxi by calling our number or through our website or app.",
    },
    {
      question: "What vehicles do you offer?",
      answer: "We offer Sedan, SUV, and Mini vehicles for local and outstation trips.",
    },
  ];

  return (
    <div>
     

      {/* FAQ Section */}
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>

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
              <li><a href="/">Home</a></li>
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

export default FAQPage;

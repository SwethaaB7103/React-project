// src/components/ContactForm.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig'; // Import Firebase config
import { collection, addDoc } from 'firebase/firestore';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Log the formData to console to verify data
      console.log('Form Data:', formData);

      // Add data to Firestore's 'messages' collection
      const docRef = await addDoc(collection(db, 'messages'), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
      });

      // Log Firestore document ID
      console.log('Document written with ID:', docRef.id);

      // Reset form fields after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });

      // Show success alert
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error sending message, please try again later.');
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your name" 
            value={formData.name}
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="text" 
            id="phone" 
            name="phone" 
            placeholder="Enter your phone number" 
            value={formData.phone}
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            value={formData.email}
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Enter your message" 
            value={formData.message}
            onChange={handleInputChange} 
            required 
          ></textarea>
        </div>
        <div className="form-group">
          <input type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

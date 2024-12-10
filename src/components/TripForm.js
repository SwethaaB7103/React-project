import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import '../styles.css';

const TripForm = () => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [vehicle, setVehicle] = useState('sedan');
  const [tripDate, setTripDate] = useState('');
  const [journeyType, setJourneyType] = useState('round-trip'); // Default to round-trip
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trip data to be saved
    const tripData = {
      name,
      phone,
      pickup,
      drop,
      vehicle,
      journeyType,
      tripDate,
      timestamp: new Date(), // Save the current timestamp
    };

    try {
      // Add the trip data to Firestore
      await addDoc(collection(db, 'trips'), tripData);
      console.log('Trip booked successfully:', tripData); // Log the success message
      // Reset form after submission
      setName('');
      setPhone('');
      setPickup('');
      setDrop('');
      setVehicle('sedan');
      setJourneyType('round-trip');
      setTripDate('');
    } catch (error) {
      console.error('Error adding trip to Firestore:', error);
    }
  };

  return (
    <form className="trip-form" id="trip-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="pickup">Pickup Location:</label>
        <input
          type="text"
          id="pickup"
          placeholder="Enter pickup location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="drop">Drop Location:</label>
        <input
          type="text"
          id="drop"
          placeholder="Enter drop location"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="vehicle">Vehicle Type:</label>
        <select
          id="vehicle"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          required
        >
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
        </select>
      </div>

      {/* Journey Type (One Way and Round Trip switched) */}
      <div className="form-group">
        <label htmlFor="journeyType">Journey Type:</label>
        <select
          id="journeyType"
          value={journeyType}
          onChange={(e) => setJourneyType(e.target.value)}
          required
        >
          <option value="round-trip">Round Trip</option>
          <option value="one-way">One Way</option>
        </select>
      </div>

      {/* Add Trip Date Input */}
      <div className="form-group">
        <label htmlFor="tripDate">Trip Date:</label>
        <input
          type="date"
          id="tripDate"
          value={tripDate}
          onChange={(e) => setTripDate(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="search-button">Book Your Ride</button>
    </form>
  );
};

export default TripForm;

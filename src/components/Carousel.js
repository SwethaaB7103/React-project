import React, { useState } from 'react';
import '../styles.css'

const Carousel = () => {
  // Array of car images and details
  const carData = [
    {
      image: '/assets/etios-car-png.png',
      name: 'Sedan',
      passengers: '4',
      comfort: 'Premium',
    },
    {
      image: '/assets/xylo-mahindra-xylo.png',
      name: 'SUV',
      passengers: '6',
      comfort: 'Luxury',
    },
    // Add more cars if needed
  ];

  // State to track the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle "Next" button click
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle "Previous" button click
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-section">
      <h1 className="carousel-heading">"Choose Your Ride, Enjoy the Journey"</h1>
      <div className="carousel-container">
        <div className="carousel">
          <div className="carousel-item">
            <img src={carData[currentIndex].image} alt={carData[currentIndex].name} />
            <div className="car-details">
              <h3>{carData[currentIndex].name}</h3>
              <p>Passengers: {carData[currentIndex].passengers}</p>
              <p>Comfort: {carData[currentIndex].comfort}</p>
            </div>
          </div>
        </div>
        <button className="prev-btn" onClick={prevSlide}>
          ❮
        </button>
        <button className="next-btn" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;

import React from 'react';
import Header from './Header';  // Correct path
import WhyRide from './WhyRide';  // Correct path
import Carousel from './Carousel';  // Correct path
import Features from './Features';  // Correct path
import Footer from './Footer';  // Correct path
import '../styles.css'; // Add your styling

const Home = () => {
  return (
    <div className="home">
      <Header />
      <WhyRide />
      <Features />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;

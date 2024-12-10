import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FareChart from './components/FareChart';
import ContactPage from './components/ContactPage';  // Ensure the path is correct
import FAQPage from './components/FAQPage';  // Ensure the path is correct
import './styles.css';
import AuthPage from './components/AuthPage';
import ProfilePage from './components/ProfilePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/farechart" element={<FareChart />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        

      </Routes>
    </Router>
  );
};

export default App;

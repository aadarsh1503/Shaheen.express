import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Import Router components
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FAQ from './components/FAQ/FAQ';
import AboutUs from './components/AboutUs/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TANDC from './components/TANDC/TANDC';
import TrackingForm from './components/TrackingForm/TrackingForm';
import Task from './components/PrivacyPolicy/Task';
import ChatWidget from './components/ChatWidget/ChatWidget';

function ScrollToTop() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Ensure the element with the ID exists
      const element = document.querySelector(hash);
      if (element) {
        // Scroll to the element with smooth behavior
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust for fixed navbar height if any
          
        });
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ChatWidget />
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/t&c" element={<TANDC />} />
          <Route path="/tracking-Form" element={<TrackingForm />} />
          <Route path="/privacy" element={<Task />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// Import necessary components and hooks
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Product from './Product';
import PricingTier from './PricingTier';
import Contact from './Contact';
import SignUpForm from './SignUpForm'; // Import the SignUpForm component
import Footer from './Footer'; // Import the Footer component

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const pricingRef = useRef(null);
  const productRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToProduct = () => {
    productRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = "Your Site Title";
  }, []);

  return (
    <Router>
      <div className="App">
        <Header
          scrollToProduct={scrollToProduct}
          scrollToPricing={scrollToPricing}
          scrollToContact={scrollToContact}
          setIsModalOpen={setIsModalOpen} // Passing the function to control modal visibility
        />

        {/* Existing Routes */}
        <Routes>
          <Route path="/" element={
            <>
              <div ref={productRef} className="section product-section">
                <Product />
              </div>
              <div ref={pricingRef} className="section pricing-section">
                <PricingTier />
              </div>
              <div ref={contactRef} className="section contact-section">
                <Contact />
              </div>
            </>
          } />
          {/* Removed the /signup route */}
        </Routes>

        {/* Conditionally render SignUpForm as a modal */}
        {isModalOpen && <SignUpForm setIsModalOpen={setIsModalOpen} />}
        
        {/* Render the Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

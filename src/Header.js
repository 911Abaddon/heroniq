import React, { useEffect } from 'react';
import './Header.css';
import logo from './photos/logo.jpeg';
import GradientButton from './GradientButton';
import EncryptButton from './EncryptButton';

function Header({ scrollToProduct, scrollToPricing, scrollToContact, setIsModalOpen }) {
  useEffect(() => {
    let timer = null;
    const handleScroll = () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        if (window.pageYOffset > 0) {
          document.querySelector('.navbar').classList.add('scrolled');
        } else {
          document.querySelector('.navbar').classList.remove('scrolled');
        }
      }, 100); // Adjusted to 100 milliseconds for debounce timing
    };
  
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <nav className="menu">
          <ul className="menu-list">
            <li><a onClick={scrollToProduct} href="#product">Product</a></li>
            <li><a onClick={scrollToPricing} href="#pricing">Price</a></li>
            <li><a href="/about"><span>About</span></a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="navbar-actions">
          <EncryptButton textProp="Log in" />
          <div className="signup-button-container">
            {/* Updated to open the signup modal instead of navigating to /signup */}
            <GradientButton buttonText="Sign up free" onClick={() => setIsModalOpen(true)} />
          </div>
        </div>
      </div>
      <div className="content">
        {/* Your main content here */}
      </div>
    </div>
  );
}

export default Header;

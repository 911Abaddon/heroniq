// GradientButton.js

import React from 'react';
import './GradientButton.css'; // Import the CSS styles

const GradientButton = ({ text, onClick }) => {
  return (
    <button className="gradient-shadow-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default GradientButton;

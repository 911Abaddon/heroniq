import React from 'react';
import './WetPaintButton.css'; // Import the CSS for the button

const Drip = ({ left, scaleY, height, additionalClass = '' }) => (
  <div className={`drip` + additionalClass} style={{ left, transform: `scaleY(${scaleY})` }}>
    <div className="drip-inner" style={{ height: `${height}px` }}></div>
  </div>
);

const WetPaintButton = ({ children }) => (
  <button className="wet-paint-button group">
    {children}
    <Drip left="10%" scaleY="0.75" height="24" />
    <Drip left="30%" scaleY="0.761024" height="20" additionalClass=" drip-visible" />
    {/* Add more Drip components as needed */}
  </button>
);

export default WetPaintButton;

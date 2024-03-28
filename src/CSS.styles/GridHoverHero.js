import React from 'react';
import './GridHoverHero.css';

const GridHoverHero = () => {
  const gridItems = Array.from({ length: 20 }, (_, i) => i); // Adjust number of items as needed

  return (
    <div className="grid-container">
      {gridItems.map((item) => (
        <div key={item} className="grid-item"></div>
      ))}
    </div>
  );
};

export default GridHoverHero;

import React, { useState } from 'react';
import OpenFridge from '../images/fridge-opened.png'
import ClosedFridge from '../images/fridge-closed.png'

function App() {
  return (
    <div>
      <ClosedFridge />
    </div>
  );
}

function ClosedFridge() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <img src={isHovered ? OpenFridge : "fridge-closed.png"} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
    />
  );
}

export default Logo;



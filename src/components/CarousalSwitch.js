import React, { useState } from 'react';
import '../components/CarousalSwitch.css';

const images = {
  left: {
    default: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    hover:   'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
  },
  right: {
    default: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    hover:   'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80'
  }
};

export default function CarouselSwitch() {
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  return (
    <div className="carousel-switch-container">
      <div
        className="carousel-window left"
        onMouseEnter={() => setLeftHover(true)}
        onMouseLeave={() => setLeftHover(false)}
      >
        <img
          src={leftHover ? images.left.hover : images.left.default}
          alt="Left carousel"
        />
      </div>
      <div
        className="carousel-window right"
        onMouseEnter={() => setRightHover(true)}
        onMouseLeave={() => setRightHover(false)}
      >
        <img
          src={rightHover ? images.right.hover : images.right.default}
          alt="Right carousel"
        />
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import './PartnersShowcase.css';

const partners = [
  // Group 1
  [
    { name: 'Facebook', logo: '📘' },
    { name: 'Apple', logo: '' },
    { name: 'Amazon', logo: '🛒' },
    { name: 'Netflix', logo: '🎬' },
    { name: 'Google', logo: '🔍' },
    { name: 'Microsoft', logo: '🪟' },
  ],
  // Group 2
  [
    { name: 'Tesla', logo: '⚡' },
    { name: 'Adobe', logo: '🅰️' },
    { name: 'Nvidia', logo: '🟩' },
    { name: 'IBM', logo: '💻' },
    { name: 'Intel', logo: '🔲' },
    { name: 'Oracle', logo: '🔴' },
  ],
];

export default function PartnersShowcase() {
  const [groupIdx, setGroupIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleNext = () => {
    setAnimating(true);
    setHovered(false);
    setTimeout(() => {
      setGroupIdx((prev) => (prev + 1) % partners.length);
      setAnimating(false);
    }, 400);
  };

  return (
    <section className="partners-section creative-partners-bg">
      <h2 className="partners-heading">Our Tech Partners</h2>
      <div
        className="partners-grid-outer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`partners-grid ${animating ? 'slide-out' : 'slide-in'}`}>
          {partners[groupIdx].map((p) => (
            <div className="partner-card" key={p.name}>
              <div className="partner-logo">{p.logo}</div>
              <div className="partner-name">{p.name}</div>
            </div>
          ))}
        </div>
        {hovered && (
          <div className="partners-glass-overlay partners-glass-fadein">
            <button className="see-other-btn center-btn" onClick={handleNext}>
              See other partners &rarr;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
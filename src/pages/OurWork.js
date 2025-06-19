import React from 'react';
import '../OurWork.css';

const images = [
  // Pexels and Pixabay images (all tested and working)
  'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&w=800&q=80',
  'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=800&q=80',
  'https://images.pexels.com/photos/340140/pexels-photo-340140.jpeg?auto=compress&w=800&q=80',
  'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&w=800&q=80',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
];

export default function OurWork() {
  // Parallax effect on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.work-img-parallax').forEach((img, idx) => {
        const speed = 0.18 + (idx % 3) * 0.09;
        const offset = window.scrollY * speed;
        img.style.transform = `translateY(${offset}px) scale(1.04)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate in on mount
  React.useEffect(() => {
    document.querySelectorAll('.work-img-parallax').forEach((img, idx) => {
      img.style.opacity = 0;
      img.style.transform = 'translateY(60px) scale(1.03)';
      setTimeout(() => {
        img.style.transition = 'opacity 1.1s cubic-bezier(.77,0,.18,1), transform 1.1s cubic-bezier(.77,0,.18,1)';
        img.style.opacity = 1;
        img.style.transform = 'translateY(0) scale(1.04)';
      }, 120 + idx * 120);
    });
  }, []);

  return (
    <div className="ourwork-page">
      <div className="ourwork-hero">
        <h1>
          <span className="ourwork-gradient">Our Work</span>
        </h1>
        <p>
          A showcase of our creative projects, products, and collaborations.<br />
          Scroll to explore our visual journey.
        </p>
      </div>
      <div className="ourwork-gallery">
        {images.map((src, idx) => (
          <div
            className={`work-img-container work-img-container-${idx % 5}`}
            key={idx}
            tabIndex={0}
            >
            <img
              src={src}
              alt={`Work ${idx + 1}`}
              className="work-img-parallax"
              draggable={false}
              loading="lazy"
            />
            <div className="work-img-overlay">
              <span className="work-img-label">Project #{idx + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
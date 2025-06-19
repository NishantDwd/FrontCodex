import React, { useRef, useEffect, useState } from 'react';
import '../Features.css';

const notionFeatures = [
  {
    title: "All-in-one Workspace",
    desc: "Notion brings notes, docs, tasks, and wikis into one collaborative space. Organize everything your way.",
  },
  {
    title: "Powerful Databases",
    desc: "Create tables, boards, calendars, and lists. Filter, sort, and relate data for ultimate productivity.",
  },
  {
    title: "Real-time Collaboration",
    desc: "Work together with your team, leave comments, mention teammates, and see changes live.",
  },
  {
    title: "Custom Templates",
    desc: "Start quickly with templates for project management, knowledge bases, personal goals, and more.",
  },
  {
    title: "Integrations & API",
    desc: "Connect Notion with your favorite tools and automate workflows using the Notion API.",
  },
];

export default function Features() {
  const rippleRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupIdx, setPopupIdx] = useState(0);

  // Ripple effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const ripple = rippleRef.current;
      if (!ripple) return;
      const rect = ripple.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ripple.style.setProperty('--ripple-x', `${x}px`);
      ripple.style.setProperty('--ripple-y', `${y}px`);
    };
    const ripple = rippleRef.current;
    if (ripple) {
      ripple.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (ripple) {
        ripple.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Scroll to feature
  const scrollToFeature = (idx) => {
    const el = document.getElementById(`notion-feature-${idx}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Pop up open
  const openPopup = (idx) => {
    setPopupIdx(idx);
    setShowPopup(true);
  };

  // Pop up close
  const closePopup = () => setShowPopup(false);

  return (
    <div className="notion-feature-page">
      <div className="notion-ripple-bg" ref={rippleRef}>
        <div className="notion-feature-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
            alt="Notion Logo"
            className="notion-logo"
          />
          <h1>Notion Features</h1>
          <p>
            Discover how <b>Notion</b> can supercharge your productivity and collaboration.<br />
            Explore the best features below!
          </p>
        </div>
        <div className="notion-feature-list">
          {notionFeatures.map((f, idx) => (
            <div className="notion-feature-card" id={`notion-feature-${idx}`} key={f.title}>
              <div className="notion-feature-card-title">{f.title}</div>
              <div className="notion-feature-card-desc">{f.desc}</div>
              <div className="notion-feature-card-actions">
                <button onClick={() => openPopup(idx)}>Learn More</button>
                <button onClick={() => scrollToFeature(idx)}>Scroll To</button>
              </div>
            </div>
          ))}
        </div>
        {/* Popup */}
        {showPopup && (
          <div className="notion-popup-overlay" onClick={closePopup}>
            <div className="notion-popup" onClick={e => e.stopPropagation()}>
              <h2>{notionFeatures[popupIdx].title}</h2>
              <p>{notionFeatures[popupIdx].desc}</p>
              <p style={{marginTop: '1rem', color: '#888'}}>This is a demo popup for Notion features. You can add more details or actions here.</p>
              <button className="notion-popup-close" onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
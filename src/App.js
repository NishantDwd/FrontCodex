import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Features from './pages/Features';
import Brands from './pages/Brands';
import OurWork from './pages/OurWork';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <Router>
      <div>
        <nav className="glassy-navbar">
          <div className="navbar-logo">FrontCodex</div>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/stats">Stats</Link></li>
            <li><Link to="/brands">Brands</Link></li>
            <li><Link to="/ourwork">Our Work</Link></li>
          </ul>
          <button
            className="toggle-btn"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <span role="img" aria-label="Light mode">🌞</span>
            ) : (
              <span role="img" aria-label="Dark mode">🌙</span>
            )}
          </button>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/ourwork" element={<OurWork />} />
          </Routes>
        </main>
      </div>
    </Router>
  );

  }

export default App;
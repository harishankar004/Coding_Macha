import React from 'react';
import './Navbar.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide navbar on specific pages
  if (location.pathname === '/create' || location.pathname === '/joinPage' || location.pathname === '/about') {
    return null;
  }

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Vibe<span>Code</span>
      </div>

      <div className="navbar-links">
        <a href="#leaderboard">Leaderboard 🚩</a>
        <Link to="/about">About Us 📑</Link>
      </div>

      <div className="navbar-actions">
        <button className="login-btn" onClick={handleLoginClick}>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the updated CSS file

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Floating background elements */}
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      {/* Main content card */}
      <div className="content-card">
        <div className="hero-section">
          <h1 className="home-title">Welcome to Coding Platform</h1>
          <p className="home-caption">Code • Compete • Conquer</p>
          
          <div className="home-buttons">
            <button 
              onClick={() => navigate('/Join')}
              className="home-btn join-btn"
            >
              Join Room
            </button>
            <button 
              onClick={() => navigate('/create')}
              className="home-btn create-btn"
            >
              Create Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
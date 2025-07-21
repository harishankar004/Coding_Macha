import React from 'react';
import './AboutUs.css';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <button className="back-button" onClick={() => navigate('/')}>⬅ Back</button>
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>VibeCode</strong> – a competitive coding platform where students challenge friends and sharpen their programming skills in a fun and interactive way!
        </p>
        <p>
          Unlike other platforms, <strong>we strictly disable tab switching and copy-paste</strong> to ensure fair play and promote real skill. Every challenge here is authentic.
        </p>
        <p>
          Our mission is to build a thriving coding community where students can compete, learn, and grow together.
        </p>
        <div className="features">
          <h2>🚀 Upcoming Features</h2>
          <ul>
            <li>💬 Real-time chat during code battles</li>
            <li>👥 Collaborative live coding with peers</li>
            <li>⚙️ Intelligent matchmaking based on skill</li>
            <li>🏆 Leaderboards to track performance</li>
            <li>🛡️ Built-in anti-cheat mechanisms</li>
          </ul>
        </div>
        <p>
          We're just getting started. Join us and become part of the next-gen coder’s playground!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

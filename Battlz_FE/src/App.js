import logo from './logo.svg';
import './App.css';
import './Home.js';
import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Join from './Join';
import Create from './Create';
import JoinPage from './JoinPage';
import Navbar from './Navbar'; // Import the LoginSignup component
import LoginRegister from './LoginRegister.js';
import AboutUs from './AboutUs.js'; // Import the AboutUs component
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} /> {/* Route for About Us page */}
           <Route path="/login" element={<LoginRegister />} />
          <Route path="/join" element={<Join />} />
          <Route path="/create" element={<Create />} />
          <Route path="/joinpage" element={<JoinPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { User, Lock, Mail } from 'lucide-react';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = async () => {
  try {
    const endpoint = isLogin
      ? "http://localhost:8082/api/users/login"
      : "http://localhost:8082/api/users/register";

    const payload = isLogin
      ? { username, password }
      : { username, email, password };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error || "An error occurred");
      return;
    }

    if (isLogin) {
      alert("Login successful");
      // Store user info if needed
      localStorage.setItem("username", username);
      // Navigate or update global state here if needed
    } else {
      alert("Registration successful");
      setIsLogin(true);
    }
  } catch (error) {
    alert("Request failed: " + error.message);
  }
};

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className={`auth-card ${isLogin ? 'login-mode' : 'register-mode'}`}>
          
          {/* Left Section */}
          <div className="left-section">
            {isLogin ? (
              // Login Form
              <div className="form-container">
                <h2>Login</h2>
                
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <User className="input-icon" size={20} />
                </div>

                <div className="input-wrapper">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Lock className="input-icon" size={20} />
                </div>

                <button onClick={handleSubmit} className="auth-btn">
                  Login
                </button>

                <p className="switch-text">
                  Don't have an account? 
                  <span onClick={toggleMode} className="switch-link">Sign Up</span>
                </p>
              </div>
            ) : (
              // Welcome Section for Register
              <div className="welcome-container">
                <h1>WELCOME<br />BACK!</h1>
                <p>Already registered? Sign in to access your account securely.</p>
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="right-section">
            {isLogin ? (
              // Welcome Section for Login
              <div className="welcome-container">
                <h1>WELCOME<br />BACK!</h1>
                <p>Enter your credentials to access your personalized dashboard.</p>
              </div>
            ) : (
              // Register Form
              <div className="form-container">
                <h2>Register</h2>
                
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <User className="input-icon" size={20} />
                </div>

                <div className="input-wrapper">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Mail className="input-icon" size={20} />
                </div>

                <div className="input-wrapper">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Lock className="input-icon" size={20} />
                </div>

                <button onClick={handleSubmit} className="auth-btn">
                  Register
                </button>

                <p className="switch-text">
                  Already have an account? 
                  <span onClick={toggleMode} className="switch-link">Sign In</span>
                </p>
              </div>
            )}
          </div>

          {/* Diagonal Overlay */}
          <div className="diagonal-overlay"></div>
        </div>
      </div>

    <style jsx>{`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .auth-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    padding: 40px 20px;
  }

  .auth-wrapper {
    perspective: 1000px;
  }

  .auth-card {
    width: 700px;
    height: 500px;
    position: relative;
    border: 2px solid #e91e63;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    box-shadow:
      0 25px 50px rgba(0, 0, 0, 0.8),
      0 10px 25px rgba(233, 30, 99, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
    transition: transform 1.2s cubic-bezier(0.23, 1, 0.32, 1),
                box-shadow 0.6s ease;
    transform-style: preserve-3d;
  }

  .auth-card:hover {
    transform: rotateY(0deg) scale(1.02);
    box-shadow:
      0 35px 70px rgba(0, 0, 0, 0.9),
      0 15px 35px rgba(233, 30, 99, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .left-section,
  .right-section {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .left-section {
    left: 0;
    background: #2a2a2a;
  }

  .right-section {
    right: 0;
    background: linear-gradient(135deg, #e91e63 0%, #ad1457 50%, #880e4f 100%);
  }

  .login-mode .left-section,
  .register-mode .right-section {
    background: #2a2a2a;
  }

  .login-mode .right-section,
  .register-mode .left-section {
    background: linear-gradient(135deg, #e91e63 0%, #ad1457 50%, #880e4f 100%);
  }

  .form-container {
    padding: 50px 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 10;
  }

  .form-container h2 {
    color: white;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 30px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 25px;
    transition: transform 0.4s ease;
  }

  .input-wrapper:hover {
    transform: translateY(-2px);
  }

  .input-wrapper input {
    width: 100%;
    padding: 14px 48px 14px 0;
    background: transparent;
    border: none;
    border-bottom: 2px solid #555;
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .input-wrapper input:focus {
    border-bottom-color: #e91e63;
    transform: scale(1.02);
  }

  .input-wrapper input::placeholder {
    color: #888;
  }

  .input-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
    pointer-events: none;
    transition: color 0.3s ease;
  }

  .input-wrapper input:focus + .input-icon {
    color: #e91e63;
    transform: translateY(-50%) scale(1.1);
  }

  .auth-btn {
    width: 100%;
    padding: 14px 24px;
    background: linear-gradient(135deg, #e91e63 0%, #ad1457 50%, #880e4f 100%);
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    margin: 15px 0 12px;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    box-shadow:
      0 8px 20px rgba(233, 30, 99, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .auth-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
    transition: left 0.5s ease;
  }

  .auth-btn:hover::before {
    left: 100%;
  }

  .auth-btn:hover {
    transform: translateY(-3px) scale(1.025);
    box-shadow:
      0 12px 35px rgba(233, 30, 99, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  .auth-btn:active {
    transform: scale(0.98);
    box-shadow:
      0 6px 15px rgba(233, 30, 99, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .switch-text {
    color: #ccc;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 0;
    white-space: nowrap;
  }

  .switch-link {
    color: #e91e63;
    margin-left: 6px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    font-size: 0.95rem;
  }

  .switch-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #e91e63;
    transition: width 0.3s ease;
  }

  .switch-link:hover {
    color: #f06292;
  }

  .switch-link:hover::after {
    width: 100%;
  }

  .welcome-container {
    padding: 50px 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    position: relative;
    z-index: 5;
  }

  .welcome-container h1 {
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .welcome-container p {
    font-size: 1.05rem;
    line-height: 1.6;
    opacity: 0.9;
    max-width: 300px;
  }

  .diagonal-overlay {
    position: absolute;
    top: 0;
    width: 120px;
    height: 100%;
    background: #2a2a2a;
    z-index: 8;
    transition: all 1.2s ease;
  }

  .login-mode .diagonal-overlay {
    left: calc(50% - 60px);
    clip-path: polygon(0 0, 100% 0, 50% 100%, 0 100%);
  }

  .register-mode .diagonal-overlay {
    left: calc(50% - 60px);
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%);
  }

  @media (max-width: 1024px) {
    .auth-card {
      width: 90%;
      max-width: 800px;
      height: auto;
    }

    .form-container,
    .welcome-container {
      padding: 40px 25px;
    }
  }

  @media (max-width: 768px) {
    .auth-card {
      flex-direction: column;
      height: auto;
    }

    .left-section,
    .right-section {
      position: relative;
      width: 100%;
      height: auto;
    }

    .diagonal-overlay {
      display: none;
    }

    .form-container h2 {
      font-size: 2.2rem;
    }

    .welcome-container h1 {
      font-size: 2.8rem;
    }
  }
`}</style>

    </div>
  );
};

export default LoginRegister;

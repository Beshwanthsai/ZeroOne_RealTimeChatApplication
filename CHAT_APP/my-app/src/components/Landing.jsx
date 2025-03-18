import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="landing-container">
      <nav className="nav-bar">
        <div className="logo">ZeroOne</div>
        <button className="get-started-btn">Get Started</button>
      </nav>

      <div className="landing-content">
        <div className="hero-section">
          <h1>Welcome to ZeroOne Chat</h1>
          <p className="subtitle">
            Connect instantly with friends and colleagues
          </p>
        </div>

        <div className="features">
          <div className="feature-item">
            <i className="fas fa-bolt"></i>
            <h3>Real-time Chat</h3>
            <p>Experience instant messaging with WebSocket technology</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-lock"></i>
            <h3>Secure</h3>
            <p>End-to-end encryption for your privacy</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-history"></i>
            <h3>Chat History</h3>
            <p>Access your conversation history anytime</p>
          </div>
        </div>

        <div className="cta-section">
          <button className="cta-button" onClick={handleSignUpClick}>
            Start Chatting Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;

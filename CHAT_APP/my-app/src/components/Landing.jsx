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
        <div className="logo">Real Time Chat Bot🤖</div>
        <button className="get-started-btn" onClick={handleSignUpClick}>Get Started</button>
      </nav>

      <div className="landing-content">
        <div className="hero-section">
          <h1>Welcome to ZeroOne Chat Real Time Chat Applcation</h1>
          <p className="subtitle">
            ⚡️Connect instantly with friends and colleagues
          </p>
          <p className="subtitle">
            ⚡️Make your conversations more engaging and fun
          </p>
          <p className="subtitle">
            ⚡️Make Your Own groups and chat with your friends
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
      <div className="footer">
        <div className="footer-top">
          <div className="footer-section">
            <h4>ZeroOne Chat</h4>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Enterprise</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">Copyright © {new Date().getFullYear()} ZeroOne Inc. All rights reserved.</p>
          <div className="legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
          <div className="social">
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

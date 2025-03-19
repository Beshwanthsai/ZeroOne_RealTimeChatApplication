import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-container">
      <button className="home-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      
      <div className="marq">
        <marquee behavior="" direction="left">ZeroOne</marquee>
      </div>
      <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
        {/* Front of the card */}
        <div className="card-face card-front">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Username" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          <p className="login-link">
            Already have an account?{" "}
            <span onClick={() => setIsFlipped(true)}>Sign In</span>
          </p>
        </div>

        {/* Back of the card */}
        <div className="card-face card-back">
          <h2>Welcome Back</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>
          <p className="signup-link">
            Don't have an account?{" "}
            <span onClick={() => setIsFlipped(false)}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
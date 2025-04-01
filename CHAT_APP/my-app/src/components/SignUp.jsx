import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "../styles/components/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/dashboard"); // Create a dashboard route for authenticated users
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
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
       
        <div className="card-face card-front">
          <h2>Create Account</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSignUp}>
            <div className="form-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="signup-button" disabled={loading}>
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>
          <p className="login-link">
            Already have an account?{" "}
            <span onClick={() => setIsFlipped(true)}>Sign In</span>
          </p>
        </div>

        {/* Back of the card - Sign In */}
        <div className="card-face card-back">
          <h2>Welcome Back</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSignIn}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
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
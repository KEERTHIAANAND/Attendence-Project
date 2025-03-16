import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import googleLogo from '../assets/google.png'; 
import facebook from '../assets/facebook.png';
import apple from '../assets/apple.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    if(email !== 'admin@gmail.com' || password !== 'admin') {
        alert('Invalid email or password');
        return;
    }
    
    if (rememberMe) {
      localStorage.setItem('rememberMe', 'true');
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('email');
    }
    
    console.log("Login button clicked");
    navigate('/cities');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p>Enter your email and password to log in</p>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" className="input-field" required/>
          <input type="password" placeholder="Password" className="input-field" required/>
          <div className="remember-me">
            <input 
              type="checkbox" 
              id="rememberMe" 
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <a href="#" className="forgot-password">Forgot Password?</a>
        <div className="login-with">
          <p>Or login with</p>
          <div className="social-buttons">
            <button className="google">
              <img src={googleLogo} alt="Google" className="social-logo" />
            </button>
            <button className="google">
              <img src={facebook} alt="Google" className="social-logo" />
            </button>
            <button className="google">
              <img src={apple} alt="Google" className="social-logo" />
            </button>
          </div>
        </div>
        <p className="sign-up">Don't have an account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
};

export default LoginPage;

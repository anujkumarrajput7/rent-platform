import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login to Rentify</h2>

      <input
        type="email"
        placeholder="Email"
        className="login-input"
      /><br />

      <input
        type="password"
        placeholder="Password"
        className="login-input"
      /><br />

      <button className="login-btn">Login</button>

      <div className="login-links">
        <Link to="/register">Don't have an account? <strong>Sign Up</strong></Link><br />
        <Link to="/forgot-password"><strong>Forgot Password?</strong></Link>
      </div>
    </div>
  );
};

export default Login;

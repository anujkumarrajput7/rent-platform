import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">🏠 Rentify</h2>
      <ul className="navbar-menu">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/login" className="navbar-link">Login</Link></li>
        <li><Link to="/dashboard" className="navbar-link">Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

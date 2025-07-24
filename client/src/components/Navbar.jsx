import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🏠 Rentify</h2>
      <ul style={styles.menu}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/login" style={styles.link}>Login</Link></li>
        <li><Link to="/register" style={styles.link}>Register</Link></li>
        <li><Link to="/dashboard" style={styles.link}>Dashboard</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff', // white background
    color: '#000000', // black text
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#000000', // black logo text
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
  },
  link: {
    color: '#000000', // black links
    fontWeight: 500,
    textDecoration: 'none',
  },
};

export default Navbar;

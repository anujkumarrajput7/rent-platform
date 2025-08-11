import React from 'react';
import './Register.css'; // import styles

const Register = () => {
  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h2>Create an Account</h2>

        <input type="text" placeholder="Full Name" className="register-input" />
        <input type="text" placeholder="Username" className="register-input" />
        <input type="email" placeholder="Email" className="register-input" />
        <input type="tel" placeholder="Phone Number" className="register-input" />
        <input type="date" className="register-input" />
        <input type="password" placeholder="Password" className="register-input" />
        <input type="password" placeholder="Confirm Password" className="register-input" />

        <div className="gender-group">
          <label>Gender:</label>
          <label><input type="radio" name="gender" value="male" /> Male</label>
          <label><input type="radio" name="gender" value="female" /> Female</label>
          <label><input type="radio" name="gender" value="other" /> Other</label>
        </div>

        <button className="register-btn">Register</button>
      </div>
    </div>
  );
};

export default Register;

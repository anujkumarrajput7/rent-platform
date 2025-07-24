import React from 'react';

const Register = () => {
  return (
    <div className="container">
      <h2>Register</h2>

      <input type="text" placeholder="Name" className="input" /><br /><br />
      <input type="text" placeholder="Username" className="input" /><br /><br />
      <input type="email" placeholder="Email" className="input" /><br /><br />
      <input type="tel" placeholder="Phone Number" className="input" /><br /><br />
      <input type="date" placeholder="Date of Birth" className="input" /><br /><br />
      <input type="password" placeholder="Password" className="input" /><br /><br />
      <input type="password" placeholder="Confirm Password" className="input" /><br /><br />

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ marginRight: '1rem' }}>Gender:</label>
        <label>
          <input type="radio" name="gender" value="male" /> Male
        </label>
        <label style={{ marginLeft: '1rem' }}>
          <input type="radio" name="gender" value="female" /> Female
        </label>
        <label style={{ marginLeft: '1rem' }}>
          <input type="radio" name="gender" value="other" /> Other
        </label>
      </div>

      <button className="btn">Register</button>
    </div>
  );
};

export default Register;

import React from "react";
import "./Profile.css"; // Correct import for styling

const Profile = () => {
  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-card">
        <img
          src="/image/profile-placeholder.png" // make sure this is in 'public/image'
          alt="Profile"
          className="profile-img"
        />
        <div className="profile-details">
          <h2>John Doe</h2>
          <p>Email: johndoe@example.com</p>
          <p>Phone: +91 9876543210</p>
          <button>Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

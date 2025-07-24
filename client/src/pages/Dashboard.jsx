import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Your Properties</h3>
          <p>View and manage your listed properties here.</p>
        </div>
        <div className="dashboard-card">
          <h3>Analytics</h3>
          <p>See how your properties are performing.</p>
        </div>
        <div className="dashboard-card">
          <h3>Profile</h3>
          <p>Update your contact and personal information.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

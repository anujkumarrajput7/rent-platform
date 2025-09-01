import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    { title: 'Your Properties', desc: 'View and manage your listed properties here.' },
    { title: 'Analytics', desc: 'See how your properties are performing.' },
    { title: 'Profile', desc: 'Update your contact and personal information.', link: '/profile' },
    { title: 'Messages', desc: 'Check messages from potential tenants or buyers.' },
    { title: 'Settings', desc: 'Manage your account preferences and configurations.' },
    { title: 'Reports', desc: 'Download and view detailed reports of your properties.' }
  ];

  const handleCardClick = (link) => {
    if (link) navigate(link);
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Welcome to Your Dashboard</h2>
      <div className="dashboard-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className="dashboard-card"
            onClick={() => handleCardClick(card.link)}
            style={{ cursor: card.link ? 'pointer' : 'default' }}
          >
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
  
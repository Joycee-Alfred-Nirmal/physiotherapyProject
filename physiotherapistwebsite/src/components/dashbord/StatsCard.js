// src/components/dashbord/StatsCard.js
import React from 'react';
import './StatsCard.css'; // Check that this file doesn't hide content

const StatsCard = ({ title, count }) => {
  return (
    <div className="stats-card">
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
};

export default StatsCard;

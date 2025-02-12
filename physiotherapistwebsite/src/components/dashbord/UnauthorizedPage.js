import React from 'react';
import { Link } from 'react-router-dom';
import './UnauthorizedPage.css';

const UnauthorizedPage = () => {
  return (
    <div className="unauthorized-container">
      <h2>Access Denied</h2>
      <p>You do not have permission to access this page.</p>
      <Link to="/home">Go to Home</Link>
    </div>
  );
};

export default UnauthorizedPage;

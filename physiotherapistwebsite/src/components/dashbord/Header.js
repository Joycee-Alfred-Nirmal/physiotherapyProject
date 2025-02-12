import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Dashboard</h1>
        <p>Manage your account and transactions easily.</p>
      </div>
      <div className="header-right">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="user-avatar"
        />
      </div>
    </header>
  );
}

export default Header;

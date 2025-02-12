import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaWallet, FaMoneyCheckAlt, FaHome, FaCalendarAlt } from 'react-icons/fa'; // Importing icons
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>HealthCare</h2>
      </div>

      {/* Hamburger Icon */}
      {/* <div className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </div> */}

      <ul>
      <li>
      <Link to="/admin-dashboard">Admin Dashboard</Link>
      </li>
        <li>
          <Link to="profile">
            <FaUser style={{ marginRight: '10px' }} /> Profile
          </Link>
        </li>
        <li>
          <Link to="wallet">
            <FaWallet style={{ marginRight: '10px' }} /> Wallet
          </Link>
        </li>
        <li>
          <Link to="payments">
            <FaMoneyCheckAlt style={{ marginRight: '10px' }} /> Payments
          </Link>
        </li>
        <li>
          <Link to="/book-appointment">
            <FaCalendarAlt style={{ marginRight: '10px' }} /> Appointments
          </Link>
        </li>
        <li>
          <Link to="/home">
            <FaHome style={{ marginRight: '10px' }} /> Home
          </Link>
        </li>
        

      </ul>

    </nav>
  );
}

export default Sidebar;

import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Wallet from './Wallet';
import Payments from './Payments';
import './App1.css';
import Sidebar from './Sidebar';
import AdminDashboard from './AdminDashboard';
import AppointmentsTable from './AppointmentsTable';
import UsersTable from './UsersTable';


function App1() {
  return (
   
      <div className="dashboard">
        
        <Sidebar/>
        <div className="content ">
          <Routes>
            <Route path="/" element={<Navigate to="profile" replace />} />
            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="payments" element={<Payments />} />
            <Route path="appointmentstable" element={<AppointmentsTable />} />
            <Route path="userstable" element={<UsersTable />} />
           

          </Routes>
        </div>
      
      </div>
    
  );
}

export default App1;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import axios from 'axios';
import UsersTable from './UsersTable';
import AppointmentsTable from './AppointmentsTable';
import StatsCard from './StatsCard';
import './AdminDashboard.css';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate(); // ✅ Define navigate

  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login'); // Redirect if no token is found
          return;
        }

        // Fetch user details (including role)
        const userResponse = await axios.get('http://localhost:5000/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (userResponse.data.role !== 'admin') {
          navigate('/unauthorized'); // Redirect if not admin
          return;
        }

        setIsAdmin(true); // ✅ Set state to confirm admin access
        setIsLoading(false); // ✅ Stop loading once role is verified

        // Fetch users data
        const usersResponse = await axios.get('http://localhost:5000/api/auth/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(usersResponse.data);

        // Fetch appointments data
        const appointmentsResponse = await axios.get('http://localhost:5000/api/auth/appointments', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAppointments(appointmentsResponse.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        navigate('/login'); // Redirect on error
      }
    };

    fetchData();
  }, [navigate]); // ✅ Include navigate in dependencies

  if (isLoading) {
    return <h2>Loading...</h2>; // Prevent rendering until admin check is complete
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="stats">
        <StatsCard title="Total Users" count={users.length} />
        <StatsCard title="Total Appointments" count={appointments.length} />
      </div>
      <div className="tables">
        <UsersTable users={users} />
        <AppointmentsTable appointments={appointments} />
      </div>
    </div>
  );
}

export default AdminDashboard;

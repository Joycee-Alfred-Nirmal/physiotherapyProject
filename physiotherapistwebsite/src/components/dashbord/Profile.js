import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting
import { jwtDecode } from 'jwt-decode';
import './Profile.css';

function Profile() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');
  const [userName, setUserName] = useState(''); // State for storing the user's name
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You are not logged in.');
      return;
    }

    // Decode the token to get the user's name
    try {
      const decodedToken = jwtDecode(token);
      console.log("Decoded Token:", decodedToken);
      setUserName(decodedToken?.name || 'User'); // Set the name from the token payload
    } catch (error) {
      console.error('Failed to decode token:', error);
      setError('Invalid token.');
      return;
    }

    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/getAppointments', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Appointments Data:", response.data);
        if (Array.isArray(response.data)) {
          setAppointments(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
          // setError('Failed to load appointments.');
          setAppointments([]); 
        }
      } catch (err) {
        console.error("Error fetching appointments:", err);
        setError('Error fetching appointments.');
      }
    };

    fetchAppointments();
  }, []);

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    navigate('/sign-in');
  };

  const formatDateTime = (isoString) => {
    const dateObj = new Date(isoString);
    const date = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return { date, time };
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending':
        return { backgroundColor: 'orange', color: 'white' };
      case 'Confirmed':
        return { backgroundColor: 'green', color: 'white' };
      case 'Cancelled':
        return { backgroundColor: 'red', color: 'white' };
      default:
        return {};
    }
  };

  return (
    <div className="page">
      <main className="main-content">
        {/* Header */}
        <div className="header">
          <div className="greeting">
            <h1>Good Morning {userName}!</h1>
            <p>How are you feeling today?</p>
          </div>
          <div className="profile">
            <div className="dropdown show">
              <a
                className="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {userName}
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" onClick={handleLogout} href="#">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Card */}
        <div className="highlight-card">
          <h2>Find the best doctors with Health Care</h2>
          <p>Appoint the doctors and get the finest medical services.</p>
        </div>

        {/* Appointments Table */}
        <section className="appointments">
          <h3>Appointments</h3>
          {error && <p className="error">{error}</p>}
          <table>
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Specialization</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment, index) => {
                  const { date, time } = formatDateTime(appointment.date);
                  return (
                    <tr key={index}>
                      <td>{appointment.doctors}</td>
                      <td>{appointment.service}</td>
                      <td>{date}</td>
                      <td>{time}</td>
                      <td>
                        <span
                          style={{
                            ...getStatusStyle(appointment.status),
                            padding: '5px',
                            borderRadius: '5px'
                          }}
                        >
                          {appointment.status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5">No appointments available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Profile;

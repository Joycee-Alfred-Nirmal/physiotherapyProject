import React from 'react';
import './AppointmentsTable.css';

function AppointmentsTable({ appointments }) {
  // Helper to format the date and time
  const formatDateTime = (isoString) => {
    const dateObj = new Date(isoString);
    const date = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return { date, time };
  };

  return (
    <div className="appointments-table">
      <h2>Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Doctor</th>
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
                <tr key={appointment._id || index}>
                  <td>{index + 1}</td>
                  <td>{appointment.firstName}</td>
                  <td>{appointment.lastName}</td>
                  <td>{appointment.doctors || 'N/A'}</td>
                  <td>{date}</td>
                  <td>{time}</td>
                  <td>{appointment.status}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="7">No appointments available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentsTable;

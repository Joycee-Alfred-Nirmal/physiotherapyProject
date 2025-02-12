import React from 'react';
import './UsersTable.css';

function UsersTable({ users }) {
  return (
    <div className="users-table">
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Email</th>
            {/* <th>Role</th> */}
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user._id || index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>{user.role ? user.role : 'User'}</td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;

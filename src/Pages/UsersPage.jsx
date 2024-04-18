import React, { useState, useEffect } from 'react';
import axios from 'axios';


function UsersPage() {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    // Fetch registered users from backend API
    axios.get('/api/users')
      .then(response => {
        setRegisteredUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching registered users:', error);
      });
  }, []);

  return (
    <div>
      <h1>Registered Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Mobile</th>
            <th>Date of Birth</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {registeredUsers.map(user => (
            <tr key={user._id}>
              <td>{user.firstname} {user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.gender}</td>
              <td>{user.mobile}</td>
              <td>{user.dateofbirth}</td>
              <td>{user.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;

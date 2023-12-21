import React from 'react';
import './Profile.css';

const ProfilePage = () => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    dateOfBirth: '1990-05-15',
    address: '1234 Elm Street, Springfield, IL',
    phone: '+1234567890',
  };

  return (
    <div>
    <h2 style={{marginLeft:'30px'}}>Profile</h2>
    <div className="profile-container">
      <div className="profile-details">
        <div className="user-avatar">
          <img src="https://media.newyorker.com/photos/64bc4330ef09d4a0e04cb249/3:4/w_1278,h_1704,c_limit/Rosen-Messi-Miami.jpg" alt="User Avatar" />
        </div>
        <div className="user-info">
          <h3>{user.firstName} {user.lastName}</h3>
          <p>Email: {user.email}</p>
          <p>Date of Birth: {user.dateOfBirth}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;

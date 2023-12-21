import React, { useState } from 'react';
import './Register.css'; 

const RegisterStudent = () => {
  const [studentInfo, setStudentInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    grade: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo({
      ...studentInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student info submitted:', studentInfo);
    setStudentInfo({
      firstName: '',
      lastName: '',
      email: '',
      grade: '',
    });
  };

  return (
    <div className="register-form"> 
      <h2>Register Student</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={studentInfo.firstName}
          onChange={handleInputChange}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={studentInfo.lastName}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={studentInfo.email}
          onChange={handleInputChange}
        />

        <label htmlFor="grade">Grade:</label>
        <input
          type="text"
          id="grade"
          name="grade"
          value={studentInfo.grade}
          onChange={handleInputChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterStudent;

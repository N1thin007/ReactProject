import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalClasses, setTotalClasses] = useState(0);

  useEffect(() => {
    const fetchStudentData = () => {
      const totalStudentsCount = 150;
      setTotalStudents(totalStudentsCount);
      const totalClassesCount = 10;
      setTotalClasses(totalClassesCount);
    };
    fetchStudentData();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="side-panel">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>
            <Link to="/admin/students">Students Enrolled</Link>
          </li>
          <li>
            <Link to="/admin/marks">Marks</Link>
          </li>
          <li>
            <Link to="/register">Register Student</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <h2>Welcome to Admin Dashboard!</h2>
        <div className="student-class-boxes">
          <div className="student-class-box">
            <h3>Total Students Enrolled</h3>
            <p>{totalStudents}</p>
          </div>
          <div className="student-class-box">
            <h3>Total Classes</h3>
            <p>{totalClasses}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
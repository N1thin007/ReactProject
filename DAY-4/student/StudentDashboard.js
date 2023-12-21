import React from 'react';
import { Link } from 'react-router-dom';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const assignmentsPending = 5;
  const subjectsEnrolled = ['Math', 'Science', 'History', 'English', 'Art'];

  return (
    <div className="student-dashboard">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/student/Marks">Marks</Link>
          </li>
          <li>
            <Link to="/student/Assignments">Assignments</Link>
          </li>
          <li>
            <Link to="/student/Attendance">Attendance</Link>
          </li>
          <li>
            <Link to="/student/News">News</Link>
          </li>
          <li>
            <Link to="/student/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/student/Logout">Logout</Link>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <h1>Student Dashboard</h1>
        <div className="dashboard-info">
          <div>
            <h3>Assignments Pending:</h3>
            <p>{assignmentsPending}</p>
          </div>
          <div>
            <h3>Subjects Enrolled:</h3>
            <ul>
              {subjectsEnrolled.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

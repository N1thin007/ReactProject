
import React from 'react';
import './Assignments.css';

const AssignmentsPage = () => {
  const pendingAssignments = [
    { id: 1, title: 'Assignment 1', dueDate: '2023-12-31', status: 'Pending' },
    { id: 2, title: 'Assignment 2', dueDate: '2024-01-15', status: 'Pending' },
  ];

  const upcomingAssignments = [
    { id: 3, title: 'Assignment 3', dueDate: '2024-01-30', status: 'Upcoming' },
    { id: 4, title: 'Assignment 4', dueDate: '2024-02-10', status: 'Upcoming' },
  ];

  return (
    <div className="assignments-container">
      <h2>Assignments</h2>

      <div className="assignment-box">
        <h3>Pending Assignments</h3>
        <ul>
          {pendingAssignments.map((assignment) => (
            <li key={assignment.id} className="assignment-item">
              {assignment.title} - Due Date: {assignment.dueDate} - Status: {assignment.status}
            </li>
          ))}
        </ul>
      </div>

      <div className="assignment-box">
        <h3>Upcoming Assignments</h3>
        <ul>
          {upcomingAssignments.map((assignment) => (
            <li key={assignment.id} className="assignment-item">
              {assignment.title} - Due Date: {assignment.dueDate} - Status: {assignment.status}
            </li>
          ))}
        </ul>
      </div>

      <div className="assignment-box submit-assignment-form">
        <h3>Submit Assignments</h3>
        <form>
          <input type="file" name="file" id="file" accept=".pdf,.doc,.docx" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AssignmentsPage;

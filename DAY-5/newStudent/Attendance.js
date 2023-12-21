// AttendancePage.js
import React from 'react';
import { VictoryPie } from 'victory';
import './Attendance.css';

const AttendancePage = () => {
  // Sample attendance data for subjects
  const subjectAttendance = [
    { subject: 'Math', attendedClasses: 20, totalClasses: 25 },
    { subject: 'Science', attendedClasses: 18, totalClasses: 20 },
    { subject: 'History', attendedClasses: 22, totalClasses: 24 },
    { subject: 'English', attendedClasses: 19, totalClasses: 22 },
    { subject: 'Art', attendedClasses: 17, totalClasses: 21 },
  ];

  // Calculate attendance percentage for each subject
  const calculateAttendance = (attended, total) => {
    return (attended / total) * 100;
  };

  // Prepare data for VictoryPie chart
  const pieChartData = subjectAttendance.map((subjectData) => ({
    x: subjectData.subject,
    y: calculateAttendance(subjectData.attendedClasses, subjectData.totalClasses),
  }));

  return (
    <div className="attendance-container">
      <h2>Attendance</h2>
      <div className="attendance-box">
        {subjectAttendance.map((subjectData) => (
          <p key={subjectData.subject}>
            <span>{subjectData.subject}:</span> {subjectData.attendedClasses} / {subjectData.totalClasses} classes attended
          </p>
        ))}
      </div>
      <div style={{ width: '300px', height: '300px', margin: '20px auto' }}>
        <VictoryPie
          data={pieChartData}
          colorScale={['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#8B008B']}
          innerRadius={100}
          labels={({ datum }) => `${datum.x}\n${datum.y.toFixed(2)}%`}
        />
      </div>
    </div>
  );
};

export default AttendancePage;

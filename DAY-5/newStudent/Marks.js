
import React from 'react';
import './Marks.css';
const MarksPage = () => {
  const studentMarks = [
    { subject: 'Mathematics', marks: 85, grade: 'A' },
    { subject: 'Science', marks: 78, grade: 'B+' },
    { subject: 'History', marks: 92, grade: 'A+' },
    { subject: 'English', marks: 80, grade: 'A-' },
    { subject: 'Art', marks: 88, grade: 'A' },
  ];

  return (
    <div>
      <h2 style={{marginLeft:'30px'}}>Marks</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {studentMarks.map((item, index) => (
            <tr key={index}>
              <td>{item.subject}</td>
              <td>{item.marks}</td>
              <td>{item.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarksPage;

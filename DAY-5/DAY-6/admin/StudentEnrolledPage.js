import React from 'react';
import { VictoryPie } from 'victory';

const StudentsEnrolledPage = () => {
  const data = [
    { x: 'Class 6', y: 80 }, 
    { x: 'Class 7', y: 20 }, 
    { x: 'Class 8', y: 50 },
    { x: 'Class 9', y: 70 },
    { x: 'Class 10', y: 30 },
  ];

  return (
    <div>
    <h2 style={{marginLeft: '20px',}}>Student Enrollment</h2>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '650px' }}>
        <div style={{ width: '500px', height: '400px' }}>
          <VictoryPie
            data={data}
            colorScale={['#FF6384', '#36A2EB']}
            innerRadius={100}
            padding={50}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentsEnrolledPage;

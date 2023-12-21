import React from 'react';
import { VictoryBar, VictoryPie, VictoryChart } from 'victory';

const MarksPage = () => {
  const barChartData = [
    { subject: 'Math', score: 90 },
    { subject: 'Science', score: 85 },
    { subject: 'History', score: 70 },
    { subject: 'English', score: 95 },
    { subject: 'Art', score: 80 },
  ];

  const pieChartData = [
    { x: 'Pass', y: 70 },
    { x: 'Fail', y: 30 },
  ];

  return (
    <div>
    <h1 style={{marginLeft:'30px'}}>Result Analysis</h1>
    <div style={{ textAlign: 'center' ,paddingTop:'50px'}}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h3>Average Marks</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '400px', height: '500px', marginRight: '20px' }}>
            <VictoryChart domainPadding={20}>
              <VictoryBar
                data={barChartData}
                x="subject"
                y="score"
                style={{ data: { fill: '#FF6384' } }}
                alignment="middle"
              />
            </VictoryChart>
          </div>
          <div style={{ width: '400px', height: '500px' }}>
            <VictoryPie
              data={pieChartData}
              colorScale={['#FF6384', '#36A2EB']}
              innerRadius={100}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MarksPage;

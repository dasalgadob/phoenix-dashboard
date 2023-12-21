'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Card, Col, Row, Divider, Typography } from 'antd';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Air', 'Ground', 'Intl'],
  datasets: [
    {
      label: ' ',
      data: [9275, 55560, 477 ],
      backgroundColor: [
        'rgba(20, 20, 184, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(29, 29, 184, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Spend_by_service_type = () => {
 
  const options = {
    maintainAspectRatio: false, 
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        padding: 0,
        onClick: () => false,
      },
    },
    layout: {
      padding: {
        right: 180,
      },
    },
  };

  return (
    <>  
    <Row>
    <Col span={24}>
        <Card style={{
                margin: 10,
                borderRadius: '12px',
              }}>
                <Doughnut height={400} data={data} options={options} />  
        </Card>
      </Col>
      </Row>
    </>
  )
};

export default Spend_by_service_type;
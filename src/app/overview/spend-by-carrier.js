'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Card, Col, Row, Divider, Typography } from 'antd';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

const { Title } = Typography;

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [ 'FedEx', 'UPS'],
  datasets: [
    {
      label: ' ',
      data: [ 83, 17],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(239, 184, 16, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


const Spend_by_carrier = () => {

  const options = {
    maintainAspectRatio: false, 
    responsive: true,
  };


  return (
  <>  
  <Row>
  <Col span={24}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
            }}>
              <Row>
              <Col span={12}>
              <Doughnut height={350} data={data} options={options} />
              </Col>
              <Col span={12}>
                <Row>
                <Card style={{
                              margin: 10,
                              borderRadius: '12px',
                             }}>
                               <p style={{ fontWeight: 'bold', margin: 0, fontSize: '18px'}}>FedEx       83% </p>
                               <Title level={1} style={{
                                                        fontWeight: 'bold',
                                                        margin: 0,
                                                       }}>$54,506</Title>
                 </Card>
                 <Divider></Divider>
                 <Card style={{
                              margin: 10,
                              borderRadius: '12px',
                             }}>
                               <p style={{ fontWeight: 'bold', margin: 0, fontSize: '18px'}}>UPS       17% </p>
                               <Title level={1} style={{
                                                        fontWeight: 'bold',
                                                        margin: 0,
                                                       }}>$10,807</Title>
                 </Card>
                </Row>
              </Col>
              </Row>
      </Card>
    </Col>
    </Row>
  </>
  )

};

export default Spend_by_carrier;
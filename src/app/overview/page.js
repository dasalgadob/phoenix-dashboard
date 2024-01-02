'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Button } from 'antd';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { faker } from '@faker-js/faker';
import { Col, Row, Select, Divider, Tabs, Space, Card, Typography } from 'antd';
import Last_12_months_shipping_spend from './last-12-months-shipping-spend';

ChartJS.register(ArcElement, Tooltip, Legend);


const { Title } = Typography;

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

export const data2 = {
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

const Home = () => {
  
  const options = {
    maintainAspectRatio: false, 
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        onClick: () => false,
      },
    },
  };

  const options2 = {
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
    <Row justify="center" align="middle">
    <Space size={16}>
    <Button type="primary">LAST 12 MONTHS</Button>
    <Button type="primary">YEAR TO DATE</Button>
    <Button type="primary">DATE RANGE</Button>
    <Button type="primary">CURRENT MONTH</Button>
    </Space>
    </Row>

    <Divider></Divider>
    
    <Title level={3} style={{
              fontWeight: 'bold',
              margin: 0,
            }}>Shipping Metrics</Title>
    <Row>
    <Col span={8}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
            }}>
              <p style={{ fontWeight: 'bold', margin: 0, }}>Shipping Spend</p>
        <Title level={2} style={{
              fontWeight: 'bold',
              margin: 0,
            }}>$65,313</Title>
      </Card>
    </Col>
    <Col span={8}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
            }}>
              <p style={{ fontWeight: 'bold', margin: 0, }}># of Shipments</p>
        <Title level={2} style={{
              fontWeight: 'bold',
              margin: 0,
            }}>3,249</Title>
      </Card>
    </Col>
    <Col span={8}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
            }}>
              <p style={{ fontWeight: 'bold', margin: 0, }}>Average Cost</p>
        <Title level={2} style={{
              fontWeight: 'bold',
              margin: 0,
            }}>$20.10</Title>
      </Card>
    </Col>
  </Row>

  
  <Row>
  <Col span={8}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
            }}>
              <p style={{ fontWeight: 'bold', margin: 0, }}>Average Weight</p>
        <Title level={2} style={{
              fontWeight: 'bold',
              margin: 0,
            }}>16.3lbs.</Title>
      </Card>
    </Col>
    <Col span={8}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
            }}>
              <p style={{ fontWeight: 'bold', margin: 0, }}>Money Refunded</p>
        <Title level={2} style={{
              fontWeight: 'bold',
              margin: 0,
            }}>$3,954</Title>
      </Card>
    </Col>
    <Col span={8}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
            }}>
              <p style={{ fontWeight: 'bold', margin: 0, }}>Number of Refunds</p>
        <Title level={2} style={{
              fontWeight: 'bold',
              margin: 0,
            }}>48</Title>
      </Card>
    </Col>
  </Row>

  <Divider></Divider>

  <Row>
  <Col span={12}>  
  <Title level={3} style={{
              fontWeight: 'bold',
              margin: 0,
            }}>Shipping Spend by Carrier</Title>
  </Col>
  <Col span={12}>  
  <Title level={3} style={{
              fontWeight: 'bold',
              margin: 0,
            }}>Shipping Spend by Service Type</Title>
  </Col>
  </Row>         
  <Row>
  <Col span={12}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
            }}>
              <Row>
              <Col span={12}>
              <Doughnut height={400} data={data} options={options} />
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
    
    <Col span={12}>
        <Card style={{
                margin: 10,
                borderRadius: '12px',
              }}>
                <Doughnut height={400} data={data2} options={options2} />  
        </Card>
      </Col>
      </Row>
    

    <Divider></Divider>

    <Title level={3} style={{
              fontWeight: 'bold',
              margin: 0,
            }}>Maps</Title>

    <Divider></Divider>
    <div className="App">
    <Button type="primary">Maps</Button>
  </div>  

  <Divider></Divider>      

    <Tabs
    defaultActiveKey="1"
    items={[
      
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Last 12 Months Shipping Spend</span>,
        key: '5',
        children: <Last_12_months_shipping_spend />,
      },
    ]}
  />
  <Divider></Divider>  
  <div className="App">
    <Button type="primary">overview</Button>
  </div>
  </>
)  
}

export default Home;
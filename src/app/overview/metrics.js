'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Card, Col, Row, Divider, Typography } from 'antd';

const { Title } = Typography;

const Metrics = () => {

  return (
  <>   
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
</>
  )
};

export default Metrics;
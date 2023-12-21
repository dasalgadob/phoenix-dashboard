'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Button } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Col, Row, Divider, Tabs } from 'antd';
import Metrics from './metrics';
import Spend_by_carrier from './spend-by-carrier';
import Spend_by_service_type from './spend-by-service-type';
import Maps from './maps';
import Last_12_months_shipping_spend from './last-12-months-shipping-spend';




const Home = () => {
  
  return (
  <>
    <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Metrics</span>,
        key: '1',
        children: <Metrics />,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Spend by Carrier</span>,
        key: '2',
        children: <Spend_by_carrier />,
        //disabled: true,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Spend by Service Type</span>,
        key: '3',
        children: <Spend_by_service_type />,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Maps</span>,
        key: '4',
        children: <Maps />,
      },
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
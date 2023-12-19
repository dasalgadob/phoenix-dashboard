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
import Last_12_months_shipping_spend from './last-12-months-shipping-spend';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const Home = () => {
  
  return (
  <>
    <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'Metrics',
        key: '1',
        children: <Metrics />,
      },
      {
        label: 'Spend by Carrier',
        key: '2',
        children: <Spend_by_carrier />,
        //disabled: true,
      },
      {
        label: 'Spend by Service Type',
        key: '3',
        children: 'Tab 3',
      },
      {
        label: 'Maps',
        key: '4',
        children: 'Tab 4',
      },
      {
        label: 'Last 12 Months Shipping Spend',
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
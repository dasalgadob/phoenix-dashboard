'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Button, Tabs, Divider } from 'antd';
import Shipping_Spend from './shiping-spend';
import Service_Type_Breakout from './service-type-breakout';
import Shipments_By_Zone from './shipments-by-zone';

const Home = () => {

  return (
 <>

  <Tabs
    defaultActiveKey="1"
    items={[
      
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '20px' }}> Shipping Spend</span>,
        key: '1',
        children: <Shipping_Spend />,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '20px' }}> Service Type Breakout</span>,
        key: '2',
        children: <Service_Type_Breakout />,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '20px' }}>  Shipments by Zone</span>,
        key: '3',
        children: <Shipments_By_Zone />,
      },
    ]}
  />
  
  <Divider></Divider>

  </>
  )
};

export default Home;
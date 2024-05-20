'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Button, Tabs, Divider } from 'antd';
import Refunds from './refunds';
import Lost_Damaged from './lost-damaged';

const Home = () => {

  return (
 <>

  <Tabs
    defaultActiveKey="1"
    
    items={[
      
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '20px' }}> Refunds</span>,
        key: '1',
        children: <Refunds />,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '20px' }}> Lost & Damaged</span>,
        key: '2',
        children: <Lost_Damaged />,
      },
    ]}
  />
  
  <Divider></Divider>

  </>
  )
};

export default Home;
'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Button, Tabs, Divider } from 'antd';
import Credentials from './credentials';
import Users from './users';
import Business from './business';
import Billing from './billing';
import Alerts from './alerts';
import Shipping_labels from './shipping-labels';

const Home = () => {

  return (
 <>

  <Tabs
    defaultActiveKey="1"
    items={[
      
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '16px' }}> Credentials</span>,
        key: '1',
        children: <Credentials />,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '16px' }}> Users</span>,
        key: '2',
        children: <Users />,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '16px' }}>  Business</span>,
        key: '3',
        children: <Business />,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '16px' }}>  Billing</span>,
        key: '4',
        children: <Billing />,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '16px' }}> Alerts</span>,
        key: '5',
        children: <Alerts />,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '16px' }}>  Shipping Labels</span>,
        key: '6',
        children: <Shipping_labels />,
      },
    ]}
  />
  
  <Divider></Divider>

  </>
  )
};

export default Home;
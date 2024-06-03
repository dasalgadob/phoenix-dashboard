'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Button, Tabs, Divider } from 'antd';
import Credentials from './credentials';
import Add_New_Business from './add-new-business';
import Manage_Billing from './manage-billing';
import Alerts from './alerts';
import Manage_Users from './manage-users';
import Manage_Profile from './manage-profile';

const Home = () => {

  return (
 <>

  <Tabs
    defaultActiveKey="1"
    items={[
      
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '20px' }}> Credentials</span>,
        key: '1',
        children: <Credentials />,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Add New Business</span>,
        key: '2',
        children: <Add_New_Business />,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '20px' }}> Manage Profile</span>,
        key: '3',
        children: <Manage_Profile />,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '20px' }}>  Manage Users</span>,
        key: '4',
        children: <Manage_Users />,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Manage Billing</span>,
        key: '5',
        children: <Manage_Billing />,
      },
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '20px' }}> Alerts</span>,
        key: '6',
        children: <Alerts />,
      },
      
    ]}
  />
  
  <Divider></Divider>

  </>
  )
};

export default Home;
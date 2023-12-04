
'use client';
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, ConfigProvider, theme, Button, Dropdown, Flex } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import Link from 'next/link'
import SubMenu from 'antd/lib/menu/SubMenu'

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


const items = [

  getItem('Overview', '1', <UserOutlined />, null),  
  getItem('Shipping Metrics', 'sub2', <UserOutlined />, [
    getItem('Spend', '3'),
    getItem('Refund', '4'),
    getItem('Breakdown', '5'),
    getItem('Map', '6'),
  ]),
  getItem('Refunds', 'sub3', <UserOutlined />, [
    getItem('Overview', '7'),
    getItem('Breakdown', '8'),
  ]),
  getItem('Invoice', 'sub4', <UserOutlined />, [
    getItem('Invoice Report', '9'),
    getItem('Make a Payment', '10'),
    getItem('Credit Cards', '11'),
    getItem('Payment History', '12'),
  ]),
  getItem('Premium', 'sub5', <UserOutlined />, [
    getItem('Overview', '13'),
    getItem('Lost & Damaged', '14'),
  ]),
  getItem('Shipping', 'sub6', <UserOutlined />, [
    getItem('Create Label', '15'),
    getItem('View Labels', '16'),
    getItem('Reports', '17'),
    getItem('Vendors', '18'),
    getItem('Labels in Queue', '19'),
    getItem('B3p', '20'),
  ]),
  getItem('Marketplace', 'sub7', <UserOutlined />, [
    getItem('Products', '15'),
  ]),
];


export default function RootLayout({
  children,
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      })
  };
 
useEffect(() => {
  asyncFetch()
}, []);
  return (

    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#597ef7',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
    }}
  >

 

    <html lang="en">
      <body>
      <Layout
      style={{
        minHeight: '100vh',
      }}
    >

      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <div className='logo' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <img src={'/71lbs_logo.jpg'} style={{borderRadius: '50%'}} width={90} />
          </div>

        <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" >
        <Menu.Item key='1'><Link href="/overview">Overview</Link></Menu.Item>
        <SubMenu key='sub1' title='Shipping Metrics'>
        <Menu.Item key='2'><Link href="/shipping-metrics/spend">Spend</Link></Menu.Item>
        <Menu.Item key='3'><Link href="/shipping-metrics/refund">Refund</Link></Menu.Item>
        <Menu.Item key='4'><Link href="/shipping-metrics/breakdown">Breakdown</Link></Menu.Item>
        <Menu.Item key='5'><Link href="/shipping-metrics/map">Map</Link></Menu.Item>

        </SubMenu>
        <SubMenu key='sub2' title='Refunds'>
        <Menu.Item key='6'><Link href="/refunds/overview">Overview</Link></Menu.Item>
        <Menu.Item key='7'><Link href="/refunds/breakdown">Breakdown</Link></Menu.Item>
        </SubMenu>

        <SubMenu key='sub3' title='Invoice'>
        <Menu.Item key='8'><Link href="/invoice/invoice-report">Invoice report</Link></Menu.Item>
        <Menu.Item key='9'><Link href="/invoice/make-a-payment">Make a payment</Link></Menu.Item>
        <Menu.Item key='10'><Link href="/invoice/credit-cards">Credit cards</Link></Menu.Item>
        <Menu.Item key='11'><Link href="/invoice/payment-history">Payment history</Link></Menu.Item>
        </SubMenu>

        <SubMenu key='sub4' title='Premium'>
        <Menu.Item key='12'><Link href="/premium/overview">Overview</Link></Menu.Item>
        <Menu.Item key='13'><Link href="/premium/last-&-damaged">Last & damaged</Link></Menu.Item>
        </SubMenu> 
        
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: 'colorBgContainer',
          }}
        />
        <Content
          style={{
            margin: '0 0px',
            border: '1rem solid #597ef7',
            background: '#597ef7',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
              background: '#597ef7',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>B18ED48633</Breadcrumb.Item>
          </Breadcrumb>
          
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: 'white',
              borderRadius: '20px',
            }}
          >
          {children}

          </div>
        </Content>
      </Layout>
    </Layout>
      </body>
    </html>
    </ConfigProvider>
  )
}
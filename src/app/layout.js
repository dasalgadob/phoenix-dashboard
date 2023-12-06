
'use client';
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, ConfigProvider, theme, Button, Dropdown, Flex } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import Link from 'next/link'
import SubMenu from 'antd/lib/menu/SubMenu'
import { Typography } from 'antd';

const { Title } = Typography;

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
        <Menu.Item key='1'><Link href="/overview"><Title level={5} style={{ color: '#ffffff' }}>Overview</Title></Link></Menu.Item>
        <SubMenu key='sub1' title= {<Title level={5} style={{ color: '#ffffff' }}>Shipping Metrics</Title>}>
        <Menu.Item key='2'><Link href="/shipping-metrics/spend"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Spend</Title></Link></Menu.Item>
        <Menu.Item key='3'><Link href="/shipping-metrics/refund"><Title level={5} style={{ color: '#ffffff', marginBottom: 31  }}>Refund</Title></Link></Menu.Item>
        <Menu.Item key='4'><Link href="/shipping-metrics/breakdown"><Title level={5} style={{ color: '#ffffff', marginBottom: 31  }}>Breakdown</Title></Link></Menu.Item>
        <Menu.Item key='5'><Link href="/shipping-metrics/map"><Title level={5} style={{ color: '#ffffff', marginBottom: 31    }}>Map</Title></Link></Menu.Item>

        </SubMenu>
        <SubMenu key='sub2' title= {<Title level={5} style={{ color: '#ffffff' }}>Refunds</Title>}>
        <Menu.Item key='6'><Link href="/refunds/overview"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Overview</Title></Link></Menu.Item>
        <Menu.Item key='7'><Link href="/refunds/breakdown"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Breakdown</Title></Link></Menu.Item>
        </SubMenu>

        <SubMenu key='sub3' title= {<Title level={5} style={{ color: '#ffffff' }}>Invoice</Title>}>
        <Menu.Item key='8'><Link href="/invoice/invoice-report"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Invoice report</Title></Link></Menu.Item>
        <Menu.Item key='9'><Link href="/invoice/make-a-payment"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Make a payment</Title></Link></Menu.Item>
        <Menu.Item key='10'><Link href="/invoice/credit-cards"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Credit cards</Title></Link></Menu.Item>
        <Menu.Item key='11'><Link href="/invoice/payment-history"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Payment history</Title></Link></Menu.Item>
        </SubMenu>

        <SubMenu key='sub4' title= {<Title level={5} style={{ color: '#ffffff' }}>Premium</Title>}>
        <Menu.Item key='12'><Link href="/premium/overview"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Overview</Title></Link></Menu.Item>
        <Menu.Item key='13'><Link href="/premium/last-&-damaged"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Last & damaged</Title></Link></Menu.Item>
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

'use client';
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, ConfigProvider, theme, Button, Dropdown, Flex, Col, Row } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import Link from 'next/link'
import SubMenu from 'antd/lib/menu/SubMenu'
import { Typography } from 'antd';
import { usePathname } from "next/navigation"

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

  const pathname = usePathname()

  const isNotLoggedIn = pathname === "/"
 
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
        colorBgContainer: '#F2F3F4',
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
      {!isNotLoggedIn && 
      
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={210}>
        <div className="demo-logo-vertical" />
        <div className='logo' style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <img src={'/71lbs_logo.jpg'} style={{borderRadius: '50%'}} width={90} />
          </div>

        <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" >
        <Menu.Item key='1'><Link href="/overview"><Title level={5} style={{ color: '#ffffff', marginBottom: 31  }}>Overview</Title></Link></Menu.Item>
        <SubMenu key='sub1' title= {<Title level={5} style={{ color: '#ffffff', marginBottom: 31  }}>Shipping Metrics</Title>}>
        <Menu.Item key='2'><Link href="/shipping-metrics/spend"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Spend</Title></Link></Menu.Item>
        <Menu.Item key='3'><Link href="/shipping-metrics/refund"><Title level={5} style={{ color: '#ffffff', marginBottom: 31  }}>Refund</Title></Link></Menu.Item>
        <Menu.Item key='4'><Link href="/shipping-metrics/breakdown"><Title level={5} style={{ color: '#ffffff', marginBottom: 31  }}>Breakdown</Title></Link></Menu.Item>
        <Menu.Item key='5'><Link href="/shipping-metrics/map"><Title level={5} style={{ color: '#ffffff', marginBottom: 31    }}>Map</Title></Link></Menu.Item>
        </SubMenu>
        
        <SubMenu key='sub2' title= {<Title level={5} style={{ color: '#ffffff', marginBottom: 31  }}>Carrier Invoice</Title>}>
        <Menu.Item key='6'><Link href="/carrier-invoice/fedex-invoice"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>FedEx Invoice</Title></Link></Menu.Item>
        <Menu.Item key='7'><Link href="/carrier-invoice/ups-invoice"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>UPS Invoice</Title></Link></Menu.Item>
        </SubMenu>

        
        <SubMenu key='sub3' title= {<Title level={5} style={{ color: '#ffffff', marginBottom: 31  }}>Refunds</Title>}>
        <Menu.Item key='8'><Link href="/refunds/overview"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Overview</Title></Link></Menu.Item>
        <Menu.Item key='9'><Link href="/refunds/breakdown"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Breakdown</Title></Link></Menu.Item>
        </SubMenu>

        <SubMenu key='sub4' title= {<Title level={5} style={{ color: '#ffffff', marginBottom: 31  }}>Billing</Title>}>
        <Menu.Item key='10'><Link href="/billing/invoice-report"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Invoice Report</Title></Link></Menu.Item>
        <Menu.Item key='11'><Link href="/billing/payments"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Payments</Title></Link></Menu.Item>
        <Menu.Item key='12'><Link href="/billing/payment-methods"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Payment Methods</Title></Link></Menu.Item>
        <Menu.Item key='13'><Link href="/billing/payment-history"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Payment History</Title></Link></Menu.Item>
        </SubMenu>

        <SubMenu key='sub5' title= {<Title level={5} style={{ color: '#ffffff', marginBottom: 31  }}>Premium</Title>}>
        <Menu.Item key='14'><Link href="/premium/cn-savings"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>CN Savings</Title></Link></Menu.Item>
        <Menu.Item key='15'><Link href="/premium/b3p-savings"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>B3P Savings</Title></Link></Menu.Item>
        <Menu.Item key='16'><Link href="/premium/shipping-fraud"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Shipping Fraud</Title></Link></Menu.Item>
        <Menu.Item key='17'><Link href="/premium/gl-coding"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}> G/L Coding</Title></Link></Menu.Item>
        </SubMenu> 
        
        <SubMenu key='sub6' title= {<Title level={5} style={{ color: '#ffffff', marginBottom: 31  }}>Shipping</Title>}>
          <SubMenu key='sub7' title= {<Title level={5} style={{ color: '#ffffff', marginBottom: 31  }}>Labels</Title>}>
            <Menu.Item key='18'><Link href="/shipping/labels/create-label"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Create label</Title></Link></Menu.Item>
            <Menu.Item key='19'><Link href="/shipping/labels/label-history"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Label History</Title></Link></Menu.Item>
            <Menu.Item key='20'><Link href="/shipping/labels/queue"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Queue</Title></Link></Menu.Item>
          </SubMenu>
          <Menu.Item key='21'><Link href="/shipping/bill-to-3rd-party"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Bill to 3rd Party</Title></Link></Menu.Item>
          <Menu.Item key='22'><Link href="/shipping/reports"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Reports</Title></Link></Menu.Item>
        </SubMenu>

        
        
        <Menu.Item key='23'><Link href="/settings"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Settings</Title></Link></Menu.Item>
        <Menu.Item key='24'><Link href="/help"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Help</Title></Link></Menu.Item>

        </Menu>
      </Sider>

      }
      
      <Layout>
        <Header
          style={{
            padding: 0,
            background: 'colorBgContainer',
          }}   
        >
          <Row>
          <Col span={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2px' }}>
          {isNotLoggedIn &&
            <img src={'/71lbs_logo.jpg'} style={{ width: '50px' }} />
          }
          </Col>
          <Col span={17} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '2px' }}></Col>
          <Col span={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '2px' }}>  
          {isNotLoggedIn &&
          <div>
          <Button type="primary" style={{ marginRight: '16px' }}>Sign Up</Button>
          <Button type="primary">Log In</Button>
          </div>
          }
          </Col>
          </Row>
          
        
        
        </Header>  
        <Content
          style={{
            margin: '0 0px',
            border: '1rem solid #597ef7',
            background: '#597ef7',
          }}
        >
          {/*
          {!isNotLoggedIn &&
          <Breadcrumb
            style={{
              margin: '16px 0',
              background: '#597ef7',
            }}
          >
            
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>B18ED48633</Breadcrumb.Item>
          </Breadcrumb>
          }
          */}
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: 'white',
              borderRadius: '20px',
              overflow: 'auto',
              height: '90vh',
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
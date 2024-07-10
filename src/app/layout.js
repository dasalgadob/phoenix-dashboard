
'use client';
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, ConfigProvider, theme, Button, Dropdown, Flex, Col, Row } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import Link from 'next/link'
import SubMenu from 'antd/lib/menu/SubMenu'
import { Typography, Avatar, Tooltip, Badge } from 'antd';
import { usePathname } from "next/navigation"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { useSearchParams, useRouter } from 'next/navigation'

const { Title } = Typography;

import {
  DownOutlined,
  PoweroffOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BellOutlined
} from '@ant-design/icons';
import { Providers } from './providers';

const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items = [
  {
    label: '1st alert',
    key: '1',
    icon: <BellOutlined />,
  },
  {
    label: '2nd alert',
    key: '2',
    icon: <BellOutlined />,
  },

];

const menuProps = {
  items,
  onClick: handleMenuClick,
}



const queryClient = new QueryClient()

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

  const searchParams = useSearchParams()
  const tokenURL = searchParams.get('token')
  if (tokenURL){
    console.log('tokenURL')
    console.log(tokenURL)
    window?.localStorage?.setItem('login-token', tokenURL)
  }

  const isNotLoggedIn = pathname === "/"

  const [message, setMessage] = useState(null);
  let token = ''

  useEffect(() => {
    console.log('useEffect')
    if (typeof window !== 'undefined') {
      console.log('run fetch')
      token = window?.localStorage?.getItem('login-token')
      console.log(token)
    fetch("http://ec2-44-202-145-148.compute-1.amazonaws.com/api-queries/user", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.data[0]);
        console.log(data);
      })
      .catch((error) => console.log(error));
    }

    asyncFetch()
  }, []);

  return (
    <AntdRegistry
      style={{
        minHeight: '100vh',
      }}
    >
      <Providers>
        <QueryClientProvider client={queryClient}>

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
              <body style={{ overflow: 'hidden', margin: '0px' }}>
                <Layout
                  style={{
                    minHeight: '100vh',
                  }}
                >
                  {!isNotLoggedIn &&

                    <Sider /*collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}*/ width={210} style={{
                      minHeight: '100vh',
                    }}>
                      <div className="demo-logo-vertical" />
                      <div className='logo' style={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px',
                        marginBottom: '20px'
                      }} >
                        <img src={'/71lbs_logo.jpg'} style={{ borderRadius: '50%' }} width={80} />
                      </div>

                      <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" >
                        <Menu.Item key='1'><Link href="/at-a-glance"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>At A Glance</Title></Link></Menu.Item>
                        <SubMenu key='sub1' title={<Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Shipping Metrics</Title>}>
                          <Menu.Item key='2'><Link href="/shipping-metrics/spend"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Spend</Title></Link></Menu.Item>
                          <Menu.Item key='3'><Link href="/shipping-metrics/refund"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Refund</Title></Link></Menu.Item>
                          {/*
        <Menu.Item key='5'><Link href="/shipping-metrics/map"><Title level={5} style={{ color: '#ffffff', marginBottom: 31    }}>Map</Title></Link></Menu.Item>
        */}
                        </SubMenu>

                        <SubMenu key='sub2' title={<Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Carrier Invoice</Title>}>
                          <Menu.Item key='6'><Link href="/carrier-invoice/fedex-invoice"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>FedEx Invoice</Title></Link></Menu.Item>
                          <Menu.Item key='7'><Link href="/carrier-invoice/ups-invoice"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>UPS Invoice</Title></Link></Menu.Item>
                        </SubMenu>


                        <SubMenu key='sub3' title={<Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Refunds</Title>}>
                          <Menu.Item key='8'><Link href="/refunds/overview"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Overview</Title></Link></Menu.Item>
                          <Menu.Item key='9'><Link href="/refunds/breakdown"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Breakdown</Title></Link></Menu.Item>
                        </SubMenu>

                        <SubMenu key='sub4' title={<Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Invoice</Title>}>
                          <Menu.Item key='10'><Link href={`https://stg.71lbs.com/businesses/${message && message.user.businesses[0].sid}/invoices`}><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Invoice Report</Title></Link></Menu.Item>
                          <Menu.Item key='11'><Link href={`https://stg.71lbs.com/businesses/${message && message.user.businesses[0].sid}/billings`}><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Payments</Title></Link></Menu.Item>
                          <Menu.Item key='12'><Link href={`https://stg.71lbs.com/businesses/${message && message.user.businesses[0].sid}/billings/credit_cards`}><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Payment Methods</Title></Link></Menu.Item>
                          <Menu.Item key='13'><Link href={`https://stg.71lbs.com/businesses/${message && message.user.businesses[0].sid}/billings/payment_history`}><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Payment History</Title></Link></Menu.Item>
                        </SubMenu>

                        <SubMenu key='sub5' title={<Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Premium</Title>}>
                          {message && message.payload.businesses[0].available_services.premium.lost_and_damaged && <Menu.Item key='14'><Link href={`https://stg.71lbs.com/businesses/${message && message.user.businesses[0].sid}/lnd_summaries`}><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Lost & Damaged</Title></Link></Menu.Item>}
                        </SubMenu>

                        <SubMenu key='sub6' title={<Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Shipping</Title>}>
                            {message && message.payload.businesses[0].available_services.shipping_labels.create_label && <Menu.Item key='14'><Link href={`https://stg.71lbs.com/businesses/${message && message.user.businesses[0].sid}/shipping_labels/create_label`}><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Create Label</Title></Link></Menu.Item>}
                            {message && message.payload.businesses[0].available_services.shipping_labels.view_labels && <Menu.Item key='14'><Link href={`https://stg.71lbs.com/businesses/${message && message.user.businesses[0].sid}/shipping_labels`}><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>View Labels</Title></Link></Menu.Item>}
                            {message && message.payload.businesses[0].available_services.shipping_labels.reports && <Menu.Item key='14'><Link href={`https://stg.71lbs.com/businesses/${message && message.user.businesses[0].sid}/shipping_labels/report`}><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Reports</Title></Link></Menu.Item>}
                            {message && message.payload.businesses[0].available_services.shipping_labels.vendors && <Menu.Item key='14'><Link href={`https://stg.71lbs.com/businesses/${message && message.user.businesses[0].sid}/shipping_labels/vendor`}><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Vendors</Title></Link></Menu.Item>}
                            {message && message.payload.businesses[0].available_services.shipping_labels.labels_in_queue && <Menu.Item key='14'><Link href={`https://stg.71lbs.com/businesses/${message && message.user.businesses[0].sid}/shipping_labels/queued`}><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>labels in Queue</Title></Link></Menu.Item>}
                            {message && message.payload.businesses[0].available_services.shipping_labels.b3p && <Menu.Item key='14'><Link href={`https://stg.71lbs.com/businesses/${message && message.user.businesses[0].sid}/shipping_labels/b3p`}><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>B3P</Title></Link></Menu.Item>}
                        </SubMenu>




                        <SubMenu key='sub8' title={<Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Settings</Title>}>
                          {/*
                          <Menu.Item key='23'><Link href="/settings"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Settings</Title></Link></Menu.Item>
                          */}
                          <Menu.Item key='24'><Link href="/settings/fedex-creds"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Fedex Creds</Title></Link></Menu.Item>
                          <Menu.Item key='25'><Link href="/settings/ups-creds"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>UPS Creds</Title></Link></Menu.Item>
                          <Menu.Item key='26'><Link href="/settings/add-new-business"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Add New business</Title></Link></Menu.Item>
                          <Menu.Item key='27'><Link href="/settings/manage-profile"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Manage Profile</Title></Link></Menu.Item>
                          <Menu.Item key='28'><Link href="/settings/manage-users"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Manage Users</Title></Link></Menu.Item>
                          <Menu.Item key='29'><Link href="/settings/manage-billing"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Manage Billing</Title></Link></Menu.Item>
                          <Menu.Item key='30'><Link href="/settings/alerts"><Title level={5} style={{ color: '#ffffff', marginBottom: 31 }}>Alerts</Title></Link></Menu.Item>
                        </SubMenu>

                      </Menu>
                    </Sider>

                  }

                  <Layout>

                    <Content
                      style={{
                        margin: '0 0px',
                        border: '1rem solid #597ef7',
                        background: '#597ef7',
                        height: '75vh',
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
                          height: '95vh',
                        }}
                      >
                        <Row>
                          <Col span={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2px' }}>
                            {isNotLoggedIn &&

                              <img src={'/71lbs_logo.jpg'} style={{ width: '50px' }} />

                            }
                          </Col>
                          <Col span={17} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '2px', marginLeft: '80px', marginBottom: '10px', marginRight: '-80px' }}>
                            {!isNotLoggedIn &&
                              <>

                                <p style={{ fontWeight: 'bold', margin: 0, fontSize: '14px', color: '' }}>{message && message.user.businesses[0].name} </p>

                                <Tooltip title="User">
                                  <Button
                                    type="primary" shape="circle" icon={<UserOutlined />}
                                    style={{ alignItems: 'center', marginTop: '6px', marginRight: '10px', marginLeft: '20px', backgroundColor: '#597ef7', cursor: 'pointer', }}
                                  />
                                </Tooltip>
                                <p style={{ fontWeight: 'bold', margin: 0, fontSize: '14px', color: '' }}>{message && message.user.user_name} </p>
                              </>
                            }
                          </Col>
                          <Col span={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '2px' }}>
                            {isNotLoggedIn &&
                              <div>
                                <Button type="primary" style={{ marginRight: '16px' }}>Sign Up</Button>
                                <Button type="primary">Log In</Button>
                              </div>
                            }
                            {!isNotLoggedIn &&
                              <>
                                {/*
                            <Badge count={2} style={{ fontSize: '10px', marginTop: '-3px', marginRight: '25px' }}>
                              <Dropdown menu={menuProps} placement="bottomCenter">
                                <BellOutlined
                                  style={{ fontSize: '24px', alignItems: 'center', marginTop: '5px', marginRight: '25px', color: '' }} />
                              </Dropdown>
                            </Badge>
                            */}
                                <Tooltip title="Logout">
                                  <Button
                                    type="primary" href="/"
                                    icon={<PoweroffOutlined />}
                                  />
                                </Tooltip>

                              </>
                            }
                          </Col>
                        </Row>
                        {children}

                      </div>
                    </Content>
                  </Layout>
                </Layout>
              </body>
            </html>
          </ConfigProvider>
        </QueryClientProvider>
      </Providers>
    </AntdRegistry>
  )
}
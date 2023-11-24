'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Button, Dropdown, Flex, Col, Row, Table  } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const columns = [
  {
    title: 'CARRIER',
    dataIndex: 'carrier',
    key: 'carrier',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'TRACKING #',
    dataIndex: 'tracking',
    key: 'tracking',
  },
  {
    title: 'SERVICE TYPE',
    dataIndex: 'serviceType',
    key: 'serviceType',
  },
  {
    title: 'SERVICE DESCRIPTION',
    dataIndex: 'serviceDescription',
    key: 'serviceDescription',
  },
  {
    title: 'SHIPPED ON',
    dataIndex: 'shippedOn',
    key: 'shippedOn',
  },
  {
    title: 'DELIVERED ON',
    dataIndex: 'deliveredOn',
    key: 'deliveredOn',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'CLAIM STATUS',
    dataIndex: 'claimStatus',
    key: 'claimStatus',
  },
  {
    title: 'test ',
    dataIndex: 'configTable',
    key: 'configTable',
    render: () => 
    <Button type="primary">Test</Button>
  },
];

const datatable = [
  {
    key: '1',
    carrier: 'FedEx',
    tracking: 786222625440,
    serviceType: 'Ground',
    serviceDescription: 'Home delivery',
    shippedOn: '11/08/23',
    deliveredOn: '11/10/23',
    status: 'Unprocessed',
    claimStatus: 'Unprocessed',
  },
  {
    key: '2',
    carrier: 'UPS',
    tracking: 786222403510,
    serviceType: 'Air',
    serviceDescription: 'Ground',
    shippedOn: '11/08/23',
    deliveredOn: '11/10/23',
    status: 'Unprocessed',
    claimStatus: 'Unprocessed',
  },
  {
    key: '3',
    carrier: 'FedEx',
    tracking: 786192785165,
    serviceType: 'Ground',
    serviceDescription: 'Home delivery',
    shippedOn: '11/08/23',
    deliveredOn: '11/10/23',
    status: 'Unprocessed',
    claimStatus: 'Unprocessed',
  },
];

const Home = () => {

return (

          <Row style={{marginTop: 40}}>
          <Col span={24}><Table columns={columns} dataSource={datatable} /></Col>
          </Row>

);
};

export default Home;
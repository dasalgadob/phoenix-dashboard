'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Button, Dropdown, Flex, Col, Row, Table  } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const columns = [
  {
    title: 'ACCOUNT',
    dataIndex: 'account',
    key: 'account',
  },
  {
    title: 'CARRIER',
    dataIndex: 'carrier',
    key: 'carrier',
    filters: [
      {
        text: 'FedEx',
        value: 'FedEx',
      },
      {
        text: 'UPS',
        value: 'UPS',
      },
        ],
        onFilter: (value, record) => record.carrier.indexOf(value) === 0,
  },
  {
    title: 'TRACKING #',
    dataIndex: 'tracking',
    key: 'tracking',
  },
  {
    title: 'REFUND TYPE',
    dataIndex: 'refundType',
    key: 'refundType',
  },
  {
    title: 'INVOICE #',
    dataIndex: 'invoice',
    key: 'invoice',
  },
  {
    title: 'POSTED DATE',
    dataIndex: 'postedDate',
    key: 'postedDate',
  },
  {
    title: 'POSTED CREDIT',
    dataIndex: 'postedCredit',
    key: 'postedCredit',
  },
];

const datatable = [
  {
    key: '1',
    account: '632968639',
    carrier: 'FedEx',
    tracking: 786192030619,
    refundType: 'Money Back Guarantee',
    invoice: '833186999',
    postedDate: '12/03/2023',
    postedCredit: '$20.38',
  },
  {
    key: '2',
    account: '374100572',
    carrier: 'FedEx',
    tracking: 786500613862,
    refundType: 'Money Back Guarantee',
    invoice: '833231624',
    postedDate: '12/03/2023',
    postedCredit: '$9.29',
  },
  {
    key: '3',
    account: '374100572',
    carrier: 'UPS',
    tracking: 785089765720,
    refundType: 'Money Back Guarantee',
    invoice: '831819732',
    postedDate: '11/30/2023',
    postedCredit: '$30.50',
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};


const Home = () => {

return (

          <Row style={{marginTop: 40}}>
          <Col span={24}><Table columns={columns} dataSource={datatable} /></Col>
          </Row>

);
};

export default Home;
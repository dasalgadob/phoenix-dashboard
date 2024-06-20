'use client'; // If used in Pages Router, is no need to add "use client"

import React , { useState, useEffect } from 'react';

import { Breadcrumb, Layout, Menu, theme, Button, Dropdown, Flex, Col, Row, Table, Tooltip,  } from 'antd';

import {
  CheckOutlined,
  SwapOutlined,
  SettingOutlined
  
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const columns = [
  {
    title: 'CARRIER',
    dataIndex: 'carrier',
    key: 'carrier',
    render: (text) => <a>{text}</a>,
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
        sorter: (a, b) => a.carrier.length - b.carrier.length,
        sortDirections: ['descend'],    
  },

  {
    title: 'ACCOUNT',
    dataIndex: 'account',
    key: 'account',
  },
  {
    title: 'INVOICE #',
    dataIndex: 'invoice',
    key: 'invoice',
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
    title: 'POSTED CREDIT',
    dataIndex: 'postedCredit',
    key: 'postedCredit',
  },
  {
    title: 'POSTED DATE',
    dataIndex: 'postedDate',
    key: 'deliveredOn',
  },
  {
    title: 'SOURCE',
    dataIndex: 'source',
    key: 'source',
  },
  {
    title: 'MONTH OF REFUNDS',
    dataIndex: 'monthOfRefunds',
    key: 'monthOfRefunds',
  },
  {
    title: ' ',
    dataIndex: 'configTable',
    key: 'configTable',
    render: () => 
    <Tooltip title="Shipments details" placement="left" >
      <Button
        type="primary" shape="default" icon={<SettingOutlined />}
        size="small"
        style={{ alignItems: 'center', marginRight: '3px', marginLeft: '10px', backgroundColor: '#339CFF',cursor: 'pointer', }}
      />
    </Tooltip>
  },
];

const datatable = [
  {
    key: '1',
    carrier: 'FedEx',
    account: '632968639',
    invoice: '852840250',
    tracking: 786222625440,
    refundType: 'Lost or damaged',
    postedCredit: '$8.56',
    postedDate: '11/10/23',
    source: '71lbs-Script',
    monthOfRefunds: 'Unprocessed',
  },
  {
    key: '2',
    carrier: 'UPS',
    account: '374100572',
    invoice: '852090912',
    tracking: 786222403510,
    refundType: 'Lost or damaged',
    postedCredit: '$9.30',
    postedDate: '11/10/23',
    source: '71lbs-Script',
    monthOfRefunds: 'Unprocessed',
  },
  {
    key: '3',
    carrier: 'FedEx',
    account: '374100572',
    invoice: '850774623',
    tracking: 786192785165,
    refundType: 'MBG',
    postedCredit: '$111.78',
    postedDate: '11/10/23',
    source: '71lbs-Script',
    monthOfRefunds: 'Unprocessed',
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};


const Home = () => {

  const [breakdownData, setBreakdownData] =useState([])

  

  useEffect(() => {
    getData()
  }, []);


  const getData = () => {
    fetch(`http://ec2-44-202-145-148.compute-1.amazonaws.com/api-queries/refunds/breakdown/65/?type_search=`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setBreakdownData([].concat(data.data[0].table).map(e => ({carrier: e[0], account: e[1], invoice: e[2],
                                                                   tracking: e[3], refundType: e[4], postedCredit: e[5],
                                                                   postedDate: e[6], source: e[7], monthOfRefunds: e[8],
                                                                  })))

        
        
        
      })
      .catch((error) => console.log(error));
    
  }

   console.log(breakdownData)

return (

          <Row style={{marginTop: 40}}>
          <Col span={24}><Table columns={columns} dataSource={breakdownData} size='small' /></Col>
          </Row>

);
};

export default Home;
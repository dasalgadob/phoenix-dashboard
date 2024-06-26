'use client'; // If used in Pages Router, is no need to add "use client"

import React , { useState, useEffect } from 'react';

import { Breadcrumb, Layout, Menu, theme, Button, Dropdown, Flex, Col, Row, Table, Tooltip, Space, Form, Modal, Select  } from 'antd';

import CustomDateButtonFilter from '../../shipping-metrics/spend/custom-date-button-filter'

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

const filter = {currentMonth: 1, custom: 2, last12Months: 4, yearToDate: 3}

const Home = () => {

  const [form] = Form.useForm();

  const values = Form.useWatch([], form);

  const onFinish = (values) => {
    setIsModalOpenDateRange(false);
    form.setFieldsValue({
      serviceType: filterValue.serviceType,
    });
    console.log(values);
    console.log(filterValue);
  };

  const [filterValue, setFilterValue] =useState({})
  const [breakdownData, setBreakdownData] =useState([])
  const [filterType, setFilterType] = useState('currentMonth');
  const [account, setAccount ] = useState ([])
  const [carrier, setCarrier ] = useState ([])
  const [serviceType, setServiceType ] = useState ([])
  const [trackingNumber, setTrakingNumber ] = useState ([])
  const [isModalOpenDate, setIsModalOpenDate] = useState(false);
  const [isModalOpenDateRange, setIsModalOpenDateRange] = useState(false);
  const [valueRadio, setValueRadio] = useState(1);
  const [customDate, setCustomDate] = useState('');
  const [onOkClickCount, setOnOkClickCount] = useState(0)
 
  const showModalDateRange = () => {
    setIsModalOpenDateRange(true);
  };

  const handleOkDate = () => {
    setOnOkClickCount(onOkClickCount+1)
    setFilterType('custom')
    setIsModalOpenDate(false);
  };

  const showModalDate = () => {
    setIsModalOpenDate(true);
  };

  const handleCancelDateRange = () => {
    setIsModalOpenDateRange(false);
  };

  const handleOkDateRange = () => {
    setOnOkClickCount(onOkClickCount+1)
    setIsModalOpenDateRange(false);
  };

  const handleCancelDate = () => {
    setIsModalOpenDate(false);
  };
  
  const onChangeRadio = (e) => {
    console.log('radio checked', e.target.value);
    setValueRadio(e.target.value);
  };

  const handleChangeRefundType = (value) => {
    setFilterValue({...filterValue, refundsType: value?.value})
    console.log(value);
  };

  const handleChangeAccount = (value) => {
    setFilterValue({...filterValue, account: value?.value})
    console.log(value);
  };

  const handleChangeCarrier = (value) => {
    setFilterValue({...filterValue, carrier: value?.value})
    console.log(value);
  };

  const handleChangeServiceType = (value) => {
    setFilterValue({...filterValue, serviceType: value?.value})
    console.log(value);
  };

  const handleChangeTrackingNumber = (value) => {
    setFilterValue({...filterValue, trackingNumber: value?.value})
    console.log(value);
  };

  const onChangeDatePicker = (date, dateString) => {
    console.log( dateString);
    if (valueRadio === 1) {
      setCustomDate(`${dateString.substr(0,4)}0${dateString.substr(6,1)}`)
    } 
    else {
      setCustomDate(`${dateString.substr(0,4)}${dateString.substr(5,2)}`)
    }

  };

  useEffect(() => {
    getData()
  }, [filterType, onOkClickCount, form, , values ]);


  const getData = () => {
    fetch(`http://ec2-44-202-145-148.compute-1.amazonaws.com/api-queries/refunds/breakdown/65/?type_search=${filter[filterType]}&${valueRadio === 1 ?'quarter':'month'}_search=${customDate}&refund_type_search=${filterValue.refundsType || ''}&account_number_search=${filterValue.account || ''}&carrier_search=${filterValue.carrier || ''}&service_type_search=${filterValue.serviceType || ''}&tracking_number_search=${filterValue.trackingNumber || ''}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setBreakdownData([].concat(data.data[0].table).map(e => ({carrier: e[0], account: e[1], invoice: e[2],
                                                                   tracking: e[3], refundType: e[4], postedCredit: e[5],
                                                                   postedDate: e[6], source: e[7], monthOfRefunds: e[8],
                                                                  })))
        setAccount([].concat(data.data[0].account_numbers))
        setCarrier([].concat(data.data[0].carriers))
        setServiceType([].concat(data.data[0].service_types))
        setTrakingNumber([].concat(data.data[0].tracking_numbers))
        
        
        
      })
      .catch((error) => console.log(error));
    
  }

   console.log(breakdownData)

return (
  <>
          
          <Row justify="center" align="middle" >
           <Space size={16}>
           <Button type="primary" onClick={() => setFilterType('currentMonth')}
                           style={filterType === 'currentMonth' && {background: '#2d3f7c'}}
                           >CURRENT MONTH</Button>
           <Button type="primary" onClick={() => setFilterType('yearToDate')}
                           style={filterType === 'yearToDate' && {background: '#2d3f7c'}} 
                            >YEAR TO DATE</Button>
           <Button type="primary" onClick={() => setFilterType('last12Months')}
                           style={filterType === 'last12Months' && {background: '#2d3f7c'}}
                            >LAST 12 MONTHS</Button> 
           <CustomDateButtonFilter isModalOpenDate={isModalOpenDate} handleOkDate={handleOkDate} handleCancelDate={handleCancelDate}
                                  onChangeRadio={onChangeRadio} valueRadio={valueRadio} showModalDate={showModalDate} 
                                  onChangeDatePicker={onChangeDatePicker} filterType={filterType}
                             />
           <Button type="primary" onClick={showModalDateRange} >
             ADVANCED FILTERS
           </Button>                  
           <Form form={form} onFinish={onFinish}>
      <Modal title="Advanced Filters" open={isModalOpenDateRange} onOk={handleOkDateRange} onCancel={handleCancelDateRange}>
      

      <Row style={{ display: 'flex', alignItems: 'center' }}> 
       <Col span={5} style={{ display: 'flex', alignItems: 'center' }}>
       <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '16px'}}>Refund type</p>
       </Col>
       <Col span={19} style={{ display: 'flex', alignItems: 'center' }}>
       
        <Select
          labelInValue
          placeholder="All"
          allowClear
          value={filterValue.refundsType}
          style={{
          width: 240,
          marginTop: '0px',
          marginLeft: '5px'
          }}
          onChange={handleChangeRefundType}
          name='refundType'
          id='refundType'
          options={[
          
          {
            value: 'money',
            label: 'Money back guarantee',
          },
          {
            value: 'audits',
            label: 'Invoice audits',
          },
          {
            value: 'lost_damaged',
            label: 'Lost or damaged',
          },
          
        ]}
      />
      
      </Col>
      </Row>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
      <Col span={5}style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '16px'}}>Account #</p>
      </Col>
      <Col span={19} style={{ display: 'flex', alignItems: 'center' }}>
       <Select
         labelInValue
         placeholder="All"
         allowClear
         value={filterValue.account}
         style={{
                  width: 240,
                  marginTop: '0px',
                  marginLeft: '5px'
                }}
         onChange={handleChangeAccount}
         options={account.map(e => ({value: e, label: e }))}
      />
      </Col>
      </Row>

      <Row style={{ display: 'flex', alignItems: 'center' }}>
        <Col span={5}style={{ display: 'flex', alignItems: 'center' }}>  
          <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '16px'}}>Carrier</p>
        </Col>
       <Col span={19} style={{ display: 'flex', alignItems: 'center' }}> 
       <Select
          labelInValue
          placeholder="All"
          allowClear
          value={filterValue.carrier}
          style={{
             width: 240,
             marginTop: '0px',
             marginLeft: '5px'
             }}
           onChange={handleChangeCarrier}
           options={carrier.map(e => ({value: e, label: e }))  }
      />
      </Col>
      </Row>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
        <Col span={5}style={{ display: 'flex', alignItems: 'center' }}>  
          <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '16px'}}>Service Type</p>
        </Col>
       <Col span={19} style={{ display: 'flex', alignItems: 'center' }}> 
       <Select
          labelInValue
          placeholder="All"
          allowClear
          value={filterValue.serviceType}
          style={{
             width: 240,
             marginTop: '0px',
             marginLeft: '5px'
             }}
           onChange={handleChangeServiceType}
           options={serviceType.map(e => ({value: e, label: e }))  }
      />
      </Col>
      </Row>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
        <Col span={5}style={{ display: 'flex', alignItems: 'center' }}>  
          <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '16px'}}>Tracking number</p>
        </Col>
       <Col span={19} style={{ display: 'flex', alignItems: 'center' }}> 
       <Select
          labelInValue
          placeholder="All"
          allowClear
          value={filterValue.serviceType}
          style={{
             width: 240,
             marginTop: '0px',
             marginLeft: '5px'
             }}
           onChange={handleChangeTrackingNumber}
           options={trackingNumber.map(e => ({value: e, label: e }))  }
      />
      </Col>
      </Row>
      
    
      </Modal>
      </Form>                  
           </Space>
          </Row>
          <Row style={{marginTop: 40}}>
          <Col span={24}><Table columns={columns} dataSource={breakdownData} size='small' /></Col>
          </Row>
  </>
);
};

export default Home;
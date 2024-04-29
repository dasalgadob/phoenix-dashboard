'use client'; // If used in Pages Router, is no need to add "use client"

import React, { useEffect, useState } from 'react';

import { Breadcrumb, Layout, Menu, theme, Button, Dropdown, Flex, Col, Row, Table,
   Select, Typography, Modal, Space, Divider, Radio, DatePicker } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import CustomDateButtonFilter from './custom-date-button-filter';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const { RangePicker } = DatePicker;

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Shipping Spend',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: ' ',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const filter = {currentMonth: 1, custom: 2, last12Months: 4, yearToDate: 3}



const Shipping_Spend = () => {

  const onChangeDatePicker = (date, dateString) => {
    console.log( dateString);
    if (valueRadio === 1) {
      setCustomDate(`${dateString.substr(0,4)}0${dateString.substr(6,1)}`)
    } 
    else {
      setCustomDate(`${dateString.substr(0,4)}${dateString.substr(5,2)}`)
    }

  };

  const [carrier, setCarrier ] = useState (['All']) 
  const [account, setAccount ] = useState ([])
  const [zone, setZone ] = useState ([])
  const [customDate, setCustomDate] = useState('');
  const [filterType, setFilterType] = useState('currentMonth');
  const [dataShippingSpend, setDataShippingSpend] = useState(data)

  const [isModalOpenDateRange, setIsModalOpenDateRange] = useState(false);
  const showModalDateRange = () => {
    setIsModalOpenDateRange(true);
  };
  const handleOkDateRange = () => {
    setIsModalOpenDateRange(false);
  };
  const handleCancelDateRange = () => {
    setIsModalOpenDateRange(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (value) => {
    console.log(value);
  };

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const [valueCompareTo, setValueCompareTo] = useState(1);
  const onChangeCompareTo = (e) => {
    console.log('radio checked', e.target.value);
    setValueCompareTo(e.target.value);
  };

  const [onOkClickCount, setOnOkClickCount] = useState(0)


  useEffect(() => {
    getData()
  }, [filterType, onOkClickCount]);

  const getData = () => {
    fetch(`http://ec2-44-202-145-148.compute-1.amazonaws.com/api-queries/shipping_metrics/spend/65/?type_search=${filter[filterType]}&${valueRadio === 1 ?'quarter':'month'}_search=${customDate}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setDataShippingSpend(
          {
            labels: data.data[0].year_weeks,
            datasets: [
              {
                fill: true,
                label: ' ',
                data: data.data[0].weekly_totals,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
            ],
          }  
        )
        setCarrier(['All'].concat(data.data[0].carriers))
        setAccount([].concat(data.data[0].account_numbers))
        setZone([].concat(data.data[0].zones))
        
      })
      .catch((error) => console.log(error));

  }
  
  console.log(dataShippingSpend)

  const [isModalOpenDate, setIsModalOpenDate] = useState(false);

  const handleOkDate = () => {
    setOnOkClickCount(onOkClickCount+1)
    setFilterType('custom')
    setIsModalOpenDate(false);
  };

  const handleCancelDate = () => {
    setIsModalOpenDate(false);
  };

  const onChangeRadio = (e) => {
    console.log('radio checked', e.target.value);
    setValueRadio(e.target.value);
  };

  const [valueRadio, setValueRadio] = useState(1);

  const showModalDate = () => {
    setIsModalOpenDate(true);
  };

  return (
    <>
    <Row justify="center" align="middle"  style={{marginLeft: '-18px'}} >
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
                                  onChangeDatePicker={onChangeDatePicker}/>

      <Button type="primary" onClick={showModalDateRange} >
        ADVANCED FILTERS
      </Button>
      <Modal title="Advanced Filters" open={isModalOpenDateRange} onOk={handleOkDateRange} onCancel={handleCancelDateRange}>
      <Row style={{ display: 'flex', alignItems: 'center' }}> 
       <Col span={5} style={{ display: 'flex', alignItems: 'center' }}>
       <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '16px'}}>Service Type</p>
       </Col>
       <Col span={19} style={{ display: 'flex', alignItems: 'center' }}>
        <Select
          labelInValue
          placeholder="Service Type"
          style={{
          width: 240,
          marginTop: '0px',
          marginLeft: '5px'
          }}
          onChange={handleChange}
          options={[
          {
            value: 'all',
            label: 'All',
          },
          {
            value: 'air',
            label: 'Air',
          },
          {
            value: 'deferred',
            label: 'Deferred',
          },
          {
            value: 'ground',
            label: 'Ground',
          },
          {
            value: 'other',
            label: 'Other',
          },
        ]}
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
          placeholder="Carrier"
          style={{
             width: 240,
             marginTop: '0px',
             marginLeft: '5px'
             }}
           onChange={handleChange}
           options={carrier.map(e => ({value: e, label: e }))  }
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
         placeholder="Account #"
         style={{
                  width: 240,
                  marginTop: '0px',
                  marginLeft: '5px'
                }}
         onChange={handleChange}
         options={account.map(e => ({value: e, label: e }))}
      />
      </Col>
      </Row>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
        <Col span={5}style={{ display: 'flex', alignItems: 'center' }}>  
          <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '16px'}}>Zone</p>
        </Col>
        <Col span={19}>
       <Select
         labelInValue
         placeholder="Zone"
         style={{
                 width: 240,
                 marginTop: '0px',
                 marginLeft: '5px'
                }}
         onChange={handleChange}
         options={zone.map(e => ({value: e, label: e }))}
      />
        </Col>
       </Row>
       <Row style={{ display: 'flex', alignItems: 'center' }}>
        <Col span={5} style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '16px'}}>Display </p>
        </Col>
        <Col span={19} style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '16px'}}>
       <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>Total $</Radio>
        <Radio value={2}>$/shipment</Radio>
        <Radio value={3}>$/package</Radio>
        <Radio value={4}>$/lb</Radio>
       </Radio.Group>
       </Col>
      </Row>
      <Row style={{ display: 'flex', alignItems: 'center' }}>
      <Col span={5} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
       <p style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '16px'}}>Compare to: </p>
      </Col>
      <Col span={19} style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '16px', alignItems: 'center', display: 'flex',}}>
  <Radio.Group onChangeCompareTo={onChangeCompareTo} valueCompareTo={valueCompareTo}>
      <Radio value={1}>Nothing</Radio>
      <Radio value={2}># shipments</Radio>
      <Radio value={3}># packages</Radio>
    </Radio.Group>
    </Col>
    </Row>
    
      </Modal>
    
    </Space>
    
    </Row>


    <Divider></Divider>


    <Row>
    <Col span={24}>
    
    </Col> 
    </Row>      
    <Row style={{marginTop: 40}}>
          <Col span={24}><Line height={80} options={options} data={dataShippingSpend} /></Col>
          </Row>

    </>
);
};

export default Shipping_Spend;
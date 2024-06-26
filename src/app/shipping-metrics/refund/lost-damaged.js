'use client'; // If used in Pages Router, is no need to add "use client"

import React, { useEffect, useState } from 'react';

import { Breadcrumb, Layout, Menu, theme, Button, Dropdown, Flex, Col, Row, Table,
   Select, Typography, Modal, Space, Divider, Radio, DatePicker, Form } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import CustomDateButtonFilter from '../spend/custom-date-button-filter';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const { RangePicker } = DatePicker;

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Lost & Damaged',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Pending',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Approved',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Denied',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

const filter = {currentMonth: 1, custom: 2, last12Months: 4, yearToDate: 3}



const Lost_Damaged = () => {

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

  const resetForm = () => {
    setFilterValue({})
    setValue('All')
    setValueCompareTo('nothing')
    

  }

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
  const [dataLostDamaged, setDataLostDamaged] = useState(data)
  const [filterValue, setFilterValue] =useState({})
  const [isModalOpenDateRange, setIsModalOpenDateRange] = useState(false);
  const showModalDateRange = () => {
    setIsModalOpenDateRange(true);
  };
  const handleOkDateRange = () => {
    setOnOkClickCount(onOkClickCount+1)
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
    setOnOkClickCount(onOkClickCount+1)
    setIsModalOpen(false);
    
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeServiceType = (value) => {
    setFilterValue({...filterValue, serviceType: value?.value})
    console.log(value);
  };

  const handleChangeCarrier = (value) => {
    setFilterValue({...filterValue, carrier: value?.value})
    console.log(value);
  };

  const handleChangeAccount = (value) => {
    setFilterValue({...filterValue, account: value?.value})
    console.log(value);
  };

  const handleChangeZone = (value) => {
    setFilterValue({...filterValue, zone: value?.value})
    console.log(value);
  };

  const [value, setValue] = useState('All');
  const onChangeDisplay = (e) => {
    setFilterValue({...filterValue, display: e.target.value})
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const [valueCompareTo, setValueCompareTo] = useState('nothing');
  const onChangeCompareTo = (e) => {
    setFilterValue({...filterValue, compareTo: e.target.value})
    console.log('radio checked', e.target.value);
    setValueCompareTo(e.target.value);
  };

  const [onOkClickCount, setOnOkClickCount] = useState(0)
 
  
  

  useEffect(() => {
    getData()
  }, [filterType, onOkClickCount, form, values]);

  const getData = () => {
    fetch(`http://ec2-44-202-145-148.compute-1.amazonaws.com/api-queries/shipping_metrics/refund/lost_damaged/3023/?type_search=${filter[filterType]}&${valueRadio === 1 ?'quarter':'month'}_search=${customDate}&carrier_search=${filterValue.carrier || ''}&display_search=${value || ''}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setDataLostDamaged(
          {
            labels: data.data?.[0].year_weeks,
            datasets: [
              {
                label: 'Pending',
                data: data.data?.[0].weekly_totals.map(e => e['Pending']),
                backgroundColor: 'rgb(255, 99, 132)',
              },
              {
                label: 'Approved',
                data: data.data?.[0].weekly_totals.map(e => e['Approved']),
                backgroundColor: 'rgb(75, 192, 192)',
              },
              {
                label: 'Denied',
                data: data.data?.[0].weekly_totals.map(e => e['Denied']),
                backgroundColor: 'rgb(53, 162, 235)',
              },
            ],
          }  
        )
        setCarrier([].concat(data.data[0].carriers))
        setAccount([].concat(data.data[0].account_numbers))
        setZone([].concat(data.data[0].zones))
        
      })
      .catch((error) => console.log(error));

  }
  
  console.log(dataLostDamaged)

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

  console.log(filterType);


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
        <Col span={5} style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '16px'}}>Display </p>
        </Col>
        <Col span={19} style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '16px'}}>
       <Radio.Group onChange={onChangeDisplay} value={value} >
        <Radio value={'All'}>All LND Claims</Radio>
        <Radio value={'damaged'}>Damaged Claims</Radio>
        <Radio value={'lost'}>Lost Claims</Radio>
        
       </Radio.Group>
       </Col>
      </Row>
      
    <Row>
      <Col offset={18}>
    <Button type="primary" onClick={resetForm} style={{marginLeft: '-12px'}}  >
        Reset
      </Button>
      </Col>
    </Row>
      </Modal>
      </Form>
    </Space>
    
    </Row>


    <Divider></Divider>


    <Row>
    <Col span={24}>
    
    </Col> 
    </Row>      
    <Row style={{marginTop: 40}}>
          <Col span={24}><Bar height={80} options={options} data={dataLostDamaged} /></Col>
          </Row>

    </>
);
};

export default Lost_Damaged;
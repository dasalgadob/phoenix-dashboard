'use client'; // If used in Pages Router, is no need to add "use client"

import React, { useEffect, useState } from 'react';

import {
  Breadcrumb, Layout, Menu, theme, Button, Dropdown, Flex, Col, Row, Table,
  Select, Typography, Modal, Space, Divider, Radio, DatePicker, Form,
  Descriptions
} from 'antd';
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
import CustomDateButtonFilter from '../spend/custom-date-button-filter';
import { compareToOptions, displayOptions, refundTypeOptions, serviceTypeOptions } from './constants';

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
      text: 'Refunds',
    },
  },
};

const keyToUpperCase = (key) => {
  const resultText = key.replace(/([A-Z])/g, " $1");
  return resultText.charAt(0).toUpperCase() + resultText.slice(1);
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const dataGraph = {
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

const filter = { currentMonth: 1, custom: 2, last12Months: 4, yearToDate: 3 }



const Refunds = () => {

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
    setValue('total')
    setValueCompareTo('nothing')
    setRefundType({})
  }

  const onChangeDatePicker = (date, dateString) => {
    console.log(dateString);
    if (valueRadio === 1) {
      setCustomDate(`${dateString.substr(0, 4)}0${dateString.substr(6, 1)}`)
    }
    else {
      setCustomDate(`${dateString.substr(0, 4)}${dateString.substr(5, 2)}`)
    }

  };

  const [data, setData] = useState({})
  const [carrier, setCarrier] = useState(['All'])
  const [refundType, setRefundType] = useState([])
  const [zone, setZone] = useState([])
  const [customDate, setCustomDate] = useState('');
  const [filterType, setFilterType] = useState('currentMonth');
  const [dataShippingSpend, setDataShippingSpend] = useState(dataGraph)
  const [filterValue, setFilterValue] = useState({})
  const [isModalOpenDateRange, setIsModalOpenDateRange] = useState(false);
  const showModalDateRange = () => {
    setIsModalOpenDateRange(true);
  };
  const handleOkDateRange = () => {
    setOnOkClickCount(onOkClickCount + 1)
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
    setOnOkClickCount(onOkClickCount + 1)
    setIsModalOpen(false);

  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeServiceType = (value) => {
    setFilterValue({ ...filterValue, serviceType: value?.value })
    console.log(value);
  };

  const handleChangeCarrier = (value) => {
    setFilterValue({ ...filterValue, carrier: value?.value })
    console.log(value);
  };

  const handleChangeRefundType = (value) => {
    setFilterValue({ ...filterValue, refundType: value?.value })
    console.log(value);
  };

  const handleChangeZone = (value) => {
    setFilterValue({ ...filterValue, zone: value?.value })
    console.log(value);
  };

  const [value, setValue] = useState('approved');
  const onChangeDisplay = (e) => {
    setFilterValue({ ...filterValue, display: e.target.value })
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const [valueCompareTo, setValueCompareTo] = useState('nothing');
  const onChangeCompareTo = (e) => {
    setFilterValue({ ...filterValue, compareTo: e.target.value })
    console.log('radio checked', e.target.value);
    setValueCompareTo(e.target.value);
  };

  const [onOkClickCount, setOnOkClickCount] = useState(0)




  useEffect(() => {
    getData()
  }, [filterType, onOkClickCount, form, values]);

  const getData = () => {
    fetch(`http://ec2-44-202-145-148.compute-1.amazonaws.com/api-queries/shipping_metrics/refund/3023/?type_search=${filter[filterType]}&${valueRadio === 1 ? 'quarter' : 'month'}_search=${customDate}&refund_type_search=${filterValue.refundType || ''}&service_type_search=${filterValue.serviceType || ''}&carrier_search=${filterValue.carrier || ''}&display_search=${value || ''}&compare_to_search=${valueCompareTo || ''}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data[0])
        setDataShippingSpend(
          {
            labels: data.data[0].year_weeks,
            datasets: [
              {
                fill: true,
                label: value,
                data: data.data[0].weekly_totals,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
              {
                fill: true,
                label: valueCompareTo === 'nothing' ? '' : valueCompareTo,
                data: data.data[0].weekly_totals_comparing,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ],
          }
        )
        setCarrier([].concat(data.data[0].carrier))
        setAccount([].concat(data.data[0].account_numbers))
        setZone([].concat(data.data[0].zones))

      })
      .catch((error) => console.log(error));

  }

  console.log(dataShippingSpend)

  const [isModalOpenDate, setIsModalOpenDate] = useState(false);

  const handleOkDate = () => {
    setOnOkClickCount(onOkClickCount + 1)
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
            style={filterType === 'currentMonth' && { background: '#2d3f7c' }}
          >CURRENT MONTH</Button>
          <Button type="primary" onClick={() => setFilterType('yearToDate')}
            style={filterType === 'yearToDate' && { background: '#2d3f7c' }}
          >YEAR TO DATE</Button>
          <Button type="primary" onClick={() => setFilterType('last12Months')}
            style={filterType === 'last12Months' && { background: '#2d3f7c' }}
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
                  <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '16px' }}>Refund Type</p>
                </Col>
                <Col span={19} style={{ display: 'flex', alignItems: 'center' }}>
                  <Select
                    labelInValue
                    placeholder="All refunds"
                    allowClear
                    value={filterValue.refundType}
                    style={{
                      width: 240,
                      marginTop: '0px',
                      marginLeft: '5px'
                    }}
                    onChange={handleChangeRefundType}
                    options={Object.keys(refundTypeOptions).map(k => ({ value: k, label: refundTypeOptions[k] }))}
                  />
                </Col>
              </Row>

              <Row style={{ display: 'flex', alignItems: 'center' }}>
                <Col span={5} style={{ display: 'flex', alignItems: 'center' }}>
                  <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '16px' }}>Service Type</p>
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
                    name='serviceType'
                    id='serviceType'
                    options={Object.keys(serviceTypeOptions).map(k => ({ value: k, label: serviceTypeOptions[k] }))}
                  />

                </Col>
              </Row>

              <Row style={{ display: 'flex', alignItems: 'center' }}>
                <Col span={5} style={{ display: 'flex', alignItems: 'center' }}>
                  <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '16px' }}>Carrier</p>
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
                    options={carrier.map(e => ({ value: e, label: e }))}
                  />
                </Col>
              </Row>

              <Row style={{ display: 'flex', alignItems: 'center' }}>
                <Col span={5} style={{ display: 'flex', alignItems: 'center' }}>
                  <p style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '16px' }}>Display </p>
                </Col>
                <Col span={19} style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '16px' }}>
                  <Radio.Group onChange={onChangeDisplay} value={value} >
                    {Object.keys(displayOptions).map(k => (<Radio key={k} value={k}>{displayOptions[k]}</Radio>))}
                  </Radio.Group>
                </Col>
              </Row>
              <Row style={{ display: 'flex', alignItems: 'center' }}>
                <Col span={5} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <p style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '16px' }}>Compare to: </p>
                </Col>
                <Col span={19} style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '16px', alignItems: 'center', display: 'flex', }}>
                  <Radio.Group onChange={onChangeCompareTo} value={valueCompareTo}>
                    {Object.keys(compareToOptions).map(k => (<Radio key={k} value={k}>{compareToOptions[k]}</Radio>))}
                  </Radio.Group>
                </Col>
              </Row>
              <Row>
                <Col offset={18}>
                  <Button type="primary" onClick={resetForm} style={{ marginLeft: '-12px' }}  >
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
          <Descriptions column={7}>
            <Descriptions.Item label="Date Range">{data['date_range']}</Descriptions.Item>
            {filterValue.refundType && <Descriptions.Item label="Refund Type">{refundTypeOptions[filterValue.refundType]}</Descriptions.Item>}
            {filterValue.serviceType && <Descriptions.Item label="Service Type">{serviceTypeOptions[filterValue.serviceType]}</Descriptions.Item>}
            {filterValue.carrier && <Descriptions.Item label="Carrier">{filterValue.carrier}</Descriptions.Item>}
            {filterValue.display && <Descriptions.Item label="Display">{displayOptions[filterValue.display]}</Descriptions.Item>}
            {filterValue.compareTo && <Descriptions.Item label="Compare To">{compareToOptions[filterValue.compareTo]}</Descriptions.Item>}
          </Descriptions>
        </Col>
      </Row>
      <Row>
        <Col span={24}><Line height={80} options={options} data={dataShippingSpend} /></Col>
      </Row>

    </>
  );
};

export default Refunds;
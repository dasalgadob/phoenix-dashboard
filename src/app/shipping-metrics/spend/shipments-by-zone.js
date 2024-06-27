'use client'; // If used in Pages Router, is no need to add "use client"

import React, { useEffect, useState } from 'react';
import { Col, Row, Select, Divider, Tabs, Space, Card, Typography, Button, Modal, DatePicker, Radio, Descriptions } from 'antd';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {
  BorderOutlined,
} from '@ant-design/icons';
import PieLabels from './pie-labels';
import CustomDateButtonFilter from './custom-date-button-filter';
 

ChartJS.register(ArcElement, Tooltip, Legend);

const backgroundColors = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)',
]

const borderColors = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
]

const filter = { currentMonth: 1, custom: 2, last12Months: 4, yearToDate: 3 }

export const dataPie = {
  labels: ['Zone 5', 'Zone 4', 'Zone 2', 'Other Zones'],
  datasets: [
    {
      label: 'Charge',
      data: [32, 19, 75, 12,],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const { Title } = Typography;

const ShipmentsByZone = () => {

  const onChangeDatePicker = (date, dateString) => {
    console.log( dateString);
    if (valueRadio === 1) {
      setCustomDate(`${dateString.substr(0,4)}0${dateString.substr(6,1)}`)
    } 
    else {
      setCustomDate(`${dateString.substr(0,4)}${dateString.substr(5,2)}`)
    }

  };
  
  const [filterType, setFilterType] = useState('currentMonth');
  const [account, setAccount] = useState()
  const [onOkClickCount, setOnOkClickCount] = useState(0)
  const [data, setData] = useState({})
  const [customDate, setCustomDate] = useState('');
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Charge',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  })

  useEffect(() => {
    getData()
  }, [filterType, onOkClickCount]);

  const getData = () => {
    fetch(`http://ec2-44-202-145-148.compute-1.amazonaws.com/api-queries/shipping_metrics/spend/shipments_by_zone/5165/?type_search=${filter[filterType]}${account ? `&account_number_search=${account}` : ''}&${valueRadio === 1 ?'quarter':'month'}_search=${customDate}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        const countPieSegments = Object.keys(data.data?.[0]?.shipping_spend_by_zone || {}).length
        console.log("response:")
        console.log(data.data)
        console.log("labels:" + Object.keys(data.data?.[0]?.shipping_spend_by_zone || {}))
        setGraphData(
          {
            labels: Object.keys(data.data?.[0]?.shipping_spend_by_zone || {}),
            datasets: [
              {
                fill: true,
                label: 'Percentage',
                data: Object.keys(data.data?.[0]?.shipping_spend_by_zone || {}).map(key => data.data[0].shipping_spend_by_zone[key].percentage.substr(0, 2)),
                borderColor: borderColors.slice(0, countPieSegments),
                backgroundColor: backgroundColors.slice(0, countPieSegments),
              },
            ],
          }
        )
        // setCarrier(['All'].concat(data.data[0].carriers))
        // setAccount([].concat(data.data[0].account_numbers))
        // setZone([].concat(data.data[0].zones))
      })
      .catch((error) => console.log(error));

  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setOnOkClickCount(onOkClickCount + 1);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (value) => {
    console.log(value);
    setAccount(value?.value)
  };

  const optionsPie = {
    maintainAspectRatio: true,
    responsive: false,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
        onClick: () => false,
      },
    },
  };

  const [isModalOpenDate, setIsModalOpenDate] = useState(false);
  const showModalDate = () => {
    setIsModalOpenDate(true);
  };
  const handleOkDate = () => {
    setOnOkClickCount(onOkClickCount+1)
    setFilterType('custom')
    setIsModalOpenDate(false);
  };
  const handleCancelDate = () => {
    setIsModalOpenDate(false);
  };

  const [valueRadio, setValueRadio] = useState(1);
  const onChangeRadio = (e) => {
    console.log('radio checked', e.target.value);
    setValueRadio(e.target.value);
  };

  console.log(data)

  return (



    <>
      <Row justify="center" align="middle">
        <Space size={16}>
          <Button type="primary" onClick={() => setFilterType('currentMonth')}
            style={filterType === 'currentMonth' && { background: '#2d3f7c' }}
          >CURRENT MONTH</Button>
          <Button type="primary" onClick={() => setFilterType('yearToDate')}
            style={filterType === 'yearToDate' && { background: '#2d3f7c' }}
          >YEAR TO DATE</Button>
          <Button type="primary" onClick={() => setFilterType('last12Months')}
            style={filterType === 'last12Months' && {background: '#2d3f7c'}}
          >LAST 12 MONTHS</Button>
          
          <CustomDateButtonFilter isModalOpenDate={isModalOpenDate} handleOkDate={handleOkDate} handleCancelDate={handleCancelDate}
                                  onChangeRadio={onChangeRadio} valueRadio={valueRadio} showModalDate={showModalDate} filterType={filterType}
                                  onChangeDatePicker={onChangeDatePicker}/>

          <Button type="primary" onClick={showModal}>
                  ADVANCED FILTERS
                </Button>
                
                <Modal title="Advanced filters" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Row style={{ display: 'flex', alignItems: 'center' }}>  
                <Col span={5}style={{ display: 'flex', alignItems: 'center' }}>
                  <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '16px'}}>Account #</p>
                </Col>
                <Col span={19} style={{ display: 'flex', alignItems: 'center' }}>
                  <Select
                    labelInValue
                    placeholder="All"
                    allowClear
                    style={{
                      width: 240,
                    }}
                    onChange={handleChange}
                    options={data.data?.[0]?.account_numbers.map(e => ({value: e, label: e}) || [])
                      }
                  />
                </Col>  
                </Row>  
                </Modal>
                
        </Space>
      </Row>

      <Divider></Divider>

      <Row>
        <Col span={24}>
          <Descriptions column={7}>
            <Descriptions.Item label="Date Range">{data.data?.[0]['date_range']}</Descriptions.Item>
            {account && <Descriptions.Item label="Account #">{account}</Descriptions.Item>}
          </Descriptions>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Card style={{
            margin: 10,
            borderRadius: '12px',
            height: 480,
          }}
          >
            <Row>
              <Col span={6} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10px',
                flexDirection: 'column',
              }}>
                <Title level={4} style={{
                  fontWeight: 'bold',
                  margin: 0,
                }}>Shipments by Zone</Title>
                
              </Col>
              <Col span={14} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Pie data={graphData} options={optionsPie} width={400} height={400} />
                </div>
              </Col>
              <Col span={4}>
              {Object.keys(data?.data?.[0]?.shipping_spend_by_zone || {}).map((e, i) => 
                <PieLabels key={i} borderColor= {borderColors[i]} backgroundColor= {backgroundColors[i]} zone= {e}
                values={data?.data?.[0] ? data.data[0].shipping_spend_by_zone[e] : {}}/>
              )}
               
             

              </Col>
            </Row>
            

            
          </Card>
        </Col>
      </Row>

    </>
  )


};

export default ShipmentsByZone;
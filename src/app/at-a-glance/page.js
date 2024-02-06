'use client'; // If used in Pages Router, is no need to add "use client"

import {React, useEffect, useState} from 'react';
import { Button } from 'antd';
import { Line, Doughnut, Chart, Map, ColorScale, Dataset } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { faker } from '@faker-js/faker';
import { Col, Row, Select, Divider, Tabs, Space, Card, Typography } from 'antd';
import 'chartjs-chart-geo';
import 'topojson';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { us } from 'topojson-client';
import Last_12_months_shipping_spend from './last-12-months-shipping-spend';
import {
  useQuery,
} from '@tanstack/react-query'
import useSWR from 'swr'


ChartJS.register(ArcElement, Tooltip, Legend);

const fetchShippingSpend = async () => {
  const response = await fetch('http://ec2-44-202-145-148.compute-1.amazonaws.com/api-queries/overview/65/?type_search=1');
  const data = await response.json();
  console.log(fetchShippingSpend)
  console.log(data)
  return data.date;
};

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const { Title } = Typography;

const mapData = {
  labels: ['CA', 'TX', 'FL', 'NY', 'PA'], 
  datasets: [
    {
      label: 'Shipments by State',
      data: [120, 80, 60, 50, 40], 
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const optionsMap = {
  showOutline: true,
  showGraticule: true,
  legend: {
    display: true,
    position: 'bottom',
  },
};

const geoUrl = 'https://unpkg.com/us-atlas/states-10m.json';

export const data = {
  labels: [ 'FedEx', 'UPS'],
  datasets: [
    {
      label: ' ',
      data: [ 83 , 17 ],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(239, 184, 16, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const data2 = {
  labels: ['Air', 'Ground', 'Intl', 'Deferred'],
  datasets: [
    {
      label: ' ',
      data: [9275, 55560, 477, 100 ],
      backgroundColor: [
        'rgba(20, 20, 184, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        '#F8BBD0',

      ],
      borderColor: [
        'rgba(29, 29, 184, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        '#C2185B',
      ],
      borderWidth: 1,
    },
  ],
};

const filter = {currentMonth: 1, lastMonth: 2, last12Months: 4, yearToDate: 3}

const Home = () => {

  const [message, setMessage] = useState(null);
  const [dataSpendByCarrier, setDataSpendByCarrier] = useState(data);
  const [dataShippingSpendByServiceType, setDataShippingSpendByServiceType] = useState(data2);
  const [filterType, setFilterType] = useState('currentMonth');

  useEffect(() => {
    fetch(`http://ec2-44-202-145-148.compute-1.amazonaws.com/api-queries/overview/65/?type_search=${filter[filterType]}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.data);
        setDataSpendByCarrier({...dataSpendByCarrier, datasets: [
          {
            label: ' ',
            data: [  parseInt(data.data[0]?.shipping_spend_by_carrier.fedex[1]) 
            , parseInt(data.data[0]?.shipping_spend_by_carrier.ups[1]) ],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(239, 184, 16, 0.2)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
          
        ],  })
        console.log(data);
        setDataShippingSpendByServiceType({...dataShippingSpendByServiceType, datasets: [
          {
            label: ' ',
            data: [parseInt(data.data[0]?.shipping_spend_by_service_type.air[1]),
                   parseInt(data.data[0]?.shipping_spend_by_service_type.ground[1]),
                   parseInt(data.data[0]?.shipping_spend_by_service_type.intl[1]),
                   parseInt(data.data[0]?.shipping_spend_by_service_type.deferred[1]),
                  ],
            backgroundColor: [
              'rgba(20, 20, 184, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              '#F8BBD0',
            ],
            borderColor: [
              'rgba(29, 29, 184, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
              '#C2185B',
            ],
            borderWidth: 1,
          },
          
        ],  })
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [filterType]);

  

  const [tooltipContent, setTooltipContent] = useState('');

  const options = {
    maintainAspectRatio: false, 
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        onClick: () => false,
      },
    },
  };

  const options2 = {
    maintainAspectRatio: false, 
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        padding: 0,
        onClick: () => false,
      },
    },
    layout: {
      padding: {
        right: 0,
      },
    },
  };

  console.log(dataSpendByCarrier);
  console.log(dataShippingSpendByServiceType);

  return (
  <>
    <Row justify="center" align="middle">
    <Space size={16}>
    <Button type="primary" onClick={() => setFilterType('last12Months')}
                           style={filterType === 'last12Months' && {background: '#2d3f7c'}}
                           >LAST 12 MONTHS</Button>
    <Button type="primary"onClick={() => setFilterType('yearToDate')}
                           style={filterType === 'yearToDate' && {background: '#2d3f7c'}}
                          >YEAR TO DATE</Button>
    <Button type="primary">DATE RANGE</Button>
    <Button type="primary" onClick={() => setFilterType('currentMonth')}
                           style={filterType === 'currentMonth' && {background: '#2d3f7c'}}
                           >CURRENT MONTH</Button>
    </Space>
    </Row>

    <Divider></Divider>
    
    <Title level={3} style={{
              fontWeight: 'bold',
              margin: 0,
            }}>Shipping Metrics</Title>
    <Row>
    <Col span={8}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
              background: 'linear-gradient(to right, #4B0082, #6F2DA8)'
            }}>
              <p style={{ fontWeight: 'bold', margin: 0, color: '#ffffff' }}>Shipping Spend</p>
        <Title level={2} style={{
              fontWeight: 'bold',
              margin: 0,
              color: '#ffffff'
            }}>
              ${message && message[0]?.shipping_spend}
            </Title>
      </Card>
    </Col>
    <Col span={8}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
              background: 'linear-gradient(to right, #4B0082, #6F2DA8)'
            }}>
              <p style={{ fontWeight: 'bold', margin: 0, color: '#ffffff' }}>Refund Savings</p>
        <Title level={2} style={{
              fontWeight: 'bold',
              margin: 0,
              color: '#ffffff'
            }}>${message && message[0]?.refund_savings}</Title>
      </Card>
    </Col>
    <Col span={8}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
              background: 'linear-gradient(to right, #4B0082, #6F2DA8)'
            }}>
              <p style={{ fontWeight: 'bold', margin: 0, color: '#ffffff' }}>CN Savings</p>
        <Row>      
        < Col span={8}>      
        <Title level={2} style={{
              fontWeight: 'bold',
              margin: 0,
              color: '#ffffff'
            }}>{/*{(message && message[0]?.cn_savings)} */} &nbsp;
             </Title>
             </Col>
             < Col span={16} style={{ display: 'flex', alignItems: 'flex-end' }}>
            <p style={{ fontWeight: 'bold', margin: 0, color: '#ffffff'  }}>Feature not available</p>
            </Col>
            </Row>
      </Card>
    </Col>
    
  </Row>

  
  <Row>
  <Col span={8}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
              background: 'linear-gradient(to right, #0a5cb8, #3b8eed)'
            }}>
              <p style={{ fontWeight: 'bold', margin: 0, color: '#ffffff' }}># Shipments</p>
        <Title level={2} style={{
              fontWeight: 'bold',
              margin: 0,
              color: '#ffffff'
            }}>{message && message[0]?.number_of_shipments}</Title>
      </Card>
    </Col>  
    <Col span={8}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
              background: 'linear-gradient(to right, #0a5cb8, #3b8eed)'
            }}>
              <p style={{ fontWeight: 'bold', margin: 0, color: '#ffffff'}}>Average Cost</p>
        <Title level={2} style={{
              fontWeight: 'bold',
              margin: 0,
              color: '#ffffff'
            }}>${message && message[0]?.average_cost}</Title>
      </Card>
    </Col>
    <Col span={8}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
              background: 'linear-gradient(to right, #0a5cb8, #3b8eed)'
            }}>
              <p style={{ fontWeight: 'bold', margin: 0, color: '#ffffff' }}>Average Weight</p>
        <Title level={2} style={{
              fontWeight: 'bold',
              margin: 0,
              color: '#ffffff'
            }}>{message && message[0]?.average_weight}</Title>
      </Card>
    </Col>
  </Row>

  <Divider></Divider>

  <Row>
  <Col span={8}>  
  <Title level={4} style={{
              fontWeight: 'bold',
              margin: 0,
            }}>Shipping Spend by Carrier</Title>
  </Col>
  <Col span={8}>  
  <Title level={4} style={{
              fontWeight: 'bold',
              margin: 0,
            }}>Shipping Spend by Service Type</Title>
  </Col>
  <Col span={8}>  
  <Title level={4} style={{
              fontWeight: 'bold',
              margin: 0,
            }}>Shipping Spend by Category</Title>
  </Col>
  </Row>         
  <Row>
  <Col span={8}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
              height:500
            }}>
              <Row>
              <Col span={24}>
              <Doughnut height={200} data={ dataSpendByCarrier } options={options} />
              </Col>
              <Col span={24}>
                <Row>
                <Card style={{
                              margin: 0,
                              borderRadius: '12px',
                             }}>
                               <p style={{ fontWeight: 'bold', margin: 0, fontSize: '16px'}}>FedEx {message && message[0]?.shipping_spend_by_carrier?.fedex?.[1]}</p>
                               <Title level={1} style={{
                                                        fontWeight: 'bold',
                                                        margin: 0,
                                                       }}>${message && message[0]?.shipping_spend_by_carrier?.fedex?.[0]}</Title>
                 </Card>  
                 <Card style={{
                              margin: 0,
                              borderRadius: '12px',
                             }}>
                               <p style={{ fontWeight: 'bold', margin: 0, fontSize: '16px'}}>UPS {message && message[0]?.shipping_spend_by_carrier?.ups?.[1]} </p>
                               <Title level={1} style={{
                                                        fontWeight: 'bold',
                                                        margin: 0,
                                                       }}>${message && message[0]?.shipping_spend_by_carrier?.ups?.[0]}</Title>
                 </Card>
                </Row>
              </Col>
              </Row>
      </Card>
    </Col>
    
    <Col span={8}>
        <Card style={{
                margin: 10,
                borderRadius: '12px',
                height:500
              }}>
                
                <Doughnut height={400} data={dataShippingSpendByServiceType} options={options2} />  
        </Card>
      </Col>
      
      <Col span={8}>
        
      <Card style={{
                margin: 10,
                borderRadius: '12px',
                height:500
              }}>
                <p style={{ fontWeight: 'bold', margin: 0, color: '#808080'  }}>Feature not available</p>         
        </Card>
        
      </Col>
      </Row>
    

    <Divider></Divider>

    <Title level={3} style={{
              fontWeight: 'bold',
              margin: 0,
            }}>Maps</Title>

    
    <Row>
        <Col span={24}>
          <Card style={{ margin: 10, borderRadius: '12px', height: 520 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}> 
            <ComposableMap projection="geoAlbersUsa" projectionConfig={{ scale: 1000 }}
             style={{ height: 520, alignItems: 'center',marginLeft: '0px', display: 'flex' }}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#EAEAEC"
                      stroke="#D6D6DA"
                      style={{
                        hover: {
                          fill: '#87CEFA',
                          stroke: '#FFF',
                          strokeWidth: 2,
                        },
                      }}
                      onMouseEnter={() => {
                        const { NAME, postal } = geo.properties;
                        const shipments = mapData.labels.indexOf(postal) !== -1
                          ? mapData.datasets[0].data[mapData.labels.indexOf(postal)]
                          : 0;

                        setTooltipContent(`${NAME}: ${shipments} shipments`);
                      }}
                      onMouseLeave={() => {
                        setTooltipContent('');
                      }}
                    />
                  ))
                }
              </Geographies>
            </ComposableMap>
            </div> 
            {tooltipContent && (
              <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#FFF', padding: '10px', borderRadius: '5px', zIndex: 999 }}>
                {tooltipContent}
              </div>
            )}
          </Card>
        </Col>
      </Row>

  <Divider></Divider>      
{/*
    <Tabs
    defaultActiveKey="1"
    items={[
      
      {
        label: <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Last 12 Months Shipping Spend</span>,
        key: '5',
        children: <Last_12_months_shipping_spend />,
      },
    ]}
  />
  */}
  <Divider></Divider>  
  <div className="App">
    <Button type="primary">At A Glance</Button>
  </div>
  </>
)  
}

export default Home;
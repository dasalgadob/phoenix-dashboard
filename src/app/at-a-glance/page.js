'use client'; // If used in Pages Router, is no need to add "use client"

import {React, useEffect, useState} from 'react';
import { Button } from 'antd';
import { Line, Doughnut, Chart, Map, ColorScale, Dataset } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { faker } from '@faker-js/faker';
import { Col, Row, Select, Divider, Tabs, Space, Card, Typography, DatePicker,Modal,Radio  } from 'antd';
import 'chartjs-chart-geo';
import 'topojson';
import { ComposableMap, Geographies, Geography,  Marker, Annotation } from 'react-simple-maps';
import { us } from 'topojson-client';
import Last_12_months_shipping_spend from './last-12-months-shipping-spend';
import {
  useQuery,
} from '@tanstack/react-query'
import useSWR from 'swr'
import { geoCentroid } from "d3-geo";
import allStates from "./data/allstates.json";


const geoUrl2 = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const { RangePicker } = DatePicker;

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

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
      
      borderWidth: 1,
    },
  ],
};
/*
const optionsMap = {
  showOutline: true,
  showGraticule: true,
  legend: {
    display: true,
    position: 'bottom',
  },
};

const geoUrl = 'https://unpkg.com/us-atlas/states-10m.json';
*/
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

const filter = {currentMonth: 1, custom: 2, last12Months: 4, yearToDate: 3}



const disabledDate = (current) => {
 
  const today = new Date();
  
  const twoYearsAgo = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate());
  
  return current && current < twoYearsAgo;
};

const Home = () => {

  const onChangeDatePicker = (date, dateString) => {
    console.log( dateString);
    if (valueRadio === 1) {
      setCustomDate(`${dateString.substr(0,4)}0${dateString.substr(6,1)}`)
    } 
    else {
      setCustomDate(`${dateString.substr(0,4)}${dateString.substr(5,2)}`)
    }

  };

  const [message, setMessage] = useState(null);
  const [dataSpendByCarrier, setDataSpendByCarrier] = useState(data);
  const [dataShippingSpendByServiceType, setDataShippingSpendByServiceType] = useState(data2);
  const [filterType, setFilterType] = useState('currentMonth');
  const [customDate, setCustomDate] = useState();
  

  useEffect(() => {
    getData()
  }, [filterType]);

  const getData = () => {
    fetch(`http://ec2-44-202-145-148.compute-1.amazonaws.com/api-queries/overview/65/?type_search=${filter[filterType]}&${valueRadio === 1 ?'quarter':'month'}_search=${customDate}`, {
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

  }

  

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
    maintainAspectRatio: true, 
    responsive: false,
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

  const [isModalOpenDate, setIsModalOpenDate] = useState(false);
  const showModalDate = () => {
    setIsModalOpenDate(true);
  };
  const handleOkDate = () => {
    setFilterType('custom')
    getData()
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
   
  if(message){console.log(Object.keys(message[0].maps.counting_to_top_3))};
  
   
  return (
  <>
    <Row justify="center" align="middle">
    <Space size={16}>
    <Button type="primary" onClick={() => setFilterType('currentMonth')}
                           style={filterType === 'currentMonth' && {background: '#2d3f7c'}}
                           >CURRENT MONTH</Button>  
    <Button type="primary"onClick={() => setFilterType('yearToDate')}
                           style={filterType === 'yearToDate' && {background: '#2d3f7c'}}
                          >YEAR TO DATE</Button>                       
    <Button type="primary" onClick={() => setFilterType('last12Months')}
                           style={filterType === 'last12Months' && {background: '#2d3f7c'}}
                           >LAST 12 MONTHS</Button>
    <Button type="primary" onClick={showModalDate}>CUSTOM</Button>
<Modal title="Custom" open={isModalOpenDate} onOk={handleOkDate} onCancel={handleCancelDate}>
  <Space direction="vertical" size={12}>
    <Radio.Group onChange={onChangeRadio} value={valueRadio}>
      <Radio value={1}>Quarter</Radio>
      <Radio value={2}>Month</Radio>
    </Radio.Group>
    {valueRadio === 1 ? (
      <DatePicker
      onChange={onChangeDatePicker}
      picker="quarter"
      disabledDate={disabledDate}
    />
    ) : (
      <DatePicker
      onChange={onChangeDatePicker}
      picker="month"
      disabledDate={disabledDate}
/>
    )}
  </Space>
</Modal>
    
    </Space>
    </Row>
    <Title level={4} style={{
              fontWeight: 'bold',
              margin: 10,
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
            <p style={{ fontWeight: 'bold', margin: 0, color: '#ffffff', fontSize: '20px' }}>Coming soon</p>
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
  <Row>
  <Col span={8}>  
  <Title level={4} style={{
              fontWeight: 'bold',
              margin: 10,
            }}>Shipping Spend by Carrier</Title>
  </Col>
  <Col span={8}>  
  <Title level={4} style={{
              fontWeight: 'bold',
              margin: 10,
            }}>Shipping Spend by Service Type</Title>
  </Col>
  <Col span={8}>  
  <Title level={4} style={{
              fontWeight: 'bold',
              margin: 10,
            }}>Shipping Spend by Category</Title>
  </Col>
  </Row>         
  <Row>
  <Col span={8}>
      <Card style={{
              margin: 10,
              borderRadius: '12px',
              height:605
            }}>
              <Row>
              <Col span={24}>
              <Doughnut height={350} data={ dataSpendByCarrier } options={options} />
              </Col>
              <Col span={24} style={{marginBottom: '10px'}}>
                <Row >
                  <Col span={12}>
                <Card style={{
                              margin: 0,
                              borderRadius: '12px',
                              justifyContent: 'center',
                             }}>
                               <p style={{ fontWeight: 'bold', margin: 0, fontSize: '16px'}}>FedEx {message && message[0]?.shipping_spend_by_carrier?.fedex?.[1]}</p>
                               <Title level={2} style={{
                                                        fontWeight: 'bold',
                                                        margin: 0,
                                                       }}>${message && message[0]?.shipping_spend_by_carrier?.fedex?.[0]}</Title>
                 </Card> 
                 </Col>
                 <Col span={12}>
                 <Card style={{
                              margin: 0,
                              borderRadius: '12px',
                              justifyContent: 'center',
                             }}>
                               <p style={{ fontWeight: 'bold', margin: 0, fontSize: '16px'}}>UPS {message && message[0]?.shipping_spend_by_carrier?.ups?.[1]} </p>
                               <Title level={2} style={{
                                                        fontWeight: 'bold',
                                                        margin: 0,
                                                       }}>${message && message[0]?.shipping_spend_by_carrier?.ups?.[0]}</Title>
                 </Card>
                 </Col>
                </Row>
              </Col>
              </Row>
      </Card>
    </Col>
    
    <Col span={8}>
        <Card style={{
                margin: 10,
                borderRadius: '12px',
                height:605
              }}>
                
                <Col span={24} style={{justifyContent: 'center', display: 'flex',}}>
                <Doughnut height={350} data={dataShippingSpendByServiceType} options={options2}/> 
                </Col> 
                <Col span={24} style={{marginBottom: '10px'}}>
                <Row>
                  <Col span={12}>
                <Card style={{
                              margin: 0,
                              borderRadius: '12px',
                              justifyContent: 'center',
                             }}>
                               <p style={{ fontWeight: 'bold', margin: 0, fontSize: '16px'}}>Air {message && message[0]?.shipping_spend_by_service_type?.air?.[1]}</p>
                               <Title level={2} style={{
                                                        fontWeight: 'bold',
                                                        margin: 0,
                                                       }}>${message && message[0]?.shipping_spend_by_service_type?.air?.[0]}</Title>
                 </Card> 
                 </Col>
                 <Col span={12}>
                 <Card style={{
                              margin: 0,
                              borderRadius: '12px',
                              justifyContent: 'center',
                             }}>
                               <p style={{ fontWeight: 'bold', margin: 0, fontSize: '16px'}}>Ground {message && message[0]?.shipping_spend_by_service_type?.ground?.[1]} </p>
                               <Title level={2} style={{
                                                        fontWeight: 'bold',
                                                        margin: 0,
                                                       }}>${message && message[0]?.shipping_spend_by_service_type?.ground?.[0]}</Title>
                 </Card>
                 </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row>
                  <Col span={12}>
                <Card style={{
                              margin: 0,
                              borderRadius: '12px',
                              justifyContent: 'center',
                             }}>
                               <p style={{ fontWeight: 'bold', marginTop: '-25px', fontSize: '16px'}}>Intl {message && message[0]?.shipping_spend_by_service_type?.intl?.[1]}</p>
                               <Title level={2} style={{
                                                        fontWeight: 'bold',
                                                        marginTop: '-20px',
                                                       }}>${message && message[0]?.shipping_spend_by_service_type?.intl?.[0]}</Title>
                 </Card> 
                 </Col>
                 <Col span={12}>
                 <Card style={{
                              margin: 0,
                              borderRadius: '12px',
                              justifyContent: 'center',
                             }}>
                               <p style={{ fontWeight: 'bold', marginTop: '-25px', fontSize: '16px'}}>Deferred {message && message[0]?.shipping_spend_by_service_type?.deferred?.[1]} </p>
                               <Title level={2} style={{
                                                        fontWeight: 'bold',
                                                        marginTop: '-20px',
                                                       }}>${message && message[0]?.shipping_spend_by_service_type?.deferred?.[0]}</Title>
                 </Card>
                 </Col>
                </Row>
              </Col>

        </Card>
      </Col>
                                                        
      <Col span={8}>
        
      <Card style={{
                margin: 10,
                borderRadius: '12px',
                height:605,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
              }}>
                <p style={{ fontWeight: 'bold', margin: 0, color: '#808080' , fontSize: '30px' }}>Coming soon</p>         
        </Card>
        
      </Col>
      </Row>  

<Title level={3} style={{
          fontWeight: 'bold',
          margin: 10,
        }}>Map</Title>

<Row>
<Col span={24}>
  <Card style={{ margin: 10, borderRadius: '12px', height: 520 }}>
   <div style={{ display: 'flex', justifyContent: 'center' }}> 
<Col span={18} style={{ display: 'flex', justifyContent: 'center', marginRight: '5px', }}>
<ComposableMap projection="geoAlbersUsa"
style={{ height: 520, alignItems: 'center',marginLeft: '0px', marginRight: '5px', display: 'flex' }}
>
      <Geographies geography={geoUrl2}>
        {({ geographies }) => (
          <>
            {geographies.map(geo => {
              const cur = allStates.find(s => s.val === geo.id);
              return (
              <Geography
              key={geo.rsmKey}
              geography={geo}
              fill={
                message && message[0]?.maps?.counting_to_top_3 &&
                Object.keys(message[0].maps.counting_to_top_3).includes(cur.id)
                  ? '#87CEFA' 
                  : '#EAEAEC' 
              }
              stroke="#D6D6DA"
              style={{
                hover: {
                  fill: '#88898a',
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
              )
            })}

            {geographies.map(geo => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find(s => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} frontWeight="bold" textAnchor="middle">
                        {message && message[0]?.maps?.counting_to[cur.id] ? (
                          <>
                            {cur.id}:&nbsp;{message && message[0]?.maps?.counting_to[cur.id]}
                          </>
                        ) : (
                          <>
                            {cur.id}
                          </>
                        )}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={12} alignmentBaseline="middle">
                        {cur.id}:{message && message[0]?.maps?.counting_to[cur.id]}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
        
      </Geographies>
      
    </ComposableMap>
    </Col>
    <Col span={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
    <Card style={{ margin: 10, borderRadius: '12px', alignItems: 'center', marginTop: '0px'}}>
      <Row>
      <Col span={24}>
        <p style={{ fontWeight: 'bold', margin: 0, fontSize: '20px'}}>Domestic</p>
      </Col>

      {message && Object.keys(message[0].maps.counting_to_top_3).map((k, i) =>
      <Col key={k} span={24} style={{marginTop: '10px'}}>
      <Button type="primary" shape="circle" style={{ fontWeight: 'bold', background: '#87CEFA', cursor: 'default'}} >
         {i + 1}
        </Button>
        <p style={{ fontWeight: 'bold', margin: 0, fontSize: '18px', color: '#87CEFA' , display: 'inline-block', marginLeft: '10px'}}>
          {k} {message && message[0]?.maps?.counting_to_top_3?.[k]}  
        </p>
    </Col>
      )}

    </Row>
    </Card>
    </Col>
    </div>
    </Card>
  </Col>
</Row>



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
    
  </>
)  
}

export default Home;
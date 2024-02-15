'use client'; // If used in Pages Router, is no need to add "use client"

import React, { useState } from 'react';
import { Col, Row, Select, Divider, Tabs, Space, Card, Typography, Button, Modal } from 'antd';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataPie = {
  labels: ['Deferred', 'Ground', 'Intl', 'Air'],
  datasets: [
    {
      label: 'Charge',
      data: [12, 19, 5, 2, ],
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

const Service_Type_Breakout = () => {

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

  const optionsPie = {
    maintainAspectRatio: true, 
    responsive: false,  
    plugins: {
      legend: {
        position: 'bottom',
        onClick: () => false,
      },
    },
  };

return(


 

  <>
   <Row justify="center" align="middle">
    <Space size={16}>
    <Button type="primary">LAST 12 MONTHS</Button>
    <Button type="primary">YEAR TO DATE</Button>
    <Button type="primary">DATE RANGE</Button>
    <Button type="primary"
                           style={{background: '#2d3f7c'}}
                           >CURRENT MONTH</Button>
    </Space>
    </Row>

    <Divider></Divider>



  <Row>
    <Col span={24}>
    <Card style={{
              margin: 10,
              borderRadius: '12px',
              height:530,
            }}
            >
              <Row>
               <Col span={8} style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      marginTop: '10px',
                                      flexDirection: 'column',
                                     }}>
               <Title level={4} style={{
                                        fontWeight: 'bold',
                                        margin: 0,
                                        }}>Shipments by Breakout</Title>                        
               <Button type="primary" onClick={showModal} style={{ minWidth: '180px', marginTop: '15px' }}>
                    Account #
               </Button>
               <Modal title="Account #" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <Select
                       labelInValue
                       placeholder="Account #"
                       style={{
                        width: 240,
                       }}
                       onChange={handleChange}
                    options={[
                      {
                        value: 'FUR4859F',
                        label: 'FUR4859F',
                      },
                      {
                        value: '2JZEIF28',
                        label: '2JZEIF28',
                      },
                      {
                        value: '58DIE83D',
                        label: '58DIE83D',
                      },
                      {
                        value: '34IFJ59R',
                        label: '34IFJ59R',
                      },
                      {
                        value: '9984FR79',
                        label: '9984FR79',
                      },
                   ]}
                 />
               </Modal>                         
              </Col>
              <Col span={16} style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      flexDirection: 'column',
                                     }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>                        
              <Pie data={dataPie} options={optionsPie} width={400} height={400} />
              </div>
              </Col>
              </Row>

    </Card> 
    </Col> 
  </Row>   

  </>
)


};

export default Service_Type_Breakout;
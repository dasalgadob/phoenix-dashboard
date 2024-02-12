'use client'; // If used in Pages Router, is no need to add "use client"

import React, { useState } from 'react';
import { Col, Row, Select, Divider, Tabs, Space, Card, Typography, Button, Modal } from 'antd';

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

return(

 

  <>
  <Row>
    <Col span={24}>
    <Card style={{
              margin: 10,
              borderRadius: '12px',
              height:530,
              
            }}>
               <Col span={8} style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      marginTop: '170px',
                                      flexDirection: 'column',
                                     }}>
               <Title level={4} style={{
                                        fontWeight: 'bold',
                                        margin: 0,
                                        }}>Shipments by Zone</Title>                        
               <Button type="primary" onClick={showModal} style={{ minWidth: '180px', marginTop: '10px' }}>
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


    </Card> 
    </Col> 
  </Row>   

  </>
)


};

export default Service_Type_Breakout;
'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Col, Row, Select, Divider, Tabs, Space, Card, Typography, DatePicker,Modal,Radio, Button  } from 'antd';
import {
  AppstoreOutlined,
  DollarOutlined,
  CreditCardOutlined 
} from '@ant-design/icons';

const { Title } = Typography;

const Home = () => {

  return (
  <div className="App">
    <Divider></Divider>

    <Row gutter={24}>
      <Col span={8}>
      
              <Card style={{margin: 0,
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
              height: '50px',
              
              background: '#4b0082'}}>
              <Row>
              <Col span={18}> 
              <Row style={{ marginTop: '0px' }}> 
              {<AppstoreOutlined
                style={{ fontSize: '22px', alignItems: 'center', marginTop: '-13px', marginRight: '0px', color: '#FFFFFF' }} />}
              </Row>
              </Col>
              </Row>    
              </Card>

              <Card style={{
              margin: 0,
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              background: ''
            }}>
              <Row>
                <Col span={18}>
                 <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>Current Month</p> 
                 <Title level={4} style={{
                        fontWeight: '',
                        color: '#383f46',
                        marginTop: '0px',
                        }}>FedEx Shipments Refunded
                 </Title>
                 <Title level={2} style={{
                        fontWeight: 'bold',
                        marginTop: '0px',
                        color: ''
                        }}>
                        0
                        </Title>
                </Col>

                <Col span={6}>
                {<AppstoreOutlined 
                style={{ fontSize: '54px', alignItems: 'center', marginTop: '30px', marginRight: '0px', color: '#383f46' }} />}
                </Col>
              </Row>
              
            </Card>
              
      </Col>

      <Col span={8}>
      
              <Card style={{margin: 0,
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
              height: '50px',
              
              background: '#4b0082'}}>
              <Row>
              <Col span={18}> 
              <Row style={{ marginTop: '0px' }}> 
              {<DollarOutlined
                style={{ fontSize: '22px', alignItems: 'center', marginTop: '-13px', marginRight: '0px', color: '#FFFFFF' }} />}
              </Row>
              </Col>
              </Row>  
              </Card>

              <Card style={{
              margin: 0,
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              background: ''
            }}>
              <Row>
                <Col span={18}>
                 <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>Current Month</p> 
                 <Title level={4} style={{
                        fontWeight: '',
                        color: '#383f46',
                        marginTop: '0px',
                        }}>FedEx Average Refund
                 </Title>
                 <Title level={2} style={{
                        fontWeight: 'bold',
                        marginTop: '0px',
                        color: ''
                        }}>
                        $0
                        </Title>
                </Col>

                <Col span={6}>
                {<DollarOutlined 
                style={{ fontSize: '54px', alignItems: 'center', marginTop: '30px', marginRight: '0px', color: '#383f46' }} />}
                </Col>
              </Row>
              
            </Card>
      </Col>

      <Col span={8}>
      
              <Card style={{margin: 0,
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
              height: '50px',
              
              background: '#4b0082'}}>
              <Row>
              <Col span={18}> 
              <Row style={{ marginTop: '0px' }}> 
              {<CreditCardOutlined
                style={{ fontSize: '22px', alignItems: 'center', marginTop: '-13px', marginRight: '0px', color: '#FFFFFF' }} />}
              </Row>
              </Col>
              
              <Col span={6}>
              
              <Row style={{ borderLeft: '2px solid #FFFFFF', marginTop: '-13px' }}>
              <Button type="link" block style={{marginTop: '0px'}}>
              <Title level={5} style={{
                        fontWeight: '',
                        color: '#FFFFFF',
                        marginTop: '-5px',
                        }}>Details
                 </Title>
              </Button>
              </Row>
              </Col>
              </Row>
              </Card>

              <Card style={{
              margin: 0,
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              background: ''
            }}>
              <Row>
                <Col span={18}>
                 <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>Current Month</p> 
                 <Title level={4} style={{
                        fontWeight: '',
                        color: '#383f46',
                        marginTop: '0px',
                        }}>FedEx Total Refunds
                 </Title>
                 <Title level={2} style={{
                        fontWeight: 'bold',
                        marginTop: '0px',
                        color: ''
                        }}>
                        $0
                        </Title>
                </Col>

                <Col span={6}>
                {<CreditCardOutlined
                style={{ fontSize: '54px', alignItems: 'center', marginTop: '30px', marginRight: '0px', color: '#383f46' }} />}
                </Col>
              </Row>
              
            </Card>

            
      </Col>
      
    </Row>

    <Row gutter={24}>
      <Col span={8}>
      
             

            <Card style={{marginTop: '24px',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
              height: '50px',
              
              background: '#ffd700'}}>
              <Row>
              <Col span={18}> 
              <Row style={{ marginTop: '0px' }}> 
              {<AppstoreOutlined
                style={{ fontSize: '22px', alignItems: 'center', marginTop: '-13px', marginRight: '0px', color: '#FFFFFF' }} />}
              </Row>
              </Col>
              </Row>    
              </Card>

              <Card style={{
              margin: 0,
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              background: ''
            }}>
              <Row>
                <Col span={18}>
                 <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>Current Month</p> 
                 <Title level={4} style={{
                        fontWeight: '',
                        color: '#383f46',
                        marginTop: '0px',
                        }}>UPS Shipments Refunded
                 </Title>
                 <Title level={2} style={{
                        fontWeight: 'bold',
                        marginTop: '0px',
                        color: ''
                        }}>
                        0
                        </Title>
                </Col>

                <Col span={6}>
                {<AppstoreOutlined  
                style={{ fontSize: '54px', alignItems: 'center', marginTop: '30px', marginRight: '0px', color: '#383f46' }} />}
                </Col>
              </Row>
              
            </Card>
      </Col>

      <Col span={8}>
      

            <Card style={{marginTop: '24px',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
              height: '50px',
              
              background: '#ffd700'}}>
              <Row>
              <Col span={18}> 
              <Row style={{ marginTop: '0px' }}> 
              {<DollarOutlined
                style={{ fontSize: '22px', alignItems: 'center', marginTop: '-13px', marginRight: '0px', color: '#FFFFFF' }} />}
              </Row>
              </Col>
              </Row>  
              </Card>

              <Card style={{
              margin: 0,
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              background: ''
            }}>
              <Row>
                <Col span={18}>
                 <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>Current Month</p> 
                 <Title level={4} style={{
                        fontWeight: '',
                        color: '#383f46',
                        marginTop: '0px',
                        }}>UPS Average Refund
                 </Title>
                 <Title level={2} style={{
                        fontWeight: 'bold',
                        marginTop: '0px',
                        color: ''
                        }}>
                        $0
                        </Title>
                </Col>

                <Col span={6}>
                {<DollarOutlined 
                style={{ fontSize: '54px', alignItems: 'center', marginTop: '30px', marginRight: '0px', color: '#383f46' }} />}
                </Col>
              </Row>
              
            </Card>
      </Col>

      <Col span={8}>

            <Card style={{marginTop: '24px',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
              height: '50px',
              
              background: '#ffd700'}}>
              <Row>
              <Col span={18}> 
              <Row style={{ marginTop: '0px' }}> 
              {<CreditCardOutlined
                style={{ fontSize: '22px', alignItems: 'center', marginTop: '-13px', marginRight: '0px', color: '#FFFFFF' }} />}
              </Row>
              </Col>
              
              <Col span={6}>
              
              <Row style={{ borderLeft: '2px solid #FFFFFF', marginTop: '-13px' }}>
              <Button type="link" block style={{marginTop: '0px'}}>
              <Title level={5} style={{
                        fontWeight: '',
                        color: '#FFFFFF',
                        marginTop: '-5px',
                        }}>Details
                 </Title>
              </Button>
              </Row>
              </Col>
              </Row>
              </Card>

              <Card style={{
              margin: 0,
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              background: ''
            }}>
              <Row>
                <Col span={18}>
                 <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>Current Month</p> 
                 <Title level={4} style={{
                        fontWeight: '',
                        color: '#383f46',
                        marginTop: '0px',
                        }}>UPS Total Refunds
                 </Title>
                 <Title level={2} style={{
                        fontWeight: 'bold',
                        marginTop: '0px',
                        color: ''
                        }}>
                        $0
                        </Title>
                </Col>

                <Col span={6}>
                {<CreditCardOutlined 
                style={{ fontSize: '54px', alignItems: 'center', marginTop: '30px', marginRight: '0px', color: '#383f46' }} />}
                </Col>
              </Row>
              
            </Card>
      </Col>
      
    </Row>
  </div>
  )
};

export default Home;
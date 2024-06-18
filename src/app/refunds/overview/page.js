'use client'; // If used in Pages Router, is no need to add "use client"

import React, { useState } from 'react';
import { Col, Row, Select, Divider, Tabs, Space, Card, Typography, DatePicker,Modal,Radio, Button, Form } from 'antd';
import {
  AppstoreOutlined,
  DollarOutlined,
  CreditCardOutlined 
} from '@ant-design/icons';


const { Title } = Typography;


const filter = {currentMonth: 1, custom: 2, last12Months: 4, yearToDate: 3}

const Home = () => {

  const [form] = Form.useForm();

  const onFinish = (values) => {
    setIsModalOpenDateRange(false);
    form.setFieldsValue({
      serviceType: filterValue.serviceType,
    });
    console.log(values);
    console.log(filterValue);
  };

  const [filterType, setFilterType] = useState('currentMonth');
  const [isModalOpenDateRange, setIsModalOpenDateRange] = useState(false);

  const showModalDateRange = () => {
    setIsModalOpenDateRange(true);
  };

  const handleOkDate = () => {
    setOnOkClickCount(onOkClickCount+1)
    setFilterType('custom')
    setIsModalOpenDate(false);
  };

  const handleOkDateRange = () => {
    setOnOkClickCount(onOkClickCount+1)
    setIsModalOpenDateRange(false);
  };

  const handleCancelDateRange = () => {
    setIsModalOpenDateRange(false);
  };

  const [onOkClickCount, setOnOkClickCount] = useState(0)

  return (
  <div className="App">
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
    <Button type="primary" onClick={showModalDateRange} >
        ADVANCED FILTERS
    </Button>                                                                 
    <Form form={form} onFinish={onFinish}>
      <Modal title="Advanced Filters" open={isModalOpenDateRange} onOk={handleOkDateRange} onCancel={handleCancelDateRange}>
      <Row style={{ display: 'flex', alignItems: 'center' }}> 
       <Col span={5} style={{ display: 'flex', alignItems: 'center' }}>
       <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '16px'}}>Date Range</p>
       </Col>
       <Col span={19} style={{ display: 'flex', alignItems: 'center' }}>
       
        <Select
          labelInValue
          placeholder="All"
          allowClear
          style={{
          width: 240,
          marginTop: '0px',
          marginLeft: '5px'
          }}
          options={[
          
          {
            value: 'current_month',
            label: 'Current Month',
          },
          {
            value: 'last_month',
            label: 'Last Month',
          },
          {
            value: 'last_quarter',
            label: 'Last Quarter',
          },
          {
            value: 'last_12_month',
            label: 'Last 12 Month',
          },
          {
            value: 'year_to_date',
            label: 'Year to Date',
          },
          {
            value: 'monthly',
            label: 'Monthly',
          },
          {
            value: 'life_to_date ',
            label: 'Life To Date',
          },
        ]}
      />
      
      </Col>
      </Row>

      <Row style={{ display: 'flex', alignItems: 'center' }}> 
       <Col span={5} style={{ display: 'flex', alignItems: 'center' }}>
       <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '16px'}}>Refund Category</p>
       </Col>
       <Col span={19} style={{ display: 'flex', alignItems: 'center' }}>
       
        <Select
          labelInValue
          placeholder="All"
          allowClear
          style={{
          width: 240,
          marginTop: '0px',
          marginLeft: '5px'
          }}
          options={[
          
          {
            value: 'late_refunds_mbg/gsr',
            label: 'Late Refunds - MGB/GSR',
          },
          {
            value: 'invoice_audits',
            label: 'Invoice Audits',
          },
          {
            value: 'lost_or_damaged',
            label: 'Lost Or Damaged',
          },
          
        ]}
      />
      
      </Col>
      </Row>
      
    
      </Modal>
      </Form>
    </Space>
    </Row>

    
    <Title level={4} style={{
              fontWeight: '',
              marginBottom: 20,
              color: '#383f46',
            }}>Refunds Overview</Title>
    <Row gutter={24}>
      <Col span={8} xs={{ span: 24,}} lg={{ span: 8,}}>
      
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

      <Col span={8} xs={{ span: 24,}} lg={{ span: 8,}}>
      
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

      <Col span={8} xs={{ span: 24,}} lg={{ span: 8,}}>
      
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
      <Col span={8} xs={{ span: 24,}} lg={{ span: 8,}}>
      
             

            <Card style={{marginTop: '24px',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
              height: '50px',
              
              background: '#ffb11b'}}>
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

      <Col span={8} xs={{ span: 24,}} lg={{ span: 8,}}>
      

            <Card style={{marginTop: '24px',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
              height: '50px',
              
              background: '#ffb11b'}}>
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

      <Col span={8} xs={{ span: 24,}} lg={{ span: 8,}}>

            <Card style={{marginTop: '24px',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
              height: '50px',
              
              background: '#ffb11b'}}>
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

    <Title level={4} style={{
              fontWeight: '',
              marginBottom: 20,
              color: '#383f46',
            }}>Your Shipping Facts</Title>
    <Card style={{
              margin: 0,
              borderRadius: '12px',
              background: ''
            }}>       
    <Row gutter={24}>
    <Col span={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Title level={2} style={{
                        fontWeight: 'bold',
                        marginTop: '0px',
                        color: '#4b0082',
                        
                        }}>
                        FedEx
                        </Title>
    </Col>
    <Col span={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  flexDirection:'column',}}>
    
    <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>LARGEST REFUND</p>
    
    
    <Title level={2} style={{
                        fontWeight: 'bold',
                        marginTop: '0px',
                        color: '#4b0082',
                        
                        }}>
                        $0.00
                        </Title>
    </Col>
    
    <Col span={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  flexDirection:'column',}}>
    
    <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>SMALLEST REFUND</p>
    
    
    <Title level={2} style={{
                        fontWeight: 'bold',
                        marginTop: '0px',
                        color: '#4b0082',
                        
                        }}>
                        $0.00
                        </Title>
    </Col>
    <Col span={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  flexDirection:'column',}}>
    
    <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>FREQ. SHIPPED TO</p>
    
    
    <Title level={2} style={{
                        fontWeight: 'bold',
                        marginTop: '0px',
                        color: '#4b0082',
                        
                        }}>
                        N/A
                        </Title>
    </Col> 
    </Row>

    <Row gutter={24}>
    <Col span={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Title level={2} style={{
                        fontWeight: 'bold',
                        marginTop: '0px',
                        color: '#ffb11b',
                        
                        }}>
                        FedEx
                        </Title>
    </Col>
    <Col span={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  flexDirection:'column',}}>
    
    <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>LARGEST REFUND</p>
    
    
    <Title level={2} style={{
                        fontWeight: 'bold',
                        marginTop: '0px',
                        color: '#ffb11b',
                        
                        }}>
                        $0.00
                        </Title>
    </Col>
    
    <Col span={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  flexDirection:'column',}}>
    
    <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>SMALLEST REFUND</p>
    
    
    <Title level={2} style={{
                        fontWeight: 'bold',
                        marginTop: '0px',
                        color: '#ffb11b',
                        
                        }}>
                        $0.00
                        </Title>
    </Col>
    <Col span={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  flexDirection:'column',}}>
    
    <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>FREQ. SHIPPED TO</p>
    
    
    <Title level={2} style={{
                        fontWeight: 'bold',
                        marginTop: '0px',
                        color: '#ffb11b',
                        
                        }}>
                        N/A
                        </Title>
    </Col> 
    </Row>
    
    </Card>         
  </div>
  )
};

export default Home;
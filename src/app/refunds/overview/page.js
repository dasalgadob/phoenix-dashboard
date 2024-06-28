'use client'; // If used in Pages Router, is no need to add "use client"

import React, { useState, useEffect } from 'react';
import { Col, Row, Select, Divider, Tabs, Space, Card, Typography, DatePicker, Modal, Radio, Button, Form, Descriptions } from 'antd';
import {
  AppstoreOutlined,
  DollarOutlined,
  CreditCardOutlined
} from '@ant-design/icons';




import CustomDateButtonFilter from '../../shipping-metrics/spend/custom-date-button-filter'
import { refundCategoryOptions } from './constants';



const { Title } = Typography;


const filter = { currentMonth: 1, custom: 2, last12Months: 4, yearToDate: 3 }

const Home = () => {

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

  const [filterValue, setFilterValue] = useState({})
  const [filterType, setFilterType] = useState('currentMonth');
  const [isModalOpenDateRange, setIsModalOpenDateRange] = useState(false);
  const [dataRefunds, setDataRefunds] = useState()
  const [isModalOpenDate, setIsModalOpenDate] = useState(false);
  const [customDate, setCustomDate] = useState('');

  const showModalDateRange = () => {
    setIsModalOpenDateRange(true);
  };

  const handleOkDate = () => {
    setOnOkClickCount(onOkClickCount + 1)
    setFilterType('custom')
    setIsModalOpenDate(false);
  };

  const handleCancelDate = () => {
    setIsModalOpenDate(false);
  };

  const handleOkDateRange = () => {
    setOnOkClickCount(onOkClickCount + 1)
    setIsModalOpenDateRange(false);
  };

  const handleCancelDateRange = () => {
    setIsModalOpenDateRange(false);
  };

  const onChangeRadio = (e) => {
    console.log('radio checked', e.target.value);
    setValueRadio(e.target.value);
  };

  const [valueRadio, setValueRadio] = useState(1);

  const showModalDate = () => {
    setIsModalOpenDate(true);
  };

  const handleChangeRefundCategory = (value) => {
    setFilterValue({ ...filterValue, refundsCategory: value?.value })
    console.log(value);
  };

  const onChangeDatePicker = (date, dateString) => {
    console.log(dateString);
    if (valueRadio === 1) {
      setCustomDate(`${dateString.substr(0, 4)}0${dateString.substr(6, 1)}`)
    }
    else {
      setCustomDate(`${dateString.substr(0, 4)}${dateString.substr(5, 2)}`)
    }

  };

  const [onOkClickCount, setOnOkClickCount] = useState(0)

  useEffect(() => {
    getData()
  }, [filterType, onOkClickCount, form, values]);


  const getData = () => {
    fetch(`http://ec2-44-202-145-148.compute-1.amazonaws.com/api-queries/refunds/overview/65/?type_search=${filter[filterType]}&${valueRadio === 1 ? 'quarter' : 'month'}_search=${customDate}&refund_type_search=${filterValue.refundsCategory || ''}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setDataRefunds([].concat(data.data[0]))


      })
      .catch((error) => console.log(error));

  }

  console.log('dataRefunds')
  console.log(dataRefunds)

  return (
    <div className="App">
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
                  <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '16px' }}>Refund Category</p>
                </Col>
                <Col span={19} style={{ display: 'flex', alignItems: 'center' }}>

                  <Select
                    labelInValue
                    placeholder="All"
                    allowClear
                    value={filterValue.refundsCategory}
                    style={{
                      width: 240,
                      marginTop: '0px',
                      marginLeft: '5px'
                    }}
                    onChange={handleChangeRefundCategory}
                    name='refundCategory'
                    id='refundCategory'
                    options={Object.keys(refundCategoryOptions).map(k => ({ value: k, label: refundCategoryOptions[k]}))}
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
        marginTop: '30px',
        color: '#383f46',
      }}>Refunds Overview</Title>


      <Row style={{ marginTop: '15px' }}>
        <Col span={24}>
          <Descriptions column={6}>
            {dataRefunds?.[0]['date_range'] && <Descriptions.Item label="Date Range">{dataRefunds[0]['date_range']}</Descriptions.Item>}
            {filterValue.refundsCategory && <Descriptions.Item label="Date Range">{refundCategoryOptions[filterValue.refundsCategory]}</Descriptions.Item>}
          </Descriptions>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={8} xs={{ span: 24, }} lg={{ span: 8, }}>

          <Card style={{
            margin: 0,
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            height: '50px',

            background: 'linear-gradient(to right, #4B0082, #6F2DA8)'
          }}>
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
                  {dataRefunds && dataRefunds[0]?.fedex_shipments_refunded}
                </Title>
              </Col>

              <Col span={6}>
                {<AppstoreOutlined
                  style={{ fontSize: '54px', alignItems: 'center', marginTop: '30px', marginRight: '0px', color: '#383f46' }} />}
              </Col>
            </Row>

          </Card>

        </Col>

        <Col span={8} xs={{ span: 24, }} lg={{ span: 8, }}>

          <Card style={{
            margin: 0,
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            height: '50px',

            background: 'linear-gradient(to right, #4B0082, #6F2DA8)'
          }}>
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
                  ${dataRefunds && dataRefunds[0]?.fedex_average_refund}
                </Title>
              </Col>

              <Col span={6}>
                {<DollarOutlined
                  style={{ fontSize: '54px', alignItems: 'center', marginTop: '30px', marginRight: '0px', color: '#383f46' }} />}
              </Col>
            </Row>

          </Card>
        </Col>

        <Col span={8} xs={{ span: 24, }} lg={{ span: 8, }}>

          <Card style={{
            margin: 0,
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            height: '50px',

            background: 'linear-gradient(to right, #4B0082, #6F2DA8)'
          }}>
            <Row>
              <Col span={18}>
                <Row style={{ marginTop: '0px' }}>
                  {<CreditCardOutlined
                    style={{ fontSize: '22px', alignItems: 'center', marginTop: '-13px', marginRight: '0px', color: '#FFFFFF' }} />}
                </Row>
              </Col>

              <Col span={6}>

                <Row style={{ borderLeft: '2px solid #FFFFFF', marginTop: '-13px' }}>
                  <Button type="link" block style={{ marginTop: '0px' }}>
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
                  ${dataRefunds && dataRefunds[0]?.fedex_total_refunds}
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
        <Col span={8} xs={{ span: 24, }} lg={{ span: 8, }}>



          <Card style={{
            marginTop: '24px',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            height: '50px',

            background: 'linear-gradient(to right, #0a5cb8, #3b8eed)'
          }}>
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
                  {dataRefunds && dataRefunds[0]?.ups_shipments_refunded}
                </Title>
              </Col>

              <Col span={6}>
                {<AppstoreOutlined
                  style={{ fontSize: '54px', alignItems: 'center', marginTop: '30px', marginRight: '0px', color: '#383f46' }} />}
              </Col>
            </Row>

          </Card>
        </Col>

        <Col span={8} xs={{ span: 24, }} lg={{ span: 8, }}>


          <Card style={{
            marginTop: '24px',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            height: '50px',

            background: 'linear-gradient(to right, #0a5cb8, #3b8eed)'
          }}>
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
                  ${dataRefunds && dataRefunds[0]?.ups_average_refund}
                </Title>
              </Col>

              <Col span={6}>
                {<DollarOutlined
                  style={{ fontSize: '54px', alignItems: 'center', marginTop: '30px', marginRight: '0px', color: '#383f46' }} />}
              </Col>
            </Row>

          </Card>
        </Col>

        <Col span={8} xs={{ span: 24, }} lg={{ span: 8, }}>

          <Card style={{
            marginTop: '24px',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            height: '50px',

            background: 'linear-gradient(to right, #0a5cb8, #3b8eed)'
          }}>
            <Row>
              <Col span={18}>
                <Row style={{ marginTop: '0px' }}>
                  {<CreditCardOutlined
                    style={{ fontSize: '22px', alignItems: 'center', marginTop: '-13px', marginRight: '0px', color: '#FFFFFF' }} />}
                </Row>
              </Col>

              <Col span={6}>

                <Row style={{ borderLeft: '2px solid #FFFFFF', marginTop: '-13px' }}>
                  <Button type="link" block style={{ marginTop: '0px' }}>
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
                  ${dataRefunds && dataRefunds[0]?.ups_total_refunds}
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
          <Col span={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Title level={2} style={{
              fontWeight: 'bold',
              marginTop: '0px',
              color: '#4B0082',

            }}>
              FedEx
            </Title>
          </Col>
          <Col span={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>

            <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>LARGEST REFUND</p>


            <Title level={2} style={{
              fontWeight: 'bold',
              marginTop: '0px',
              color: '#4B0082',

            }}>
              ${dataRefunds && dataRefunds[0]?.fedex_largest_refund}
            </Title>
          </Col>

          <Col span={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>

            <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>SMALLEST REFUND</p>


            <Title level={2} style={{
              fontWeight: 'bold',
              marginTop: '0px',
              color: '#4B0082',

            }}>
              ${dataRefunds && dataRefunds[0]?.fedex_smallest_refund}
            </Title>
          </Col>
          <Col span={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>

            <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>FREQ. SHIPPED TO</p>


            <Title level={2} style={{
              fontWeight: 'bold',
              marginTop: '0px',
              color: '#4B0082',

            }}>
              {dataRefunds && dataRefunds[0]?.fedex_freq_shipped_to}
            </Title>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Title level={2} style={{
              fontWeight: 'bold',
              marginTop: '0px',
              color: '#0a5cb8',

            }}>
              UPS
            </Title>
          </Col>
          <Col span={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>

            <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>LARGEST REFUND</p>


            <Title level={2} style={{
              fontWeight: 'bold',
              marginTop: '0px',
              color: '#0a5cb8',

            }}>
              ${dataRefunds && dataRefunds[0]?.ups_largest_refund}
            </Title>
          </Col>

          <Col span={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>

            <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>SMALLEST REFUND</p>


            <Title level={2} style={{
              fontWeight: 'bold',
              marginTop: '0px',
              color: '#0a5cb8',

            }}>
              ${dataRefunds && dataRefunds[0]?.ups_smallest_refund}
            </Title>
          </Col>
          <Col span={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>

            <p style={{ fontWeight: '', margin: 0, color: '#383f46' }}>FREQ. SHIPPED TO</p>


            <Title level={2} style={{
              fontWeight: 'bold',
              marginTop: '0px',
              color: '#0a5cb8',

            }}>
              {dataRefunds && dataRefunds[0]?.ups_freq_shipped_to}
            </Title>
          </Col>
        </Row>

      </Card>
    </div>
  )
};

export default Home;
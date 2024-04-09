'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Button, Card, Divider, Row, Col, Tooltip, Typography, } from 'antd';

const textUps1 = <span>The $7.41 is the discount off the Published Charge of $20.59, or 35% discount. Is 35% a good or a bad discount?
                       It depends on a few factors, one of them being your total shipping spend cost.</span>;
const textUps2 = <span>Residential surcharge and Delivery Area surchage are invoiced at Published (List rates). Some customers have
                       a discount % off Surcharges. Should you? </span>;
const textUps3 = <span>Fuel surcharge is also a charge that can be discounted, 22.5%  for this customer. Find out if you&apos;re gettig
                       the best discounts and terms on your UPS agrement. </span>;                       





const Home = () => {
  
  
  return (
    <>
     <Row gutter={16}>
      <Col span={5}>
      <img src={'/UPS_logo.png'} style={{ width: '165px', display: 'block', margin: 'auto' }} />
      </Col>
      <Col span={19}>
      &nbsp;
      </Col> 
     </Row>
     <Row>
      <Col span={1}></Col>
      <Col span={7}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none'}}>
      <p style={{  fontSize: '22px', margin: 0, marginLeft: '14px',marginTop: '-17px', }}>
      Service
      </p>
      </Row>
      <p style={{  fontSize: '22px',margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      Ground Residential Third Party
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      Residential Surcharge
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      Delivery Area Surcharge - Extended
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      Fuel Surcharge
      </p>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      Third Party Billing Service
      </p>
      <Row style={{padding: '15px',  marginLeft: '14px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none'}}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '-13px',marginTop: '-17px', }}>
      <strong style={{ fontWeight: '800'  }}>Total</strong>
      </p>
      </Row>
      </Col>
      <Col span={2}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      ZIP
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none'}}>
      <p style={{  fontSize: '22px', margin: 0, marginLeft: '14px',marginTop: '-17px', }}>
      Code
      </p>
      </Row>
      <p style={{  fontSize: '22px',margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      96080
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none'}}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px',marginTop: '-17px', }}>
      <strong style={{ fontWeight: '800'  }}>&nbsp;</strong>
      </p>
      </Row> 
      </Col>
      <Col span={2} style={{ textAlign: 'center' }}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none'}}>
      <p style={{  fontSize: '22px', margin: 0, marginLeft: '34px',marginTop: '-17px', }}>
      Zone
      </p>
      </Row>
      <p style={{  fontSize: '22px',margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      4
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none'}}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px',marginTop: '-17px', }}>
      <strong style={{ fontWeight: '800'  }}>&nbsp;</strong>
      </p>
      </Row> 
      </Col>
      <Col span={2} style={{ textAlign: 'center' }}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none'}}>
      <p style={{  fontSize: '22px', margin: 0, marginLeft: '24px',marginTop: '-17px', }}>
      Weight
      </p>
      </Row>
      <p style={{  fontSize: '22px',margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      23
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none'}}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px',marginTop: '-17px', }}>
      <strong style={{ fontWeight: '800'  }}>&nbsp;</strong>
      </p>
      </Row> 
      </Col>
      <Col span={3} style={{ textAlign: 'right' }}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px', marginRight: '32px',marginTop: '0px', }}>
      Published
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none',
                    }}>
      <p style={{  fontSize: '22px', margin: 0, marginLeft: '71px',marginTop: '-17px', }}>
      Charge
      </p>
      </Row>
      <p style={{  fontSize: '22px',margin: '2px', marginLeft: '14px',  marginRight: '32px', marginTop: '0px', }}>
      20.59
      </p> 
      <Tooltip placement="right" title={textUps2}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',  marginRight: '32px',marginTop: '0px', }}>
      5.25
      </p> 
      </Tooltip>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',  marginRight: '32px',marginTop: '0px', }}>
      7.15
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',  marginRight: '32px',marginTop: '0px', }}>
      4.62
      </p>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',  marginRight: '32px',marginTop: '0px', }}>
      1.88
      </p>
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none'}}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '86px',marginTop: '-17px', }}>
      <strong style={{ fontWeight: '800'  }}>39.49</strong>
      </p>
      </Row> 
      </Col>
      <Col span={3} style={{ textAlign: 'right' }}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px',  marginRight: '37px', marginTop: '0px', }}>
      Incentive
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none',
                    }}>
      <p style={{  fontSize: '22px', margin: 0, marginLeft: '81px', marginTop: '-17px', }}>
      Credit
      </p>
      </Row>
      <Tooltip placement="right" title={textUps1}>
      <p style={{  fontSize: '22px',margin: '2px', marginLeft: '14px', marginRight: '32px', marginTop: '0px', }}>
      -7.41
      </p> 
      </Tooltip>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <Tooltip placement="right" title={textUps3}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      -1.04
      </p>
      </Tooltip>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      -0.42
      </p>
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none'}}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '86px',marginTop: '-17px', }}>
      <strong style={{ fontWeight: '800'  }}>-8.87</strong>
      </p>
      </Row> 
      </Col>
      <Col span={4} style={{ textAlign: 'right' }}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px',  marginRight: '30px', marginTop: '0px', }}>
      Billed
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none',
                    }}>
      <p style={{  fontSize: '22px', margin: 0, marginLeft: '134px', marginTop: '-17px', }}>
      Charge
      </p>
      </Row>
      
      <p style={{  fontSize: '22px',margin: '2px', marginLeft: '14px', marginRight: '32px', marginTop: '0px', }}>
      13.18
      </p> 
      
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      5.25
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      7.15
      </p> 
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      3.58
      </p>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      1.46
      </p>
      <Row style={{padding: '15px',  marginLeft: '-17px', marginRight: '28px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none'}}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '142px',marginTop: '-17px', }}>
      <strong style={{ fontWeight: '800'  }}>30.62</strong>
      </p>
      </Row> 
      </Col>      
     </Row>

    <Divider></Divider>
    <Row>
      <Col span={24} style={{ textAlign: 'center' }}>
      <Button type="primary">Upload file</Button>
      </Col> 
      </Row>
    
    </>
    )
};

export default Home;
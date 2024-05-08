'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Button, Card, Divider, Row, Col, Tooltip, Typography, } from 'antd';
import RequestFreeShippingAssessment from '../request-a-free-shipping-assessment'

const textUps1 = <span>The $7.41 is the discount off the Published Charge of $20.59, or 35% discount. Is 35% a good or a bad discount?
                       It depends on a few factors, one of them being your total shipping spend cost.</span>;
const textUps2 = <span>Residential surcharge and Delivery Area surchage are invoiced at Published (List rates). Some customers have
                       a discount % off Surcharges. Should you? </span>;
const textUps3 = <span>Fuel surcharge is also a charge that can be discounted, 22.5%  for this customer. Find out if you&apos;re gettig
                       the best discounts and terms on your UPS agrement. </span>;                       
const textUpsButton = <span>We&apos;ll benchmark your account vs $1 billion in shipping costs, discounts, and surcharges and tell you if you have goood, bad, or
very bad discounts per your spend level  </span>;




const Home = () => {
  
  
  return (
    <>
    <Row>
      <Col span={24}>
        <p style={{  fontSize: '32px', margin: 0, marginLeft: '0px',marginTop: '11px', marginBottom: '2px',
         color: '#34495E' }}>
          <u>Understanding your Carrier&apos;s Shipping Costs</u></p>
        <p style={{  fontSize: '32px', margin: 0, marginLeft: '0px',marginTop: '2px', marginBottom: '11px',
         color: '#34495E' }}>
          Hover on the sections below to view insights into parts of your carrier&apos;s invoice</p>  
      </Col>
    </Row>
    <Divider></Divider>
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
      <Col span={5}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none'}}>
      <p style={{  fontSize: '20px', margin: 0, marginLeft: '14px',marginTop: '-17px', }}>
      Service
      </p>
      </Row>
      <p style={{  fontSize: '16px',margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      Ground Residential Third Party
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      Residential Surcharge
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      Delivery Area Surcharge - Extended
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      Fuel Surcharge
      </p>
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      Third Party Billing Service
      </p>
      
      </Col>
      <Col span={2}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none'}}>
      <p style={{  fontSize: '20px', margin: 0, marginLeft: '14px',marginTop: '-17px', }}>
       ZIP Code
      </p>
      </Row>
      <p style={{  fontSize: '16px',margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      96080
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p>
      
      </Col>
      <Col span={1} style={{ textAlign: 'center' }}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none'}}>
      <p style={{  fontSize: '20px', margin: 0, marginLeft: '14px',marginTop: '-17px', }}>
      Zone
      </p>
      </Row>
      <p style={{  fontSize: '16px',margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      4
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p>
      
      </Col>
      <Col span={2} style={{ textAlign: 'center' }}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none'}}>
      <p style={{  fontSize: '20px', margin: 0, marginLeft: '24px',marginTop: '-17px', }}>
      Weight
      </p>
      </Row>
      <p style={{  fontSize: '16px',margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      23
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',marginTop: '0px', }}>
      &nbsp;
      </p>
      
      </Col>
      <Col span={4} style={{ textAlign: 'right' }}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px', marginRight: '32px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none',
                    }}>
      <p style={{  fontSize: '20px', margin: 0, marginLeft: '30px',marginTop: '-17px',  }}>
      Published Charge
      </p>
      </Row>
      <p style={{  fontSize: '16px',margin: '2px', marginLeft: '14px',  marginRight: '32px', marginTop: '0px', }}>
      20.59
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',  marginRight: '32px',marginTop: '0px', }}>
      5.25
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',  marginRight: '32px',marginTop: '0px', }}>
      7.15
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',  marginRight: '32px',marginTop: '0px', }}>
      4.62
      </p>
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',  marginRight: '32px',marginTop: '0px', }}>
      1.88
      </p>
      
      </Col>
      <Col span={1} style={{ textAlign: 'center' }}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px', marginRight: '32px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none',
                    }}>
      <p style={{  fontSize: '20px', margin: 0, marginLeft: '30px',marginTop: '-17px',  }}>
      &nbsp;
      </p>
      </Row>
      <p style={{  fontSize: '16px',margin: '2px', marginLeft: '14px',  marginRight: '32px', marginTop: '0px', }}>
      &nbsp;
      </p> 
      <Tooltip placement="topLeft" title={textUps2}>
      <Button type="primary" shape="circle" danger ghost style={{   margin: 0, marginLeft: '0px',marginTop: '-25px', }}>
      2
      </Button>
      </Tooltip>
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',  marginRight: '32px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',  marginRight: '32px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px',  marginRight: '32px',marginTop: '0px', }}>
      &nbsp;
      </p>
       
      </Col>
      <Col span={4} style={{ textAlign: 'right' }}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px',  marginRight: '37px', marginTop: '0px', }}>
      &nbsp;
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none',
                    }}>
      <p style={{  fontSize: '20px', margin: 0, marginLeft: '45px', marginTop: '-17px', }}>
      Incentive Credit
      </p>
      </Row>
      <p style={{  fontSize: '16px',margin: '2px', marginLeft: '14px', marginRight: '32px', marginTop: '0px', }}>
      -7.41
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      -1.04
      </p>
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      -0.42
      </p>
       
      </Col>
      <Col span={1} style={{ textAlign: 'center' }}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px',  marginRight: '30px', marginTop: '0px', }}>
      &nbsp;
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none',
                    }}>
      <p style={{  fontSize: '20px', margin: 0, marginLeft: '10px', marginTop: '-17px', }}>
      &nbsp;
      </p>
      </Row>
      
      <Tooltip placement="topLeft" title={textUps1}>
      <Button type="primary" shape="circle" danger ghost style={{   margin: 0, marginLeft: '0px',marginTop: '1px', }}>
      1
      </Button>
      </Tooltip>
      
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      <Tooltip placement="topLeft" title={textUps3}>
      <Button type="primary" shape="circle" danger ghost style={{   margin: 0, marginLeft: '0px',marginTop: '-25px', }}>
      3
      </Button>
      </Tooltip>
      </p>
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      &nbsp;
      </p>
       
      </Col>      
      <Col span={3} style={{ textAlign: 'right' }}>
      <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px',  marginRight: '30px', marginTop: '0px', }}>
      &nbsp;
      </p> 
      <Row style={{padding: '15px',  marginLeft: '-17px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none',
                    }}>
      <p style={{  fontSize: '20px', margin: 0, marginLeft: '10px', marginTop: '-17px', }}>
      Billed Charge
      </p>
      </Row>
      
      <p style={{  fontSize: '16px',margin: '2px', marginLeft: '14px', marginRight: '32px', marginTop: '0px', }}>
      13.18
      </p> 
      
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      5.25
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      7.15
      </p> 
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      3.58
      </p>
      <p style={{  fontSize: '16px', margin: '2px', marginLeft: '14px', marginRight: '32px',marginTop: '0px', }}>
      1.46
      </p>
       
      </Col>
      </Row> 
      <Row>
        <Col span={1}>
        </Col>
        <Col span={5}>
        <Row style={{padding: '15px',  marginLeft: '14px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none'}}>
        <p style={{  fontSize: '16px', margin: '2px', marginLeft: '-13px',marginTop: '0px', }}>
        Total
        </p>
        </Row> 
        </Col>
        <Col span={2}>
        <Row style={{padding: '15px',  marginLeft: '0px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none'}}>
        <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px',marginTop: '0px', }}>
        <strong style={{ fontWeight: '800'  }}>&nbsp;</strong>
        </p>
        </Row> 
        </Col>
        <Col span={1}>
        <Row style={{padding: '15px',  marginLeft: '0px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none'}}>
        <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px',marginTop: '0px', }}>
        <strong style={{ fontWeight: '800'  }}>&nbsp;</strong>
        </p>
        </Row> 
        </Col>
        <Col span={2}>
        <Row style={{padding: '15px',  marginLeft: '0px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none'}}>
        <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px',marginTop: '0px', }}>
        <strong style={{ fontWeight: '800'  }}>&nbsp;</strong>
        </p>
        </Row> 
        </Col>
        <Col span={4} >
        <Row style={{padding: '15px',  marginLeft: '0px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none', }}>
        <Col span={24} style={{textAlign: 'right'}}>
        <p style={{  fontSize: '16px', margin: '2px', marginLeft: '0px',marginTop: '0px',  marginRight: '16px'  }}>
        39.49
        </p>
        </Col>
        </Row> 
        </Col>
        <Col span={1}>
        <Row style={{padding: '15px',  marginLeft: '-0px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none'}}>
        <p style={{  fontSize: '22px', margin: '2px', marginLeft: '120px',marginTop: '-17px', }}>
        <strong style={{ fontWeight: '800'  }}>&nbsp;</strong>
        </p>
        </Row> 
        </Col>
        <Col span={4}>
        <Row style={{padding: '15px',  marginLeft: '0px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none'}}>
        <Col span={24} style={{textAlign: 'right'}}>
        <p style={{  fontSize: '16px', margin: '2px', marginLeft: '0px',marginTop: '0px',  marginRight: '16px'  }}>
        -8.87
        </p>
        </Col>
        </Row> 
        </Col>
        <Col span={1}>
        <Row style={{padding: '15px',  marginLeft: '0px', marginRight: '0px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none'}}>
        <p style={{  fontSize: '22px', margin: '2px', marginLeft: '0px',marginTop: '0px', }}>
        <strong style={{ fontWeight: '800'  }}>&nbsp;</strong>
        </p>
        </Row>
        </Col>
        <Col span={3}>
        <Row style={{padding: '15px',  marginLeft: '0px', marginRight: '28px', height: '30px' , border: '4px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none'}}>
        <Col span={24} style={{textAlign: 'right'}}>
        <p style={{  fontSize: '16px', margin: '2px', marginLeft: '0px',marginTop: '0px',  marginRight: '-12px'  }}>
        30.62
        </p>
        </Col>
        </Row>
        </Col>

      </Row>
     

    <Divider></Divider>
    <Row>
      <Col span={24} style={{ textAlign: 'center' }}>
      <RequestFreeShippingAssessment textButton={textUpsButton}
                                     />
      </Col> 
      </Row>
    
    </>
    )
};

export default Home;
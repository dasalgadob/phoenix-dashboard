'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Button, Card, Divider, Row, Col, Tooltip, Typography, } from 'antd';

const textFedex1 = <span>While the actual weight of the shipment was 7 lbs, the customer is being charged Dim weight of <u>26 lbs</u>, which is (L x W x H) divided by 139 </span>;
const textFedex2 = <span>The &apos;dim factor&apos; of 139 is List (standard). Most customers don&apos;t know that dim factor is <u>negotiable</u>, depending on your spend and other factors </span>;
const textFedex3 = <span>FedEx prices most customers with a &apos;base discount&apos;, used to <u>incentivize</u> more shipments via FedEx </span>;
const textFedex4 = <span>Surcharges like Saturday and Residential Delivery are usually priced at &apos;List rates&apos;. Ask us if you are eligible to <u>negotiate</u> a discount off surcharges  </span>;
const textFedexButton = <span>We&apos;ll benchmark your account vs $1 billion in shipping costs, discounts, and surcharges and tell you if you have goood, bad, or
                              very bad discounts per your spend level  </span>;

const Home = () => {
  
  
  return (
    <>
    <Row>
      <Col span={24}>
        <p style={{  fontSize: '36px', margin: 0, marginLeft: '0px',marginTop: '11px', marginBottom: '2px',
         color: '#34495E' }}>
          <u>Understanding your Carrier&apos;s Shipping Costs</u></p>
        <p style={{  fontSize: '36px', margin: 0, marginLeft: '0px',marginTop: '2px', marginBottom: '11px',
         color: '#34495E' }}>
          Hover on the sections below to view insights into parts of your carrier&apos;s invoice</p>  
      </Col>
    </Row>
    <Row gutter={24}>
     <Col span={8}>
       <img src={'/Fedex_logo.jpg'} style={{ width: '280px', display: 'block', margin: 'auto' }} />
     </Col>
     <Col span={5} style={{marginTop:'35px'}} >
     <Row style={{ border: '2px solid #000000', padding: '15px', background: '#FFFFFF', marginLeft: '5px', marginRight: '5px',
          height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
     <p style={{  fontSize: '20px', margin: 0, marginLeft: '0px',marginTop: '-11px', fontWeight: '800', }}>
        Invoice Number
        </p>
     </Row>
     <Row style={{ border: '2px solid #000000', padding: '15px', background: '#FFFFFF', marginTop:'-2px', marginLeft: '5px', marginRight: '5px',
                  height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
     <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '-11px',
                 }}>
        758246589
        </p>
     </Row> 

     
     </Col>
     <Col span={4} style={{marginTop:'35px'}}>
     <Row style={{ border: '2px solid #000000', padding: '15px', background: '#FFFFFF', marginLeft: '5px', marginRight: '5px',
          height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
     <p style={{  fontSize: '20px', margin: 0, marginLeft: '0px',marginTop: '-11px', fontWeight: '800', }}>
        Invoice Date
        </p>
     </Row>
     <Row style={{ border: '2px solid #000000', padding: '15px', background: '#FFFFFF', marginTop:'-2px',
      marginLeft: '5px', marginRight: '5px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
     <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '-11px',
                 }}>
        Apr 04, 2024
        </p>
     </Row>  
     </Col>
     <Col span={5} style={{marginTop:'35px'}}>
     <Row style={{ border: '2px solid #000000', padding: '15px', background: '#FFFFFF', marginLeft: '5px', marginRight: '5px',
          height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
     <p style={{  fontSize: '20px', margin: 0, marginLeft: '0px',marginTop: '-11px', fontWeight: '800', }}>
        Account Number
        </p>
     </Row>
     <Row style={{ border: '2px solid #000000', padding: '15px', background: '#FFFFFF', marginTop:'-2px', marginLeft: '5px', marginRight: '5px'
                  ,height: '30px', alignItems: 'center', justifyContent: 'center' }}>
     <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '-11px'
                 }}>
        1025485
        </p>
     </Row>  
     </Col>
     <Col span={2} style={{marginTop:'35px'}}>
     <Row style={{ border: '2px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none', padding: '15px', background: '#FFFFFF', marginLeft: '5px', marginRight: '5px',
          height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
     <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '-11px', }}>
        Page
        </p>
     </Row>
     <Row style={{ border: '2px solid #000000', padding: '15px', background: '#FFFFFF', borderRight: 'none', borderLeft: 'none', borderBottom: 'none',
                  marginTop:'-2px', marginLeft: '5px', marginRight: '5px', height: '30px' , display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
     <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '-11px', }}>
        6 of 18
        </p>
     </Row>  
     </Col>
    </Row>
    <Row style={{ height: '60px', background: '#BFC9CA' }}>
    <Col span={1}>
    </Col>
    <Col span={7}>
      <Row style={{padding: '15px', height: '30px' ,}}>
      <p style={{  fontSize: '18px', margin: 0, marginLeft: '0px',marginTop: '-11px', }}>
      <strong style={{ fontWeight: '800' }}>Ship Date: </strong>  Mar 21, 2024
      </p>
      </Row>
      <Row style={{padding: '15px', height: '30px' ,}}>
      <p style={{  fontSize: '18px', margin: 0, marginLeft: '0px',marginTop: '-15px', }}>
      <strong style={{ fontWeight: '800' }}>Payor: </strong>  Shipper
      </p>
      </Row>
    </Col>
    <Col span={7}>
    <Row style={{padding: '15px', height: '30px' ,}}>
      <p style={{  fontSize: '18px', margin: 0, marginLeft: '0px',marginTop: '-11px', }}>
      <strong style={{ fontWeight: '800' }}>Cust. Ref.: </strong>  1.2 - ISABEL S
      </p>
      </Row>
      <Row style={{padding: '15px', height: '30px' ,}}>
      <p style={{  fontSize: '18px', margin: 0, marginLeft: '0px',marginTop: '-15px', }}>
      <strong style={{ fontWeight: '800' }}>Ref.#3: </strong>  
      </p>
      </Row>
    </Col>
    <Col span={7}>
    <Row style={{padding: '15px', height: '30px' ,}}>
      <p style={{  fontSize: '18px', margin: 0, marginLeft: '0px',marginTop: '-11px', }}>
      <strong style={{ fontWeight: '800' }}>Ref.#2: </strong> PUBLIC RELATIONS
      </p>
      </Row>
      <Row style={{padding: '15px', height: '30px' ,}}>
      <p style={{  fontSize: '18px', margin: 0, marginLeft: '0px',marginTop: '-15px', }}>
      <strong style={{ fontWeight: '800' }}>Ref.#4: </strong>  
      </p>
      </Row>
    </Col>
    <Col span={2}>
    </Col>
    </Row>
    <Row>
      <Col span={3}>
      </Col>
      <Col span={21}>
      <p style={{  fontSize: '14px', margin: 0, marginLeft: '0px',marginTop: '10px', }}>
      The Earned Discount for this ship date has been calculated based on a revenue threshold of $5312099.95 
      </p>
      <p style={{  fontSize: '14px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Fuel Surcharge - FedEx has applied a fuel surcharge of 16.50% to this shipment.
      </p>
      <p style={{  fontSize: '14px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Distance Based Pricing. Zone B 
      </p>
      <Row>
      <Col span={16}>
      <p style={{  fontSize: '14px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      We calculated your charges based on a dimensional weight of 26.0 lbs, 27 in x 19 in x 7 in, using a dimensional factor of 139.
      </p>
      </Col>
      <Col span={8}>
      <Tooltip placement="bottom" title={textFedex2}>
      <Button type="primary" shape="circle" danger ghost style={{   margin: 0, marginLeft: '-20px',marginTop: '-25px', }}>
      2
      </Button>
      </Tooltip>
      </Col>
      </Row>
      <p style={{  fontSize: '14px', margin: 0, marginLeft: '0px',marginTop: '-5px', }}>
      Package Delivered to Recipient Address - Release Authorized
      </p>
      
      </Col>
      
    </Row>
    <Row style={{ marginTop: '10px'}}>
    <Col span={1}></Col> 
    <Col span ={23}> 
    <Row style={{ border: '2px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none', background: '#FFFFFF',
          }}>
      <Col span={3}>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Automation
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Traking ID
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Service Type
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Package Type
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Zone
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Packages
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Acutal Weight
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Rated Weight
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Delivered
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Svc Area
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Signed by
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      FedEx Use
      </p>
      
      

      </Col>      

      <Col span={1}>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <Tooltip placement="topLeft" title={textFedex1}>
      <Button type="primary" shape="circle" danger ghost style={{   margin: 0, marginLeft: '-20px',marginTop: '-25px', }}>
      1
      </Button>
      </Tooltip>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      
      

      </Col>      
      <Col span={4}>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      CAFE
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      71463572893847
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      FedEx Priority Overnight
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Customer Packaging
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      08
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      1
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      7.0 lbs, 3.2 kgs
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      26.o lbs, 11.8 kgs 
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Mar 22, 2024
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      A1
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      see above
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      00000000000/1618/02
      </p>
      <Row style={{padding: '15px', height: '30px' ,}}>
      <p style={{  fontSize: '18px', margin: 0, marginLeft: '0px',marginTop: '-15px', }}>
      &nbsp;  
      </p>
      </Row>

      </Col>      
      <Col span={8}>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      <strong style={{ fontWeight: '800', textDecoration: 'underline'  }}>Sender </strong>
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Transportation Charge
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Discount 
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Earned Discount
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Fuel Surcharge
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Saturday Delivery
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Residential Delivery
      </p>
      
      </Col>      
      <Col span={4}>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      <strong style={{ fontWeight: '800', textDecoration: 'underline'  }}>Recipient </strong>
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp; 
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      
      </Col>            
      <Col span={1}>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      <strong style={{ fontWeight: '800'  }}>&nbsp;</strong>
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp; 
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      
      </Col> 

      <Col span={1} style={{ textAlign: 'right' }}>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      <strong style={{ fontWeight: '800'  }}>&nbsp;</strong>
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp; 
      </p>
      <Tooltip placement="left" title={textFedex3 }>
      <Button type="primary" shape="circle" danger ghost style={{   margin: 0, marginLeft: '-20px',marginTop: '-25px', }}>
      3
      </Button>
      </Tooltip>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <Tooltip placement="left" title={textFedex4}>
      <Button type="primary" shape="circle" danger ghost style={{   margin: 0, marginLeft: '-20px',marginTop: '-25px', }}>
      4
      </Button>
      </Tooltip>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
     
      </Col>  

      <Col span={2} style={{ textAlign: 'right' }}>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      <strong style={{ fontWeight: '800'  }}>&nbsp;</strong>
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      &nbsp;
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      332.39
      </p> 
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      -216.05 
      </p>
      
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      -16.62
      </p>
      
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      20.11
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      16.00
      </p>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      6.15
      </p>
      
      </Col>
      <Col span={3}>
      <Row style={{padding: '15px', height: '30px' ,}}>
      <p style={{  fontSize: '18px', margin: 0, marginLeft: '0px',marginTop: '-15px', }}>
      &nbsp;  
      </p>
      </Row>
      </Col>
      <Col span={1}>
      <Row style={{padding: '15px', height: '30px' ,}}>
      <p style={{  fontSize: '18px', margin: 0, marginLeft: '0px',marginTop: '-15px', }}>
      &nbsp;  
      </p>
      </Row>
      </Col>  
      <Col span={4}>
      <Row style={{padding: '15px', height: '30px' ,}}>
      <p style={{  fontSize: '18px', margin: 0, marginLeft: '0px',marginTop: '-15px', }}>
      &nbsp;  
      </p>
      </Row>
      </Col>
      <Col span={8}>
      <Row style={{padding: '15px', height: '30px' , border: '2px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none',}}>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '-17px',marginTop: '-15px', }}>
      <strong style={{ fontWeight: '800'  }}>Total Charge</strong>  
      </p>
      </Row>
      </Col>
      <Col span={4}>
      <Row style={{padding: '15px', height: '30px' , border: '2px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none',}}>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '-15px', }}>
      <strong style={{ fontWeight: '800'  }}>&nbsp;</strong>  
      </p>
      </Row>
      </Col>
      <Col span={1}>
      <Row style={{padding: '15px', height: '30px' , border: '2px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none',}}>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '-15px', }}>
      <strong style={{ fontWeight: '800'  }}>USD</strong>  
      </p>
      </Row>
      </Col>
      <Col span={1}>
      <Row style={{padding: '15px', height: '30px' , border: '2px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none',
                     justifyContent: 'flex-end', marginTop: '-0px' }}>
      <p style={{  fontSize: '16px', margin: 0, marginRight: '-17px',marginTop: '-15px',}}>
      <strong style={{ fontWeight: '800'  }}>&nbsp;</strong>  
      </p>
      </Row>
      </Col>
      <Col span={2}>
      <Row style={{padding: '15px', height: '30px' , border: '2px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none',
                     justifyContent: 'flex-end' }}>
      <p style={{  fontSize: '16px', margin: 0, marginRight: '-17px',marginTop: '-15px',}}>
      <strong style={{ fontWeight: '800'  }}>$141.98</strong>  
      </p>
      </Row> 
      </Col>
    </Row>
    </Col>
    </Row>
    <Divider></Divider>
      <Row>
      <Col span={24} style={{ textAlign: 'center' }}>
      <Tooltip placement="top" title={textFedexButton}>
      <Button type="primary" style={{  background: '#F39C12' }}>Request a Free Shipping Assessment</Button>
      </Tooltip>
      </Col> 
      </Row>
    
    </>
    )
};

export default Home;
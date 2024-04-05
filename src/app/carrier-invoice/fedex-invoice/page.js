'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Button, Card, Divider, Row, Col, Tooltip, Typography, } from 'antd';

const Home = () => {
  
  
  return (
    <>
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
                  ,height: '30px', }}>
     
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
    <Row style={{ height: '60px', background: '#797D7F' }}>
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
      <p style={{  fontSize: '14px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      We calculated your charges based on a dimensional weight of 26.0 lbs, 27 in x 19 in x 7 in, using a dimensional factor of 139.
      </p>
      <p style={{  fontSize: '14px', margin: 0, marginLeft: '0px',marginTop: '0px', }}>
      Package Delivered to Recipient Address - Release Authorized
      </p>
      </Col>
    </Row>
    <Row style={{ marginTop: '10px'}}>
    <Col span={1}></Col> 
    <Col span ={23}> 
    <Row style={{ border: '2px solid #000000', borderRight: 'none', borderLeft: 'none', borderTop: 'none', background: '#FFFFFF',
          }}>
      <Col span={4}>
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
      <Row style={{padding: '15px', height: '30px' ,}}>
      <p style={{  fontSize: '18px', margin: 0, marginLeft: '0px',marginTop: '-15px', }}>
      &nbsp;  
      </p>
      </Row>
      

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
      <Row style={{padding: '15px', height: '30px' , border: '2px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none',}}>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '-17px',marginTop: '-15px', }}>
      <strong style={{ fontWeight: '800'  }}>Total Charge</strong>  
      </p>
      </Row>
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
      <Row style={{padding: '15px', height: '30px' , border: '2px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none',}}>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '-15px', }}>
      <strong style={{ fontWeight: '800'  }}>&nbsp;</strong>  
      </p>
      </Row>
      </Col>            
      <Col span={2}>
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
      <Row style={{padding: '15px', height: '30px' , border: '2px solid #000000', borderRight: 'none', borderLeft: 'none', borderBottom: 'none',}}>
      <p style={{  fontSize: '16px', margin: 0, marginLeft: '0px',marginTop: '-15px', }}>
      <strong style={{ fontWeight: '800'  }}>USD</strong>  
      </p>
      </Row>
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
    <img src={'/Fedex.png'} style={{ width: '1300px', display: 'block', margin: 'auto' }} />
    </>
    )
};

export default Home;
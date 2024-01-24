'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Button, Card, Divider, Row, Col, Tooltip, Typography, } from 'antd';
const { Title, Link, Text } = Typography;
import {
  CheckOutlined,
  SwapOutlined,
  SettingOutlined
  
} from '@ant-design/icons';


const Credentials = () => {

  return (
    <>
    <Divider></Divider>
      <Col span={10}>
      
      <Row style={{ border: '1px solid #D6DBDF', padding: '13px', background: '#F8F9F9' }}>
       <Col span={6}>
       <Tooltip title="Account has been activated." placement="right" >
            <Button
            type="primary" shape="default" icon={<CheckOutlined />}
            size="small"
            style={{ alignItems: 'center', marginRight: '3px', marginLeft: '10px', backgroundColor: '#27AE60',cursor: 'pointer', }}
            />
        </Tooltip>
        <Tooltip title="In and out bound shipping account" placement="right" >
            <Button
            type="primary" shape="default" icon={<SwapOutlined />}
            size="small"
            style={{ alignItems: 'center', marginRight: '4px', marginLeft: '3px', backgroundColor: '#808B96', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        </Col>
        <Col span={16}>     
        <p style={{  fontSize: '13px', margin: 0, marginLeft: '-30px', display: 'flex', alignItems: 'right', fontWeight: 'bold', }}>trendsauto</p>
        </Col>
        <Col span={2}>
        <Tooltip title="Edit" placement="left" >
            <Button
            type="primary" shape="default" icon={<SettingOutlined />}
            size="small"
            style={{ alignItems: 'right', marginRight: '4px', marginLeft: '3px', backgroundColor: '#339CFF', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        </Col>

       </Row> 

       <Row style={{ border: '1px solid #D6DBDF', padding: '30px', background: '#F8F9F9' }}>
        <Col span={7}>
        <p style={{  fontSize: '13px', margin: 0, marginLeft: '10px', marginTop: '-20px', display: 'flex', alignItems: 'top' }}>
          <span style={{ fontWeight: 'bold' }}>Status:</span>&nbsp;Active</p>
        </Col>
        <Col span={5}>

        </Col>
        <Col span={12}>
        <p style={{  fontSize: '10px', margin: 0, marginLeft: '10px', marginTop: '-16px', display: 'flex', alignItems: 'top' }}>
           We have identified 7 account number(s) with shipping activity</p>
        </Col>
       </Row>

       <Row style={{ border: '1px solid #D6DBDF', padding: '10px', background: '#F8F9F9', margin: 0 }}>
        <Col span={7}>
        <p style={{  fontSize: '13px', margin: 0, marginLeft: '10px', marginTop: '0px', display: 'flex', alignItems: 'top' }}>
        374100572 </p>
        </Col>
        <Col span={13}>

        </Col>
        <Col span={4}>
        <Tooltip title="In and out bound shipping account" placement="left" >
            <Button
            type="primary" shape="default" icon={<SwapOutlined />}
            size="small"
            style={{ alignItems: 'center', marginRight: '4px', marginLeft: '3px', backgroundColor: '#808B96', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        <Tooltip title="Edit" placement="left" >
            <Button
            type="primary" shape="default" icon={<SettingOutlined />}
            size="small"
            style={{ alignItems: 'left', marginRight: '-10px', marginLeft: '3px', backgroundColor: '#339CFF', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        </Col>
       </Row>
       
       <Row style={{ border: '1px solid #D6DBDF', padding: '10px', background: '#F8F9F9', margin: 0 }}>
        <Col span={7}>
        <p style={{  fontSize: '13px', margin: 0, marginLeft: '10px', marginTop: '0px', display: 'flex', alignItems: 'top' }}>
        0000605RF7 </p>
        </Col>
        <Col span={13}>

        </Col>
        <Col span={4}>
        <Tooltip title="In and out bound shipping account" placement="left" >
            <Button
            type="primary" shape="default" icon={<SwapOutlined />}
            size="small"
            style={{ alignItems: 'center', marginRight: '4px', marginLeft: '3px', backgroundColor: '#808B96', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        <Tooltip title="Edit" placement="left" >
            <Button
            type="primary" shape="default" icon={<SettingOutlined />}
            size="small"
            style={{ alignItems: 'left', marginRight: '-10px', marginLeft: '3px', backgroundColor: '#339CFF', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        </Col>
       </Row>

       <Row style={{ border: '1px solid #D6DBDF', padding: '10px', background: '#F8F9F9', margin: 0 }}>
        <Col span={7}>
        <p style={{  fontSize: '13px', margin: 0, marginLeft: '10px', marginTop: '0px', display: 'flex', alignItems: 'top' }}>
        000065A683 </p>
        </Col>
        <Col span={13}>

        </Col>
        <Col span={4}>
        <Tooltip title="In and out bound shipping account" placement="left" >
            <Button
            type="primary" shape="default" icon={<SwapOutlined />}
            size="small"
            style={{ alignItems: 'center', marginRight: '4px', marginLeft: '3px', backgroundColor: '#808B96', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        <Tooltip title="Edit" placement="left" >
            <Button
            type="primary" shape="default" icon={<SettingOutlined />}
            size="small"
            style={{ alignItems: 'left', marginRight: '-10px', marginLeft: '3px', backgroundColor: '#339CFF', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        </Col>
       </Row>

       <Row style={{ border: '1px solid #D6DBDF', padding: '10px', background: '#F8F9F9', margin: 0 }}>
        <Col span={7}>
        <p style={{  fontSize: '13px', margin: 0, marginLeft: '10px', marginTop: '0px', display: 'flex', alignItems: 'top' }}>
        000030033A </p>
        </Col>
        <Col span={13}>

        </Col>
        <Col span={4}>
        <Tooltip title="In and out bound shipping account" placement="left" >
            <Button
            type="primary" shape="default" icon={<SwapOutlined />}
            size="small"
            style={{ alignItems: 'center', marginRight: '4px', marginLeft: '3px', backgroundColor: '#808B96', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        <Tooltip title="Edit" placement="left" >
            <Button
            type="primary" shape="default" icon={<SettingOutlined />}
            size="small"
            style={{ alignItems: 'left', marginRight: '-10px', marginLeft: '3px', backgroundColor: '#339CFF', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        </Col>
       </Row>

       <Row style={{ border: '1px solid #D6DBDF', padding: '10px', background: '#F8F9F9', margin: 0 }}>
        <Col span={7}>
        <p style={{  fontSize: '13px', margin: 0, marginLeft: '10px', marginTop: '0px', display: 'flex', alignItems: 'top' }}>
        00005392E1 </p>
        </Col>
        <Col span={13}>

        </Col>
        <Col span={4}>
        <Tooltip title="In and out bound shipping account" placement="left" >
            <Button
            type="primary" shape="default" icon={<SwapOutlined />}
            size="small"
            style={{ alignItems: 'center', marginRight: '4px', marginLeft: '3px', backgroundColor: '#808B96', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        <Tooltip title="Edit" placement="left" >
            <Button
            type="primary" shape="default" icon={<SettingOutlined />}
            size="small"
            style={{ alignItems: 'left', marginRight: '-10px', marginLeft: '3px', backgroundColor: '#339CFF', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        </Col>
       </Row>

       <Row style={{ border: '1px solid #D6DBDF', padding: '10px', background: '#F8F9F9', margin: 0 }}>
        <Col span={7}>
        <p style={{  fontSize: '13px', margin: 0, marginLeft: '10px', marginTop: '0px', display: 'flex', alignItems: 'top' }}>
        0000V49840 </p>
        </Col>
        <Col span={13}>

        </Col>
        <Col span={4}>
        <Tooltip title="In and out bound shipping account" placement="left" >
            <Button
            type="primary" shape="default" icon={<SwapOutlined />}
            size="small"
            style={{ alignItems: 'center', marginRight: '4px', marginLeft: '3px', backgroundColor: '#808B96', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        <Tooltip title="Edit" placement="left" >
            <Button
            type="primary" shape="default" icon={<SettingOutlined />}
            size="small"
            style={{ alignItems: 'left', marginRight: '-10px', marginLeft: '3px', backgroundColor: '#339CFF', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        </Col>
       </Row>

       <Row style={{ border: '1px solid #D6DBDF', padding: '10px', background: '#F8F9F9', margin: 0 }}>
        <Col span={7}>
        <p style={{  fontSize: '13px', margin: 0, marginLeft: '10px', marginTop: '0px', display: 'flex', alignItems: 'top' }}>
        0000R6E437 </p>
        </Col>
        <Col span={13}>

        </Col>
        <Col span={4}>
        <Tooltip title="In and out bound shipping account" placement="left" >
            <Button
            type="primary" shape="default" icon={<SwapOutlined />}
            size="small"
            style={{ alignItems: 'center', marginRight: '4px', marginLeft: '3px', backgroundColor: '#808B96', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        <Tooltip title="Edit" placement="left" >
            <Button
            type="primary" shape="default" icon={<SettingOutlined />}
            size="small"
            style={{ alignItems: 'left', marginRight: '-10px', marginLeft: '3px', backgroundColor: '#339CFF', color: '#ffffff' ,cursor: 'pointer', }}
            />
        </Tooltip>
        </Col>
       </Row>
       <Row style={{ border: '1px solid #D6DBDF', padding: '10px', background: '#F8F9F9', margin: 0 }}>
       <p style={{  fontSize: '10px', margin: 0, marginLeft: '10px', marginTop: '16px', display: 'flex', alignItems: 'top' }}>
        Please ensure that all of your shipping accounts are listed here.</p>
       <p style={{  fontSize: '10px', margin: 0, marginLeft: '10px', marginTop: '16px', display: 'flex', alignItems: 'top' }}>
        *Recent shipping activity required for account numbers to populate. Once shipping activity is detected, your account number(s) will populate as well as the data within the accounts.</p>
        <p style={{  fontSize: '10px', margin: 0, marginLeft: '10px', marginTop: '16px', display: 'flex', alignItems: 'top' }}>
        If there are no account numbers showing, please click
         <Link href="/" target="_blank" style={{ textAlign: 'right', fontSize: '10px' }}>
         &nbsp;here
         </Link></p> 
       </Row>


       </Col>

  
  </>
  )
};

export default Credentials;
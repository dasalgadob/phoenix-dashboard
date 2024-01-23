'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Button, Card, Divider, Row, Col, Tooltip } from 'antd';
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



      
       </Col>

  
  </>
  )
};

export default Credentials;
import React, { useEffect, useState } from 'react';
import {  Space, Button, Modal, DatePicker, Radio, Tooltip, Row, Col, Upload, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const { TextArea } = Input;

const uploadFile = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


const RequestFreeShippingAssessment=(props) => {

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

  const [value, setValue] = useState('');

  return (
    <>
    <Tooltip placement="top" color={'#FFFFFF'} borderColor={'10px solid #C0392B'} title={<span style={{ color: '#C0392B' }}>{props.textButton}</span>}>
    <Button type="primary" onClick={showModal} style={{  background: '#F39C12', fontSize: '18px' }}>Request a Free Shipping Assessment</Button>
    </Tooltip>
    <Modal title=" " open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                    footer={[
                      <Button key="back" onClick={handleCancel}>
                        Return
                      </Button>,
                      <Button key="Send" type="primary" onClick={handleOk}>
                        Send
                      </Button>,
                      
                    ]}
                    >
                <Row style={{ display: 'flex', alignItems: 'center' }}>  
                
                  <p style={{  marginTop: '15px', fontSize: '16px',}}>
                    Our team will be in touch in a few days. If you have your latest carrier agreement, please upload it {
                       <Upload {...uploadFile}>
                       <Button icon={<UploadOutlined />}>here</Button>
                       </Upload>
                    } &nbsp;(.pdf file format)
                  </p>
                  </Row>

                  <p style={{ fontWeight: 'bold', marginTop: '15px', fontSize: '16px'}}>Additional Comments</p>
                  <Row>
                    <Col span={24}>
                  <TextArea
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
                   placeholder="Additional Comments"
                   autoSize={{
                    minRows: 3,
                    maxRows: 5,
                   }}/>
                  <br />
                  </Col>
                  </Row>
                  
                
                
                  
                </Modal>

    
  </>
  )
  }
  export default RequestFreeShippingAssessment
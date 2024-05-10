import React, { useEffect, useState } from 'react';
import {  Space, Button, Modal, DatePicker, Radio, Tooltip, Row, Col, Upload, Input, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const { TextArea } = Input;

const RequestFreeShippingAssessment=(props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    handleUpload();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const propsUpload = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([file]);
      return false;
    },
    fileList,
  };

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('file', file);
    });
    formData.append('message', value)
    formData.append('to_email', 'diego.salgado@71lbs.com')
    setUploading(true);
    // You can use any AJAX library you like
    fetch(`http://ec2-44-202-145-148.compute-1.amazonaws.com/files/file-${props.carrier}/`, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json'}
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
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
                       <Upload {...propsUpload} accept='.pdf'>
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
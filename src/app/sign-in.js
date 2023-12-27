import React from 'react';
import { Button, Checkbox, Divider, Form, Input, Row, Typography, Col } from 'antd';

const { Title } = Typography;

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const SignIn = () => {

  
 return(
<>
  <Row style={{ marginTop: '80px' }}>
  <Col span={24} >  
  <Title level={2} justify="center" align="middle">Welcome Back to 71lbs!</Title>
  </Col>
  <Col span={24} style={{ marginTop: '-2px'}}>
  <p style={{ textAlign: 'center' }}>Sign in to view your account:</p>
  </Col>
  </Row>

  <Row justify="center" align="middle" style={{ marginTop: '80px', backgroundColor: '#EBF5FB', marginLeft: '400px', marginRight: '400px' }} >
  <Divider></Divider>
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" href="/overview">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </Row>
  </>
)
};
export default SignIn;
import React, { useEffect } from 'react';
import { Button, Checkbox, Divider, Form, Input, Row, Typography, Col, Space } from 'antd';
import { useSearchParams, useRouter } from 'next/navigation'

const { Title, Link, Text } = Typography;

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const SignIn = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const router = useRouter()

  useEffect(() => {
    fetch("http://ec2-44-202-145-148.compute-1.amazonaws.com/api-queries/user", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        //setMessage(data.data);
        if(data.data[0].user){
          router.push('/at-a-glance');
        }
      })
      .catch((error) => console.log(error));
  }, []);

  
 return(
<>
  <Row style={{ marginTop: '80px' }}>
  <Col span={24} >  
  <Title level={2} justify="center" align="middle" style={{ color: '#1E88E5' }} >Welcome Back to 71lbs!</Title>
  </Col>
  <Col span={24} style={{ marginTop: '-2px'}}>
  <p style={{ textAlign: 'center', color: '#1E88E5' }}>Sign in to view your account:</p>
  </Col>
  </Row>

  <Row justify="center" align="middle" style={{ marginTop: '80px', backgroundColor: '#e6f4ff', marginLeft: '380px', marginRight: '380px' }} >
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
    <Title level={5} justify="center" align="center">Log In</Title>
    <Form.Item
      label="Email"
      name="email"
      style={{ width: '400px', marginLeft: '-50px'}}
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      style={{ width: '400px', marginLeft: '-50px'}}
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
      <Button type="primary" htmlType="submit" href="/at-a-glance" style={{ borderRadius: '13px', width: '120px', marginLeft: '5px' }}>
        Log In
      </Button>
    </Form.Item>
  </Form>
  </Row>
  <Row>
    <Col span={8}></Col>
  <Col span={8} style={{ marginTop: '0px'}}>
  <Space direction="vertical" style={{ marginLeft: '-40px'}}>
  <Text style={{ textAlign: 'center', fontSize: '10px' }}>Not a 71lbs customer?  
  <Link href="/" target="_blank" style={{ textAlign: 'right', fontSize: '10px' }}>
      &nbsp;Sign Up
    </Link>
  </Text>
  <Link href="/" target="_blank" style={{ textAlign: 'center', fontSize: '10px'}}>
      Forgot your password?
    </Link>
  <Link href="/" target="_blank" style={{ textAlign: 'center', fontSize: '10px'}}>
    Didn&apos;t receive confirmation instructions?
    </Link>      
  </Space>
  </Col>
  <Col span={8}></Col>
  </Row>
  <Divider></Divider>
  </>
)
};
export default SignIn;
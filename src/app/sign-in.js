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
      .then((response) => {
        console.log(response.status)
        if(response.status === 403){
          router.push('https://stg.71lbs.com/');
        }
        
        return response.json()})
      .then((data) => {
        //setMessage(data.data);
        if(data.data[0].user){
          localStorage.setItem('login-token', token);
          router.push('/at-a-glance');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
 return(
  <>
  </>
)
};
export default SignIn;
'use client'; // If used in Pages Router, is no need to add "use client"

import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import SignIn from './sign-in';
import { useSearchParams, useRouter } from 'next/navigation'


const Home = () => {
  const [message, setMessage] = useState(null);
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

  return (
  <div className="App">
    <SignIn/>
  </div>);
}
;

export default Home;
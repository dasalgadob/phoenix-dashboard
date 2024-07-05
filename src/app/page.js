'use client'; // If used in Pages Router, is no need to add "use client"

import React, { useState, useEffect, Suspense } from 'react';
import { Button } from 'antd';
import SignIn from './sign-in';
import { useSearchParams, useRouter } from 'next/navigation'


const Home = () => {
  const [message, setMessage] = useState(null);
  
  return (
  <Suspense>
    <SignIn/>
  </Suspense>);
}
;

export default Home;
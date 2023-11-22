'use client'; // If used in Pages Router, is no need to add "use client"

import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

const Home = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch("http://ec2-44-202-145-148.compute-1.amazonaws.com/api/", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
  <div className="App">
    <Button type="primary">{message}</Button>
  </div>);
}
;

export default Home;
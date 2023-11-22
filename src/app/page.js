'use client'; // If used in Pages Router, is no need to add "use client"

import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

const Home = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1/api/", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data[0].joke);
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
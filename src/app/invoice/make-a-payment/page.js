'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Button } from 'antd';

const Home = () => (
  <div className="App">
    <Button type="primary">make a payment</Button>
  </div>
);

export default Home;
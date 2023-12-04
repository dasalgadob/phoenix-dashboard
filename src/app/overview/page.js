'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Button } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Col, Row, Divider } from 'antd';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Last 12 Months Shipping Spend',
    },
  },
};

export const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Shipping Spend',
    },
  },
};

export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sent Shipments',
    },
  },
};

export const options3 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Average Cost',
    },
  },
};

export const options4 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Average Weight',
    },
  },
};

export const options5 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Money Refunded',
    },
  },
};

export const options6 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Number of Refunds',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Home = () => {
  
  return (
  <>
    <Row>
      <Col span={24}><Line height={80} options={options} data={data} /></Col>
    </Row>
    <Divider></Divider>
    <Row gutter={[16, 16]}>
      <Col span={8}><Line options={options1} data={data} /></Col>
      <Col span={8}><Line options={options2} data={data} /></Col>
      <Col span={8}><Line options={options3} data={data} /></Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Col span={8}><Line options={options4} data={data} /></Col>
      <Col span={8}><Line options={options5} data={data} /></Col>
      <Col span={8}><Line options={options6} data={data} /></Col>
    </Row>  
    <Divider></Divider>


  <div className="App">
    <Button type="primary">overview</Button>
  </div>
  </>
)  
}

export default Home;
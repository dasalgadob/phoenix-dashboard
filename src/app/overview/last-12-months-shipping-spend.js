'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Divider } from 'antd';
import { faker } from '@faker-js/faker';

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

const Last_12_months_shipping_spend = () => {

  return (
    <>
  <Row>
  <Col span={24}><Line height={80} options={options} data={data} /></Col>
  </Row>
  </>
)
};

export default Last_12_months_shipping_spend;
'use client'; // If used in Pages Router, is no need to add "use client"

import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Button, Dropdown, Flex, Col, Row, Table, Select, Typography  } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
      text: 'Shipping Spend',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


const Shipping_Spend = () => {

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div>
    <Row style={{marginTop: 40}}>
      <Col span={6}> 
      <Select
    labelInValue
    placeholder="Service Type"
    style={{
      width: 240,
    }}
    onChange={handleChange}
    options={[
      {
        value: 'all',
        label: 'All',
      },
      {
        value: 'air',
        label: 'Air',
      },
      {
        value: 'deferred',
        label: 'Deferred',
      },
      {
        value: 'ground',
        label: 'Ground',
      },
      {
        value: 'other',
        label: 'Other',
      },
    ]}
  />
      </Col>
    <Col span={6}>
    <Select
    labelInValue
    placeholder="Carrier"
    style={{
      width: 240,
    }}
    onChange={handleChange}
    options={[
      {
        value: 'all',
        label: 'All',
      },
      {
        value: 'fedex',
        label: 'FedEx',
      },
      {
        value: 'ups',
        label: 'UPS',
      },
    ]}
  />
    </Col>
    <Col span={6}>
    <Select
    labelInValue
    placeholder="Account #"
    style={{
      width: 240,
    }}
    onChange={handleChange}
    options={[
      {
        value: 'FUR4859F',
        label: 'FUR4859F',
      },
      {
        value: '2JZEIF28',
        label: '2JZEIF28',
      },
      {
        value: '58DIE83D',
        label: '58DIE83D',
      },
      {
        value: '34IFJ59R',
        label: '34IFJ59R',
      },
      {
        value: '9984FR79',
        label: '9984FR79',
      },
    ]}
  />
    </Col>
    <Col span={6}>
    <Select
    labelInValue
    placeholder="Zone"
    style={{
      width: 240,
    }}
    onChange={handleChange}
    options={[
      {
        value: '001',
        label: '001',
      },
      {
        value: '002',
        label: '002',
      },
      {
        value: '003',
        label: '003',
      },
      {
        value: '004',
        label: '004',
      },
      {
        value: '005',
        label: '005',
      },
    ]}
  />
    </Col>
    </Row>
    <Row style={{marginTop: 40}}>
          <Col span={24}><Line height={80} options={options} data={data} /></Col>
          </Row>

    </div>
);
};

export default Shipping_Spend;
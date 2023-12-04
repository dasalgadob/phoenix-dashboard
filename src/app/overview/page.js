'use client'; // If used in Pages Router, is no need to add "use client"

import React, { useRef, useEffect, useState } from 'react';
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
import { Col, Row } from 'antd';
import { Chart } from 'react-chartjs-2';



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
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const colors = [
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'teal',
  'blue',
  'purple',
];

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

export const data2 = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
  ],
};

function createGradient(ctx, area) {
  const colorStart = faker.random.arrayElement(colors);
  const colorMid = faker.random.arrayElement(
    colors.filter(color => color !== colorStart)
  );
  const colorEnd = faker.random.arrayElement(
    colors.filter(color => color !== colorStart && color !== colorMid)
  );

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}



const Home = () =>{
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map(dataset => ({
        ...dataset,
        borderColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(chartData);
  }, []);  


  return (
  <>
  <Line options={options} data={data} />

  <Row style={{marginTop: 40}}>
          <Col span={6}><Chart ref={chartRef} type='line' data2={chartData} /></Col>
          <Col span={6}><Chart ref={chartRef} type='line' data2={chartData} /></Col>
          <Col span={6}><Chart ref={chartRef} type='line' data2={chartData} /></Col>
  </Row>

  <Row style={{marginTop: 40}}>
          <Col span={6}><Chart ref={chartRef} type='line' data2={chartData} /></Col>
          <Col span={6}><Chart ref={chartRef} type='line' data2={chartData} /></Col>
          <Col span={6}><Chart ref={chartRef} type='line' data2={chartData} /></Col>
  </Row>
  </>)
  ;
 
  
  
}
(
  <div className="App">
    <Button type="primary">Overview</Button>
  </div>
);

export default Home;
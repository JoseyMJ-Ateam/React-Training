import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {
      label: '# of Votes',
      data: [12000, 19000, 30000, 15000, 22000, 330000,12000, 19000, 30000, 15000, 22000, 330000],
      fill: false,
      backgroundColor: 'blue',
      borderColor: 'blue',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
          gridLines:{
              display:false
          },
        ticks: {
          beginAtZero: true,
        },
      }
    ],
    xAxes:[{
        gridLines:{
            display:false
        },
  }],
  
  },
  plugins: {
    legend: {
        display: false,
    },
},
};

const LineChart = () => (
  <>
    <Line data={data} options={options} style={{marginTop:'15px'}}/>
  </>
);

export default LineChart;
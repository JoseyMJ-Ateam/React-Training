import axios from 'axios';
import React,{useEffect} from 'react';
import { Line } from 'react-chartjs-2';

// const data = {
//   labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12000, 19000, 30000, 15000, 22000, 330000,12000, 19000, 30000, 15000, 22000, 330000],
//       fill: false,
//       backgroundColor: 'blue',
//       borderColor: 'blue',
//     },
//   ],
// };


 

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

const LineChart = () => {
  const [data, setData] = React.useState([]);

      useEffect(()=>{     
        axios.get(`https://api.coincap.io/v2/assets/?limit=5`)
        .then(response => {
          const res = response.data
          setData({

            datasets: [
              {
                data: res.data.map((crypto) => crypto.priceUsd),
                label: 'This year',
                backgroundColor: 'blue',
                borderColor: 'blue',
              },
            ],
            labels: res.data.map((crypto) => crypto.name),
          })
          
        })
    } ,[])  
  return <>
  <Line data={data} options={options} />
</>
}

export default LineChart;
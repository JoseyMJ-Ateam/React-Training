import React, {useEffect} from 'react';
import { Bar } from 'react-chartjs-2';   
import {
  Divider,
  colors
} from '@material-ui/core';
import axios from 'axios';

const DashboardChart = () => {

  const [data, setData] = React.useState([]);

      useEffect(()=>{     
        axios.get(`https://api.coincap.io/v2/assets/?limit=5`)
        .then(response => {
          const res = response.data
          setData({

            datasets: [
              {
                backgroundColor: colors.indigo[500],
                data: res.data.map((crypto) => crypto.priceUsd),
                label: 'This year',
                barThickness:10
              },
            ],
            labels: res.data.map((crypto) => crypto.name),
          })
          
        })
    } ,[])   
  

  return (
      <>
          <Bar
            data={data}
            options={{
                plugins: {
                    legend: {
                        display: false,
                    },
                },
             tooltips: {
                displayColors: false
              },
              scales: {
              x:{
                  display:false
              },
              y:{
                  display:false
              }
             },
            }}
           
          />
      <Divider />      
   </>
  );
};

export default DashboardChart;


import { Bar } from 'react-chartjs-2';   
import {
  Divider,
  colors
} from '@material-ui/core';

const DashboardChart = () => {
  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        data: [18, 5, 19, 27, 29, 19, 20, 32,25,17],
        label: 'This year',
        barThickness:10
      },
    ],
    labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug', '6 Aug', '6 Aug', '6 Aug'],
  }; 

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

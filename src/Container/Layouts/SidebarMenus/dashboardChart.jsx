
    import { Bar, defaults } from 'react-chartjs-2';
    
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  colors
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const DashboardChart = (props) => {
  const theme = useTheme();
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

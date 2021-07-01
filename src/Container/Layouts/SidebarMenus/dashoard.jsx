
import { Avatar, Box, Button, useTheme,colors, Card, CardContent, CardHeader, CssBaseline, Divider, Grid, IconButton, LinearProgress, makeStyles, Paper, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import { Bar } from 'react-chartjs-2';

const useStyles = makeStyles  ({
   
});

const Dashboard = () => {
    const theme = useTheme();
    const classes = useStyles();
  
    return(
      <Grid container spacing={3}>
          <Grid item md={3}>
             <Card>
                <CardContent>
                <Grid
                    container
                    spacing={3}  
                    md={12}
                                     
                >
                    <Grid item md={9}>
                    <p
                        color="textSecondary"
                    >
                        TODAYS MONEY
                    </p>
                    <Typography
                        color="textPrimary"
                        variant="h5"
                    >
                        $24,000
                    </Typography>
                    </Grid>
                    <Grid item md={3}>
                   
                    <IconButton style={{backgroundColor:'#3f51b5', marginTop:'25px'}} >
                        <AttachMoneyIcon />
                    </IconButton>                    
                    </Grid>
                </Grid>                
                </CardContent>
             </Card>
         </Grid>
         <Grid item md={3}>
             <Card>
                <CardContent>
                <Grid
                    container
                    spacing={3} 
                    md={12}                   
                >
                    <Grid item md={9}>
                    <p
                        color="textSecondary"
                    >
                        NEW PROJECTS
                    </p>
                    <Typography
                        color="textPrimary"
                        variant="h5"
                    >
                       12
                    </Typography>
                    </Grid>
                    <Grid item md={3}>
                    <IconButton style={{backgroundColor:'#3f51b5', marginTop:'25px'}} >
                        <FolderOpenIcon />
                    </IconButton>                    
                    </Grid>
                </Grid>                
                </CardContent>
             </Card>
         </Grid>
         <Grid item md={3}>
             <Card>
                <CardContent>
                <Grid
                    container 
                    md={12} 
                >
                    <Grid item md={12}>
                    <p
                        color="textSecondary"
                    >
                        SYSTEM HEALTH
                    </p>
                    </Grid>
                    <Grid item md={3}>
                    <Typography
                        color="textPrimary"
                        variant="h5"
                    >
                        97%
                    </Typography></Grid>
                    <Grid item md={8} style={{marginTop:'10px', marginLeft:'5px'}}>
                    <LinearProgress value={97} color='primary' variant="determinate" />    
                                 
                    </Grid>
                </Grid>                
                </CardContent>
             </Card>
         </Grid>
         <Grid item md={3} >
             <Card style={{backgroundColor:'blue', color:'white'}}>
                <CardContent>
                <Grid
                    container
                    md={12}                   
                >
                    <Grid item md={9}>
                    <p
                        color="textSecondary"
                    >
                      ROI PER CUSTOMER
                    </p>
                    <Typography
                     
                        variant="h5"
                    >
                        $24,000
                    </Typography>
                    </Grid>
                    <Grid item md={3}>
                    <IconButton style={{backgroundColor:'white', marginTop:'25px'}} >
                        <AttachMoneyIcon />
                    </IconButton>                    
                    </Grid>
                </Grid>                
                </CardContent>
             </Card>
         </Grid>
         <Grid item md={3}>
             <Card>
                <CardContent>
                <Grid
                    container
                    spacing={3}  
                    md={12}
                                     
                >
                    <Grid item md={9}>
                    <Typography
                        color="textPrimary"
                        variant="h6"
                    >
                       Active users
                    </Typography>
                    <p
                        color="textSecondary"
                    >
                        Page views per second
                    </p>
                    </Grid>
                    <Grid item md={3} style={{marginTop:'25px'}}>
                   
                  <Typography variant='h4'>109</Typography>    
                  </Grid>                    
                    
                </Grid> 
                <Grid item md={12}>
                    <Bar
                    data= {{
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [{
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }}
                    options={{
                        scales: {
                            
                                    x: {
                                        display: false
                                    },
                            
                            y: {
                                beginAtZero: true
                            }
                        }
                    }} />
                    </Grid>               
                </CardContent>
             </Card>
         </Grid>
      </Grid>
      
    )
}
export default Dashboard;
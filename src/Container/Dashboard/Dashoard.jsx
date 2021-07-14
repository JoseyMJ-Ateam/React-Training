
import { Button, Card, CardContent, Divider, Grid, IconButton, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import DashboardChart from './DashboardChart';
import LineChart from '../../component/LineChart/LineChart';

const useStyles = makeStyles  ({
   iconBtn:{
         backgroundColor:'#3f51b5',
         marginTop:'25px',
         color:'white'
   },
   mrgnTop8:{
        marginTop:'8px'
   },
   mrgnTop35:{
       marginTop:'35px'
   },
   iconMoney:{
    backgroundColor:'white',
    marginTop:'25px'
   },
   iconMoneyCard:{
    backgroundColor:'blue', 
    color:'white' 
   }
});

const Dashboard = () => {
    const classes = useStyles();
 
    return(
      <Grid container spacing={3}>
          <Grid item md={3} xs={6}>
             <Card>
                <CardContent>
                <Grid container >
                    <Grid item md={8} xs={9} >
                    <p color="textSecondary">
                        TODAYS MONEY
                    </p>
                    <Typography
                        color="textPrimary"
                        variant="h5"
                    >
                        $24,000
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={3} >                   
                    <IconButton className={classes.iconBtn} >
                        <AttachMoneyIcon />
                    </IconButton>                    
                    </Grid>
                </Grid>                
                </CardContent>
             </Card>
         </Grid>
         <Grid item md={3} xs={6}>
             <Card>
                <CardContent>
                <Grid container>
                    <Grid item md={8} xs={9}>
                    <p color="textSecondary" >
                        NEW PROJECTS
                    </p>
                    <Typography
                        color="textPrimary"
                        variant="h5"
                    >
                       12
                    </Typography>
                    </Grid>
                    <Grid item md={4}  xs={3}>
                    <IconButton className={classes.iconBtn} >
                        <FolderOpenIcon />
                    </IconButton>                    
                    </Grid>
                </Grid>                
                </CardContent>
             </Card>
         </Grid>
         <Grid item md={3} xs={6}>
             <Card>
                <CardContent>
                <Grid container >
                    <Grid item xs={12}>
                    <p color="textSecondary">
                        SYSTEM HEALTH
                    </p>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography
                        color="textPrimary"
                        variant="h5"
                    >
                        97%
                    </Typography></Grid>
                    <Grid item xs={8} className={classes.mrgnTop8} >
                    <LinearProgress value={97} color='primary' variant="determinate" />
                    </Grid>
                </Grid>                
                </CardContent>
             </Card>
         </Grid>
         <Grid item md={3} xs={6}>
             <Card className={classes.iconMoneyCard}>
                <CardContent>
                <Grid container>
                    <Grid item xs={9} >
                    <p color="textSecondary">
                      ROI PER CUSTOMER
                    </p>
                    <Typography variant="h5">
                        $24,000
                    </Typography>
                    </Grid>
                    <Grid item xs={3} >
                    <IconButton className={classes.iconMoney}>
                        <AttachMoneyIcon />
                    </IconButton>                    
                    </Grid>
                </Grid>                
                </CardContent>
             </Card>
         </Grid>
         <Grid item md={3} xs={12}>
             <Card>
                <CardContent>
                <Grid
                    container                                     
                >
                    <Grid item md={8} xs={9}>
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
                    <Grid item md={4} xs={2} className={classes.mrgnTop35}>
                  <Typography variant='h4'>109</Typography>    
                  </Grid>                    
                    
                </Grid> 
                <Grid item xs={12} >
                   <DashboardChart />
                    </Grid>          
                    <Grid container >
                        <Grid item xs={10}>
                        <p>/app/projects/</p></Grid>
                        <Grid item xs={1} className={classes.mrgnTop8}>
                        <Typography variant='h6'>24</Typography>
                        </Grid>   
                        </Grid>  
                        <Divider />
                        <Grid container >
                        <Grid item xs={10}>
                        <p>/app/chat/</p></Grid>
                        <Grid item xs={1} className={classes.mrgnTop8}>
                        <Typography variant='h6'>21</Typography>
                        </Grid>   
                        </Grid> 
                        <Divider />
                        <Grid container >
                        <Grid item xs={10}>
                        <p>/cart</p></Grid>
                        <Grid item xs={1} className={classes.mrgnTop8}>
                        <Typography variant='h6'>15</Typography>
                        </Grid>   
                        </Grid> 
                        <Divider />
                        <Grid container>
                        <Grid item xs={10}>
                        <p>/cart/checkout/</p></Grid>
                        <Grid item xs={1} className={classes.mrgnTop8}>
                        <Typography variant='h6'>8</Typography>
                        </Grid>   
                        </Grid> 
                        <Divider />
                        <Grid container >
                            <Grid item xs={6} />
                            <Grid item xs={6} className={classes.mrgnTop8}>
                                <Button>See All</Button>
                            </Grid>
                        </Grid>
                </CardContent>
             </Card>
         </Grid>
       
         <Grid item md={9} xs={12}>
            <Card>
                <CardContent>
                    <Grid item xs={12} className={classes.mrgnTop8}>
                    <Typography variant='h6'>Performance Over Time</Typography>
                    </Grid>
                    <Divider />
                    <Grid item xs={12} className={classes.mrgnTop8}>
                        <LineChart />
                    </Grid>
                </CardContent>
            </Card>
         </Grid>
      </Grid>
      
    )
}
export default Dashboard;
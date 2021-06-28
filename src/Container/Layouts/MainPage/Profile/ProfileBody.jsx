import React from 'react';
import {Button, CardMedia, makeStyles, CardActionArea,Card,
    CardContent, Typography, CardActions, Grid, ListItem, IconButton} from '@material-ui/core';
import coverPic from '../../../../assets/images/profile-cover-pic.jpg';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import ChatIcon from '@material-ui/icons/Chat';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

const ProfileBody = (theme) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

    const useStyles = makeStyles({
    
        media: {
          height: 200,
        },
        cardMedia:{
          paddingTop:'56.25%',
          borderRadius:'10px'
        },
        card:{
          height: '100%',
          display:'flex',
          flexDirection:'column'
        },
        calculatorButton:{
          justifyContent:'center'
        },
       cal:{
         borderRadius:'20px'
        },
        calText:{
          fontWeight:'30px',
          marginBottom:'70px'
        },
        '& .MuiTypography-h5':{
            fontWeight:'30px'
        }
      });
      

 
      const classes = useStyles();
return (
    <Grid container spacing={3} style={{marginTop:20}}>
      <Grid md={1} />
      <Grid item md={3} >
       <ListItem>
      <PhoneIcon fontSize='small' color='disabled' style={{marginRight:10}}/>
        <Typography variant='p'>
         +91-98974637862 </Typography>
         <Typography variant='p' color='textSecondary'>(Official)</Typography>
         </ListItem>
         <ListItem>
            <PhoneIcon color='disabled' style={{marginRight:10}}/>
              <Typography variant='p'>
              +91-98974637862 </Typography>
              <Typography variant='p' color='textSecondary'>(Mobile)</Typography>
         </ListItem>
         <ListItem>
            <IconButton>
               <MailIcon fontSize='small' color='disabled'/>
          </IconButton>  
              <a href="mailto:someone@example.com" target="_top">someone@example.com</a>
           </ListItem>      
         <Button 
         variant='contained' 
         color='secondary' 
         style={{color:'white', borderRadius:20, margin:'20px 0px'}} 
         fullWidth
         startIcon={<ChatIcon />}>Chat</Button>
         <div style={{display:'flex', marginTop:'20px'}}>
         <Typography variant='h2'>4.5
            </Typography>
            <div style={{display:'flex', flexDirection:'column',marginTop:'10px', marginLeft:'20px'}}>
            <div >
            <StarIcon style={{color:'yellow'}}/>
           <StarIcon style={{color:'yellow'}}/>
           <StarIcon style={{color:'yellow'}}/>
           <StarIcon style={{color:'yellow'}}/>
           <StarHalfIcon style={{color:'yellow'}}/></div>
           <div>      
            <Typography variant='p' >103 reviews</Typography>
            </div>         
            </div>
         </div>        
      </Grid>
      <Grid item md={4} >   
          <CardMedia 
          className={classes.cardMedia}
          image={coverPic}
          title='image title' />             
        </Grid>
        <Grid item md={3}>
        <Card variant="outlined" style={{textAlign:'center', padding:'25px',borderRadius:'10px'}}>
      <CardContent>
        <Typography variant='h5'  className={classes.calText}>
          Loan Calculator
        </Typography>
        <Typography variant='p'>
          Get great rates and an effortless close
        </Typography>
      </CardContent>
      <CardActions className={classes.calculatorButton}>
        <Button size="small" variant='outlined' color='secondary' className={classes.cal} >Calculator</Button>
      </CardActions>
    </Card>
        </Grid>

        <Grid md={1} />
        <Grid md={4} />
<Grid item md={7}>
<MuiPickersUtilsProvider utils={DateFnsUtils}>

    <KeyboardDatePicker
      label="Material Date Picker"
      variant="static"
      value={selectedDate}
      onChange={handleDateChange}
    />      
      </MuiPickersUtilsProvider>
</Grid>
<Grid md={1} />
    </Grid>
)
}

export default ProfileBody;
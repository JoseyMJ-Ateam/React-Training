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
            fontWeight:'10px'
        },
        calender:{
          justifyContent:'center',
          '& .MuiPickersBasePicker-pickerView':{
            justifyContent:'center',
            display:'flex',
            alignItem:'center',
            maxWidth:'700px'
          },
        },
        centerItems:{
          display:'flex',
          justifyContent:'center'
        }
      });
      

 
      const classes = useStyles();
return (
    <Grid container spacing={3} style={{marginTop:20}}>
      <Grid sm={1} xs={0}  />
      <Grid item md={3} xs={12} >
       <ListItem className={classes.centerItems}>
      <PhoneIcon fontSize='small' color='disabled' style={{marginRight:10}}/>
        <Typography variant='p'>
         +91-98974637862 </Typography>
         <Typography variant='p' color='textSecondary'>(Official)</Typography>
         </ListItem>
         <ListItem className={classes.centerItems}>
            <PhoneIcon color='disabled' style={{marginRight:10}}/>
              <Typography variant='p'>
              +91-98974637862 </Typography>
              <Typography variant='p' color='textSecondary'>(Mobile)</Typography>
         </ListItem>
         <ListItem className={classes.centerItems}>
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
         <div style={{marginTop:'20px'}} className={classes.centerItems}>
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
      <Grid item md={4} xs={12}>   
          <CardMedia 
          className={classes.cardMedia}
          image={coverPic}
          title='image title' />             
        </Grid>
        <Grid item md={3} xs={12}>
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

        <Grid md={1} xs={0}/>
        <Grid md={4} xs={0}/>
<Grid item md={7} xs={12}>
<MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.calender}>
<div className={classes.calender}>
    <KeyboardDatePicker
      label="Material Date Picker"
      variant="static"
      value={selectedDate}
      onChange={handleDateChange}
      
    />
    </div>      
      </MuiPickersUtilsProvider>
</Grid>
<Grid md={1} xs={0}/>
    </Grid>
)
}

export default ProfileBody;
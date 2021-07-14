import React from 'react';
import {  Button, 
          CardMedia, 
          makeStyles,
          Card,
          CardContent, 
          Typography, 
          CardActions, 
          Grid, 
          ListItem, 
          IconButton  } from '@material-ui/core';
import coverPic from '../../assets/images/profile-cover-pic.jpg';
import PhoneIcon from '@material-ui/icons/Phone';
import ChatIcon from '@material-ui/icons/Chat';
import MailIcon from '@material-ui/icons/Mail';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import {
          MuiPickersUtilsProvider,
          KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

const ProfileBody = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
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
            maxWidth:'905px'
          },
          '& .MuiPickersDatePickerRoot-toolbar':{
            alignItems:'center'
          },
          '& .MuiPickersCalendar-week':{
            display:'flex',
            justifyContent:'space-around'
          },
          '& .MuiPickersCalendarHeader-daysHeader':{
            justifyContent:'space-around'
          },
          '& .MuiTypography-caption': {
            fontSize:'1.75rem'
          }
        },
        centerItems:{
          display:'flex',
          justifyContent:'center',
        },
        gridContainer:{
          marginTop:20
        },
        phoneIcon:{
          marginRight:10
        },
        btn:{
          color:'white', 
          borderRadius:20, 
          margin:'20px 0px'
        },
        starIconContainer:{
          display:'flex', 
          flexDirection:'column',
          marginTop:'10px', 
          marginLeft:'20px'
        },
        starIcon:{
          color:'yellow'
        },
        calculatorContainer:{
          textAlign:'center', 
          padding:'25px',
          borderRadius:'10px'
        },
      });
      
      const classes = useStyles();
return (
    <Grid container spacing={3} className={classes.gridContainer}>
      <Grid item sm={1} xs={false}  />
      <Grid item md={3} xs={12} >
       <ListItem className={classes.centerItems}>
       <PhoneIcon color='disabled' className={classes.phoneIcon} />
        <p>+91-98974637862</p>         
         <p color='textSecondary'>(Official)</p>
         </ListItem>
         <ListItem className={classes.centerItems}>
            <PhoneIcon color='disabled' className={classes.phoneIcon} />
              <p> +91-98974637862 </p>
              <p color='textSecondary'>(Mobile)</p>
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
        className={classes.btn}
         fullWidth
         startIcon={<ChatIcon />}>Chat</Button>
         <div className={classes.centerItems}>
         <Typography variant='h2'>4.5
            </Typography>
            <div className={classes.starIconContainer}>
            <div >
            <StarIcon className={classes.starIcon}/>
           <StarIcon className={classes.starIcon}/>
           <StarIcon className={classes.starIcon}/>
           <StarIcon className={classes.starIcon}/>
           <StarHalfIcon className={classes.starIcon} /></div>
           <div>      
            <p>103 reviews</p>
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
        <Card variant="outlined" className={classes.calculatorContainer}>
      <CardContent>
        <Typography variant='h5'  className={classes.calText}>
          Loan Calculator
        </Typography>
        <p>
          Get great rates and an effortless close
        </p>
      </CardContent>
      <CardActions className={classes.calculatorButton}>
        <Button size="small" variant='outlined' color='secondary' className={classes.cal} >Calculator</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item md={1} xs={false}/>
        <Grid item md={4} xs={false}/>
      <Grid item md={7} xs={12}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
      <Grid item md={1} xs={false}/>
  </Grid>
)
}

export default ProfileBody;
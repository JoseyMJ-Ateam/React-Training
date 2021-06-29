import profilePic from '../../../../assets/images/profile-pic.jpg';
import { IconButton, makeStyles,Avatar, Grid, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Title = () => {
    const useStyles = makeStyles((theme) => ({
    
        media: {
          height: 230,
            
        },
        media2:{
            display: 'none',
    [theme.breakpoints.up('md')]: {
        display:'block',
            height:200,
            width:180,
            marginLeft:150,
            marginTop:-100
    },
        },
        mainTitle:{
            marginTop:'20px',
            textAlign:'left',
            [theme.breakpoints.down('sm')]: {
                marginTop:'20px',
            textAlign:'center',
        },
    },
        para:{
            fontSize:12,
                        
        }
      }));

      const classes = useStyles();
    return(

        <Paper elevation={0} className={classes.media}>
            <Grid container >
            <Avatar src={profilePic} alt='Profile-pic' className={classes.media2} />
            <Grid item style={{marginLeft:30}}>
        <Typography variant='h3' className={classes.mainTitle}>Kevin Smith</Typography>
        <Typography variant='h5'>Advisor and consultant at stripe Inc</Typography>
        </Grid>
        <Grid item container xs={12}>
        <Grid item md={3} xs={false}/>
          
        <Grid item style={{display:'flex'}}>
            <Typography variant='p' className={classes.para}>
        <IconButton >
            <LocationOnIcon style={{fontSize:20}}/>
        </IconButton>
        <sub>Saint-Petersburg, Russia</sub></Typography>
        <Typography className={classes.para}>
        <IconButton>
            <FacebookIcon style={{fontSize:20}}/>
        </IconButton>
        <sub>kevinsmith55</sub></Typography>
        </Grid>
        <Grid item style={{display:'flex'}}>
        <Typography className={classes.para}>
        <IconButton>
            <LinkedInIcon style={{fontSize:20}}/>
        </IconButton>
        <sub>kevin_smith</sub></Typography>
        <Typography className={classes.para}>
        <IconButton>
            <TwitterIcon style={{fontSize:20}}/>
        </IconButton>
        <sub>kevin_smith</sub></Typography>
        </Grid>
        </Grid>
        </Grid>
      </Paper>
    )
}

export default Title;
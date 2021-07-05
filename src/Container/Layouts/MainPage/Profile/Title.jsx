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
                        
        },
        socialIcons:{
            display:'flex'
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
          
        <Grid item className={classes.socialIcons}>
            <p className={classes.para}>
        <IconButton >
            <LocationOnIcon fontSize='small'/>
        </IconButton>
        <sub>Saint-Petersburg, Russia</sub></p>
        <p className={classes.para}>
        <IconButton>
            <FacebookIcon fontSize='small' />
        </IconButton>
        <sub>kevinsmith55</sub></p>
        </Grid>
        <Grid item className={classes.socialIcons}>
        <p className={classes.para}>
        <IconButton>
            <LinkedInIcon fontSize='small'/>
        </IconButton>
        <sub>kevin_smith</sub></p>
        <p className={classes.para}>
        <IconButton>
            <TwitterIcon fontSize='small'/>
        </IconButton>
        <sub>kevin_smith</sub></p>
        </Grid>
        </Grid>
        </Grid>
      </Paper>
    )
}

export default Title;
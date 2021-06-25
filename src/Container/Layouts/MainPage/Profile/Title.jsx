import profilePic from '../../../../assets/images/profile-pic.jpg';
import { IconButton, makeStyles,Avatar } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Title = () => {
    const useStyles = makeStyles({
    
        media: {
          height: 170,
            lineHeight:1
        },
        media2:{
            height:200,
            width:180,
            marginLeft:150,
            marginTop:-100
        },
        para:{
            fontSize:12,
                        
        }
      });

      const classes = useStyles();
    return(

        <Paper elevation={0} className={classes.media}>
            <div style={{display:'flex'}}>
            <Avatar src={profilePic} alt='Profile-pic' className={classes.media2} />
            <div style={{marginLeft:30}}>
        <h2>Kevin Smith</h2>
        <h5>Advisor and consultant at stripe Inc</h5>
        
        <div style={{display:'flex', marginLeft:-20, marginTop:-15}}>
        
            <p className={classes.para}>
        <IconButton >
            <LocationOnIcon style={{fontSize:20, margin:0}}/>
        </IconButton>
        <sub>Saint-Petersburg, Russia</sub></p>
        <p className={classes.para}>
        <IconButton>
            <FacebookIcon style={{fontSize:20}}/>
        </IconButton>
        <sub>kevinsmith55</sub></p>
        <p className={classes.para}>
        <IconButton>
            <LinkedInIcon style={{fontSize:20}}/>
        </IconButton>
        <sub>kevin_smith</sub></p>
        <p className={classes.para}>
        <IconButton>
            <TwitterIcon style={{fontSize:20}}/>
        </IconButton>
        <sub>kevin_smith</sub></p>
        </div>
        </div>
        </div>
      </Paper>
    )
}

export default Title;
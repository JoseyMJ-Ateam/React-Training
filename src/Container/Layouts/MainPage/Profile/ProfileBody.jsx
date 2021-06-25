
import {Button, CardMedia, makeStyles, CardActionArea,Card,
    CardContent, Typography, CardActions} from '@material-ui/core';
import coverPic from '../../../../assets/images/profile-cover-pic.jpg';
import main from '../../../../assets/images/profile-pic.jpg';

const ProfileBody = () => {
    const useStyles = makeStyles({
    
        media: {
          height: 200,
        },
      });
      
      const classes = useStyles();
return (
    <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <div>
            <p>+91-98978312823</p>
            <p>+91-98978312823</p>
            <p>phone@gmail.com</p>
           <Button>Chat</Button>
        </div>
        <div>
      <img className={classes.media} src={coverPic} alt='cover' />
        </div>
        <div style={{display:'flex'}}>
            <Card style={{padding:50, display:'flex', flexDirection:'column'}}>
      <CardActionArea>
        <h4 style={{textAlign:'center'}}>Loan Calculator</h4>
        <p style={{textAlign:'center'}}>Get great rates and an effortless close</p>
      </CardActionArea>
        <Button size="small" color="primary" style={{textAlign:'center'}}>
         Calculator
        </Button>
    </Card>
        </div>
    </div>
)
}

export default ProfileBody;
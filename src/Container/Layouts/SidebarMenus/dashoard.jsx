
import { CssBaseline, makeStyles } from '@material-ui/core';

const useStyles = makeStyles  ({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        display:'flex',
        justifyContent:'center'
    }
});

const Dashboard = () => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
        <h1>Dashboard</h1>
        <CssBaseline />
        </div>
    )
}
export default Dashboard;
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Grid, 
          makeStyles,
          Card, 
          Typography, 
          Button, 
          TextField } from '@material-ui/core';
import {getUserDetailsBegins,
        getUserDetailsSuccess,
        getUserDetailsFail,
        updateUserDetailsData } from '../../../Redux/actions/userDetailsAction';

        // const userDetails = useSelector(state=>state.userDetailsReducer.users);
  // console.log(userDetails)
const useStyles = makeStyles(() => ({
    container: {
      direction:"column",
      alignItems:"center",
      justifyContent:"center" ,
      minHeight:450 
    },
    
    cardContainer:{
        maxWidth:600,
        minHeight:500,
        display:'flex',
        boxShadow: "3px 3px 3px 3px #9E9E9E"
      },  
    
    gridItem:{
      marginLeft:50,
      marginTop:50,
      marginBottom:50,
      display:'flex',
    },
    btn: {
      justifyContent:'center',
    
      position:'absolute',
      left:150 
    },
    formContainer: {
      marginTop:50,
      minHeight:'200px',
      maxHeight: '90vh' ,
      position: 'relative'
    },
    error: {
        color: 'red',
        marginLeft:50
    },
    imgContainer: {
        margin:30,
        display:'flex',
        alignItems:'center'
    },
    title:{
      display:'flex', 
      maxWidth:400
    }
}))

const UserDetails = (props) => {
  const [loading, setLoading] = useState(true)
  const [selectedUser, setSelectedUser] = useState({});

  const userDetails = useSelector(state=>state.userDetailsReducer.users);
  console.log(userDetails)
  console.log(selectedUser)
  const dispatch = useDispatch();
  
useEffect(()=>{
  dispatch(getUserDetailsBegins())
    fetch('https://jsonplaceholder.typicode.com/posts/' + props.match.params.id)
      .then(res => res.json())
      .then(response => {
        dispatch(getUserDetailsSuccess(response))
        setSelectedUser(response);
        setLoading(false);
      })
      .catch(error =>{
       dispatch(getUserDetailsFail(error)) 
      console.log(error)
      });

},[])

  const handleUser = (e) => {
    e.preventDefault();
    axios.put('https://jsonplaceholder.typicode.com/posts/' + props.match.params.id, selectedUser)
    .then(res => {
      dispatch(updateUserDetailsData(res))
    })

  }

  const handleTitle = (e) =>{
    setSelectedUser({...selectedUser, title: e.target.value});
}

  const classes = useStyles();
  if(loading){
    <h2>Loading...</h2>
  }


  return (
      <Grid 
        container 
        className={classes.container}
       >
        <Card className={classes.cardContainer}>
          <Card className={classes.imgContainer}>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU" 
            alt="Profile-img"  />
          </Card>
          <Card>
            <form className={classes.formContainer} >
                <Typography variant="h5" className={classes.title}>{selectedUser.title} </Typography>
                <Grid item className={classes.gridItem} >
                    <Typography >Id</Typography>
                    <TextField
                    id="email"
                    name="email"   
                    value={selectedUser.id}
                      style={{marginLeft:30}}           
                    />
                </Grid>
                <Grid item className={classes.gridItem}>
                <Typography >Title</Typography>
                    <TextField
                    id="title"
                    name="title"
                    style={{marginLeft:10}} 
                    value={selectedUser.title}
                    onChange={handleTitle}                       
                    />
                </Grid>
                <Grid item className={classes.btn}>
                    <Button color="primary" variant="contained" type="submit" onClick={handleUser}>
                    Update
                    </Button>                   
                </Grid>
            </form>
            </Card>
            </Card>
         </Grid>
  );
};

export default UserDetails;
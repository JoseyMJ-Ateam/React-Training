import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, makeStyles,Card, Typography } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import { useEffect } from 'react';
import { PinDropSharp } from '@material-ui/icons';
import { useState } from 'react';
import axios from 'axios';

const useStyles = makeStyles(() => ({
    container: {
      direction:"column",
      alignItems:"center",
      justifyContent:"center" ,
      height:500   
    },
    cardContainer:{
        width:600,
        height:400,
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
    }
}))

const UserDetails = (props) => {
  const [loading, setLoading] = useState(true)
  const [selectedUser, setSelectedUser] = useState({});
  
//   const selectTitle = selectedUser.title;
//   const [newTitle, setNewTitle] = useState(selectTitle);
// console.log(selectedUser.title)
// console.log(selectTitle)
// console.log(newTitle)

useEffect(()=>{
 
    fetch('https://jsonplaceholder.typicode.com/posts/' + props.match.params.id)
      .then(res => res.json())
      .then(response => {
        setSelectedUser(response);
        setLoading(false);
        console.log(response)
      })
      .catch(error => console.log(error));

},[])

  const handleUser = (e) => {
    e.preventDefault();
    axios.put('https://jsonplaceholder.typicode.com/posts/' + props.match.params.id, selectedUser)
    .then(res => console.log(res))

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
          <Card style={{margin:30}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU" alt="" />
          </Card>
         

          <Card>
            <form className={classes.formContainer} >
            
                <Typography variant="h5">{selectedUser.title} </Typography>
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
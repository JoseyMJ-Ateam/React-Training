import { useState, useEffect } from 'react';
import axios from '../../../axios';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, 
          makeStyles,
          Card, 
          Typography, 
          Button, 
          TextField,
          CircularProgress,
          Breadcrumbs} from '@material-ui/core';
import {getPostDetailsBegins,
        getPostDetailsSuccess,
        getPostDetailsFail,
        updatePostDetailsSuccess,
        updatePostDetailsFail,
        updatePostDetailsBegins} from '../../../redux/actions/postDetailsAction';
import { Link, withRouter } from 'react-router-dom';

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
      },
      loaderClass: {
        position:'absolute',
        top:'50%',
        left:'50%'
      }
    }))
    
    const UserDetails = (props) => {
      const [selectedPost, setSelectedPost] = useState({});
      const dispatch = useDispatch();
      const isLoading = useSelector(state => state.postDetailsReducer.isLoading)

useEffect(()=>{
  dispatch(getPostDetailsBegins())
    axios.get('posts/' + props.match.params.id)
      .then(response => {
        dispatch(getPostDetailsSuccess(response.data))
        setSelectedPost(response.data);
      })
      .catch(error =>{
       dispatch(getPostDetailsFail(error));
      });
},[])

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(updatePostDetailsBegins())
    axios.put('posts/' + props.match.params.id, selectedPost)
    .then(res => {
      dispatch(updatePostDetailsSuccess(res))
    })
    .catch(error =>{
      dispatch(updatePostDetailsFail(error));
    })

  }

  const handleTitle = (e) =>{
    setSelectedPost({...selectedPost, title: e.target.value});
}

  const classes = useStyles();
  if(isLoading){
    return  <div className={classes.loaderClass}><CircularProgress /></div>
  }


  return (
    <>
        <Breadcrumbs aria-label="breadcrumb">
  <Link color="inherit" to="/dashboard/posts" >
    Posts
  </Link>
  <p
    color="textPrimary"
    aria-current="page">
    Post Details
  </p>
</Breadcrumbs>
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
                <Typography variant="h5" className={classes.title}>{selectedPost.title} </Typography>
                <Grid item className={classes.gridItem} >
                    <Typography >Id</Typography>
                    <TextField
                    id="email"
                    name="email"   
                    value={selectedPost.id}
                      style={{marginLeft:30}}           
                    />
                </Grid>
                <Grid item className={classes.gridItem}>
                <Typography >Title</Typography>
                    <TextField
                    type="text"
                    id="title"
                    name="title"
                    style={{marginLeft:10}} 
                    value={selectedPost.title}
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
         </>
  );
};

export default withRouter(UserDetails);
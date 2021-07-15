import { useState, useEffect } from 'react';
import axios from '../../axios';
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
        updatePostDetailsBegins} from '../../redux/actions/postDetailsAction';
import { Link, withRouter } from 'react-router-dom';
import { setSnackbar } from '../../redux/reducers/snackbarReducer';
import CustomizedSnackbars from '../../component/SnackBar/Snackbar';
import ConfirmDialog from '../../component/Notifications/ConfirmDialog';
import { setNotify } from '../../redux/reducers/notifyReducer';

        const useStyles = makeStyles(() => ({
          container: {
            display:'flex',
            justifyContent:"center" ,
            minHeight:'600px',
            backgroundColor:'#FFFF',
            width:'100%'
          },
          
          gridItem:{
            padding:30,
            display:'flex',
          },
          btn: {
            justifyContent:'center',
            display:'flex',
            marginTop:'20px'
    },
      imgContainer: {
        width:'80%', 
        height:'80%',
        padding:20
      },
      title:{
        display:'flex',
        
      },
      loaderClass: {
        position:'absolute',
        top:'50%',
        left:'50%'
      }
    }))
    
    const UserDetails = (props) => {
      const [selectedPost, setSelectedPost] = useState({id:'', title:''});
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
            dispatch(setSnackbar(true,'error','Error : Not Updated'))
            });
      },[])

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(setNotify(true, 'Are you sure to update ?'))

  }

  const notify = () => {
    dispatch(updatePostDetailsBegins())
    axios.put('posts/' + props.match.params.id, selectedPost)
    .then(res => {
      dispatch(updatePostDetailsSuccess(res))
      dispatch(setSnackbar(true, 'success', 'Updated Successfully'))
    })
    .catch(error =>{
      dispatch(updatePostDetailsFail(error));
    })
    dispatch(setNotify(false))
  }

  const handleTitle = (e) =>{
    setSelectedPost({...selectedPost, title: e.target.value});
}

  const classes = useStyles();
  if(isLoading){
    return  <div className={classes.loaderClass}><CircularProgress /></div>
  }


  return (
    <Card style={{backgroundColor:'#FFFF'}}>
        <Breadcrumbs aria-label="breadcrumb" style={{padding:'20px'}}>
  <Link color="inherit" to="/dashboard/posts" >
    Posts
  </Link>
  <p
    color="textPrimary"
    aria-current="page">
    Post Details
  </p>
</Breadcrumbs>
      <Grid container className={classes.container}>
        <Grid item md={4}>       
            <img 
            className={classes.imgContainer}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU" 
            alt="Profile-img"  />      
          </Grid>
            <Grid item md={8}>
            <form >
                <Typography variant="h5">{selectedPost.title} </Typography>
                <Grid style={{marginTop:50}} />
                <Grid item className={classes.gridItem} >
                   <TextField
                   type="text"
                   variant='outlined'
                   value={selectedPost.id}
                   label='ID'
                   fullWidth     
                   />
                </Grid>
                <Grid item className={classes.gridItem}>
               
                    <TextField
                    type="text" 
                    value={selectedPost.title}
                    onChange={handleTitle} 
                    variant='outlined'
                    label='Title'
                    fullWidth                           
                    />
                </Grid>
                <Grid item className={classes.btn}>
                    <Button color="primary" variant="contained" type="submit" onClick={handleUser}>
                    Update
                    </Button>                   
                </Grid>
            </form>
            <ConfirmDialog onClick={notify}/>
            <CustomizedSnackbars />
            </Grid>
            </Grid>
         </Card>
  );
};

export default withRouter(UserDetails);
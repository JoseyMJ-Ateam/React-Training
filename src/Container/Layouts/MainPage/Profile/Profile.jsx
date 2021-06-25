import React from 'react';
import coverPic from '../../../../assets/images/profile-cover-pic.jpg';
import { CssBaseline, CardMedia } from '@material-ui/core';
import TopBar from './TopBar';
import ProfileBody from './ProfileBody';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';

const Profile = () => {
  const useStyles = makeStyles({
    
    media: {
      height: 200,
    },
  });
  
  const classes = useStyles();
  return(
    <>
    <TopBar />
    <CardMedia 
    className={classes.media}
      image = {coverPic}
      title='Cover Pic' />
      <Title />
      <ProfileBody />
    <CssBaseline />
    </>
  )
}
export default Profile;

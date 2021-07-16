import React, { useState } from 'react';
import { AppBar, 
        CssBaseline,
        Divider,
        Drawer,
        IconButton,
        List,
        ListItem,
        ListItemIcon,
        Button,
        Toolbar,
        makeStyles,
        useTheme,
        Typography, 
        } from '@material-ui/core';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Route } from 'react-router-dom';
import GroupIcon from '@material-ui/icons/Group';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import PrimarySearchAppBar from './AppBar';
import Users from '../Users/Users';
import Album from '../Album/Album';
import UserDetails from '../UserDetails/UserDetails';
import Dashboard from '../Dashboard/Dashoard';
import clsx from 'clsx';
import News from '../News/News';
import StripeForm from '../Stripe/StrpeForm';
import StripeSuccessUrl from '../Stripe/StripeSuccessUrl';
import UserParent from '../UserComponent/UserParent';
import Settings from '../Settings';
import Calculator from '../Calculator';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
         
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    
      
    }),
     marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  drawer: {
    // [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    // },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
 
}));

function MainPage() {
  const classes = useStyles();
  const [title, setTitle] = useState();
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();

  let history = useHistory();
   const userClick = () => { 
      history.push("/dashboard/users"); 
      setTitle('Users');     
  }

  const albumClick = () => {
    
    history.push("/dashboard/album"); 
    setTitle('Album');      
  }

  const newsClick = () => {
    
    history.push("/dashboard/news"); 
    setTitle('News');      
  }

  const postClick = () => {
    
    history.push("/dashboard/posts"); 
    setTitle('Posts');      
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDashboard = () => {
    setTitle('Dashboard');
    history.push("/dashboard"); 
  }

  const handleCalculator = () => {
    setTitle('Calculator');
    history.push("/dashboard/calculator"); 
  }

  const stripeClick = () => {
    setTitle('Payment Method');
    history.push("/dashboard/payment"); 
  }

  const drawer = (
    <>
    <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>  
        <ListItem button onClick={handleDashboard}>
        <ListItemIcon> <DashboardIcon /></ListItemIcon>
              <Button >Dashboard</Button>
            </ListItem>
            <ListItem button onClick={postClick}>
              <ListItemIcon> <GroupIcon /></ListItemIcon>
              <Button >Posts</Button>
            </ListItem>
            <ListItem button onClick={albumClick}>
              <ListItemIcon> <PhotoAlbumIcon /></ListItemIcon>
              <Button >Album</Button>
            </ListItem>
            <ListItem button onClick={newsClick}>
              <ListItemIcon> <PhotoAlbumIcon /></ListItemIcon>
              <Button >News</Button>
            </ListItem>
            <ListItem button onClick={userClick}>
              <ListItemIcon> <PhotoAlbumIcon /></ListItemIcon>
              <Button >Users</Button>
            </ListItem>
            <ListItem button onClick={stripeClick}>
              <ListItemIcon> <PhotoAlbumIcon /></ListItemIcon>
              <Button >Payment Form</Button>
            </ListItem>
            <ListItem button onClick={handleCalculator}>
              <ListItemIcon> <PhotoAlbumIcon /></ListItemIcon>
              <Button >Calculator</Button>
            </ListItem>
        </List>  
        </>
  )
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
     { title || 'Dashboard'}
    </Typography>
          <PrimarySearchAppBar />
        </Toolbar>
      </AppBar>
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
       {drawer} 
      </Drawer>
      
      <main  className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div className={classes.drawerHeader} />
        <Route path = '/dashboard/album' ><Album/></Route>  
        <Route path = '/dashboard/calculator' ><Calculator /></Route>  
        <Route path = '/dashboard/users' ><UserParent /></Route>  
        <Route path = '/dashboard/payment' ><StripeForm /></Route>  
        <Route path='/dashboard/settings'><Settings /></Route>
        <Route path = '/dashboard/thankyou' ><StripeSuccessUrl /></Route>  
        <Route path = '/dashboard/news' ><News/></Route>  
         <Route path = '/dashboard' exact ><Dashboard /></Route>
          <Route path = '/dashboard/posts' exact ><Users /></Route>
        <Route path='/dashboard/posts/:id'><UserDetails /></Route>
      </main>
    </div>
  );
}

const mapStateToProps = state => { 
  return {
    user : state.authReducer.isLogged   
  }
}


export default compose(withRouter, connect(mapStateToProps))(MainPage);
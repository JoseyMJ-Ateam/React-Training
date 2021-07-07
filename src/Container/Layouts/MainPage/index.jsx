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
import PrimarySearchAppBar from '../MainPage/AppBar';
import Users from '../SidebarMenus/Users';
import Album from '../SidebarMenus/Album';
import UserDetails from '../SidebarMenus/UserDetails';
import Dashboard from '../SidebarMenus/Dashoard';
import clsx from 'clsx';
import News from '../SidebarMenus/News';

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
    marginLeft: drawerWidth,
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
            <ListItem button onClick={userClick}>
              <ListItemIcon> <GroupIcon /></ListItemIcon>
              <Button >Users</Button>
            </ListItem>
            <ListItem button onClick={albumClick}>
              <ListItemIcon> <PhotoAlbumIcon /></ListItemIcon>
              <Button >Album</Button>
            </ListItem>
            <ListItem button onClick={newsClick}>
              <ListItemIcon> <PhotoAlbumIcon /></ListItemIcon>
              <Button >News</Button>
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
     { title }
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
        <Route path = '/dashboard/album' component ={Album} />  
        <Route path = '/dashboard/news' component ={News} />  
         <Route path = '/dashboard' exact component={Dashboard} />
          <Route path = '/dashboard/users' exact component ={Users} />
        <Route path='/dashboard/users/:id'  component={UserDetails} />
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
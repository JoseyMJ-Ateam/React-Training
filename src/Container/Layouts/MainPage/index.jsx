import React, { useState } from 'react';
import { AppBar, 
        CssBaseline,
        Divider,
        Drawer,
        Hidden,
        IconButton,
        List,
        ListItem,
        ListItemIcon,
        Button,
        Toolbar,
        makeStyles,
        Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Route } from 'react-router-dom';
import GroupIcon from '@material-ui/icons/Group';
import MenuIcon from '@material-ui/icons/Menu';

import PrimarySearchAppBar from '../MainPage/AppBar';
import Users from '../SidebarMenus/Users';
import Album from '../SidebarMenus/Album';
import UserDetails from '../SidebarMenus/UserDetails';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function MainPage(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [title, setTitle] = useState();

  let history = useHistory();
   const userClick = () => { 
      history.push("/dashboard/users"); 
      setTitle('Users');     
  }

  const albumClick = () => {
    setTitle("Album");
    history.push("/dashboard/album"); 
    setTitle('Album');      
}

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>  
            <ListItem button onClick={userClick}>
              <ListItemIcon> <GroupIcon /></ListItemIcon>
              <Button >Users</Button>
            </ListItem>
            <ListItem button onClick={albumClick}>
              <ListItemIcon> <GroupIcon /></ListItemIcon>
              <Button >Album</Button>
            </ListItem>
        </List>  
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
           <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton> 
          <Typography variant="h6" color="inherit">
     { title || 'Dashboard'}
    </Typography>
          <PrimarySearchAppBar />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route path = '/dashboard/album' component ={Album} />  
         
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

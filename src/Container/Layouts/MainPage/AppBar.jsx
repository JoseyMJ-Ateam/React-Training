import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import { compose } from 'redux';
import { useHistory, withRouter } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

 function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    props.onLogOut();
    localStorage.clear();
  };
  
  let history = useHistory();

  const handleSettings = () => {
    history.push("/dashboard/settings")
  }
  
    const handleProfile = () =>{
      history.push("/dashboard/profile");
    }
  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
       onClose={()=>setAnchorEl(null)}
    >
      <MenuItem onClick={handleMenuClose}><IconButton><ExitToAppIcon /></IconButton>Logout</MenuItem>
     
      <MenuItem onClick={handleProfile}>
      <IconButton><PersonIcon /></IconButton>
      My Profile
      </MenuItem>
      <MenuItem onClick={handleSettings}>
      <IconButton><SettingsIcon /></IconButton>
      Settings
      </MenuItem>
    </Menu>
  );


  return (
    <div className={classes.grow}>
    
        <Toolbar>     
      
          <div className={classes.grow} />      
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>    
        </Toolbar>
    
      {renderMenu}
    </div>
  );
}

const mapDispatchToProps = dispatch => {
    return {
        onLogOut : () => dispatch({type : 'LOGOUT'})
    }
}

export default compose(withRouter, connect(null, mapDispatchToProps))(PrimarySearchAppBar);
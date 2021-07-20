import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar,
         Toolbar,
         Typography,
         InputBase,
         Button, 
         Breadcrumbs} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      color:'black',
      marginLeft:'10%'
    },
  },
  signupBtn:{
    borderRadius:'20px',
    [theme.breakpoints.down('xs')]: {
      width:'150px'
    },
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
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      color:'black'
    },
  },

  whiteBgApp:{
    backgroundColor:'white'
  }
}));

const TopBar = () => {
  const classes = useStyles();
return(
    <div className={classes.grow}>
         <Breadcrumbs aria-label="breadcrumb">
  <Link color="inherit" to="/dashboard" >
    Dashboard
  </Link>
  <p
    color="textPrimary"
    aria-current="page">
    Profile
  </p>
</Breadcrumbs>
      <AppBar position="static" className={classes.whiteBgApp} elevation={0}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            adviser:
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon className={classes.inputRoot} fontSize='small' />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <Button className={classes.signupBtn} variant='outlined'>Sign Up</Button>          
        </Toolbar>
      </AppBar>
    </div>
  );
}



export default TopBar;
import React, { useEffect } from 'react';
import {
  makeStyles,
  TablePagination,
  Table, TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  Grid
} from '@material-ui/core';
import axios from '../../axios';
import {  getPostDataBegins, 
          getPostDataSuccess, 
          getPostDataFail, 
          deletePostSuccess, 
          postSelectedData, 
          deletePostFail,
          deletePostBegins} from '../../redux/actions/postAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setSnackbar } from '../../redux/reducers/snackbarReducer';
import CustomizedSnackbars from '../../component/SnackBar/Snackbar';

const Users = (props) => {
  // const [loading, setLoading] = React.useState(true);
  const [post, setPost] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector(state => state.postReducer.isLoading);
  const useStyles = makeStyles({
    table: {
      minWidth: '74vw',
    },
    tableHead: {
      fontWeight: 600,
    },
    loaderClass: {
      position:'absolute',
      top:'50%',
      left:'50%'
     }
  });

  const fetchPage = (page, rowsPerPage) => {

    dispatch(getPostDataBegins())
    axios.get(`posts?_page=${page}&_limit=${rowsPerPage}`)
      .then(response => {
        dispatch(getPostDataSuccess(response.data))
         setPost(response.data);
      })
      .catch(error => {
        dispatch(getPostDataFail(error));
        console.log(error);
      })
  }

  useEffect(() => {
    if (post.length === 0) {
      fetchPage(page, rowsPerPage);
    }
  },[page, post, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
    fetchPage(newPage + 1, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1);
    fetchPage(1, event.target.value);
  };

  const handleView = (id) => {
    dispatch(postSelectedData());
    history.push('/dashboard/posts/' + id);
  }

  const handleDelete = (id) => {
    dispatch(deletePostBegins())
    axios.delete(`posts/${id}`)
      .then(response => {
        dispatch(deletePostSuccess(response));
        dispatch(setSnackbar(true,'success','Deleted Successfully'));
      })
      .catch(error => {
        dispatch(deletePostFail(error));
        dispatch(setSnackbar(true,'error','Error : Not Deleted'))
        console.log(error);
      });
    const deleteUser = post.filter(d => d.id !== id);
    setPost(deleteUser)
  }
  
  const classes = useStyles();

  if (isLoading) {
    return  <div className={classes.loaderClass}><CircularProgress /></div>
  }

  return (
    <Grid container spacing={4}>
      <TableContainer component={Paper}>
        <Grid item xs={12} md={3}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead} align='left'>Id</TableCell>
              <TableCell className={classes.tableHead} align='left'>Title</TableCell>
              <TableCell className={classes.tableHead} align='right'>Action</TableCell>
              <TableCell className={classes.tableHead} align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {post.map((u) => (
              <TableRow key={u.id}>
                <TableCell >{u.id}</TableCell>
                <TableCell>{u.title}</TableCell>
                <TableCell><Button size='small' variant='contained'
                  onClick={() => handleView(u.id)}>Edit</Button></TableCell>
                <TableCell><Button color='secondary' variant='contained' size='small'
                  onClick={() => handleDelete(u.id)}>Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Grid>
      </TableContainer>
      <CustomizedSnackbars />
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={100}
        page={page - 1}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Grid>
  );
}

export default Users;

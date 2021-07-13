import { CircularProgress, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../../axios";
import { deleteUserBegins, deleteUserFail, deleteUserSuccess, getUserDataBegins, getUserDataFail, getUserDataSuccess } from "../../../../redux/actions/userAction";
import UserChild from "./UserChild";


const UserParent = () => {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
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

  const isLoading = useSelector(state => state.userReducer.isLoading);
      
      const classes = useStyles();

    useEffect(()=>{
        dispatch(getUserDataBegins())
        axios.get('users')
          .then(response => {
            dispatch(getUserDataSuccess(response.data))
             setUsers(response.data);
          })
          .catch(error => {
           dispatch(getUserDataFail(error));
          })
    },[])

    const handleDelete = (id) => {
        dispatch(deleteUserBegins())
        axios.delete(`users/${id}`)
          .then(response => {
            dispatch(deleteUserSuccess(response));
          })
          .catch(error => {
            dispatch(deleteUserFail(error));
            console.log(error);
          });
        const deleteUser = users.filter(d => d.id !== id);
        setUsers(deleteUser)
    }

    if (isLoading) {
      return  <div className={classes.loaderClass}><CircularProgress /></div>
    }

    return (
      <Grid container>
          <TableContainer component={Paper}>
          <Grid item xs={10} md={2}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHead} align='left'>Id</TableCell>
                  <TableCell className={classes.tableHead} align='left'>Name</TableCell>
                  <TableCell className={classes.tableHead} align='left'>Username</TableCell>
                  <TableCell className={classes.tableHead} align='left'>email</TableCell>
                  <TableCell className={classes.tableHead} align='left'>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                    <UserChild users={users} onClick={handleDelete} />
              </TableBody>
            </Table>
            </Grid>
          </TableContainer>
        </Grid>
      );
    
}

export default UserParent;
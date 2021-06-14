import { makeStyles, TablePagination } from '@material-ui/core';
import React, {useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Users = () => {
    const [user, setUser] = React.useState([]);
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(response => {
            setUser(response);
            // setIsLoading(false);
          })
          .catch(error => console.log(error));
      },[]);

      const useStyles = makeStyles({
        table: {
          minWidth: '74vw',
        },
        tableHead:{
           
            fontWeight:600
        }
      });  

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
 
    console.log(user);
    const classes = useStyles();
    return (
        <>
     
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>Name</TableCell>
            <TableCell className={classes.tableHead}>Email</TableCell>
            <TableCell className={classes.tableHead}>Contact</TableCell>
            <TableCell className={classes.tableHead}>Status</TableCell>
            <TableCell className={classes.tableHead}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((u) => (
            <TableRow key={u.name}>
              <TableCell >{u.name}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
         <TablePagination
        component="div"
        count={100}
        page={page}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
        </>
        
    );
}
export default Users;

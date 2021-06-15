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
    const [loading, setLoading] = React.useState(true);
    const [user, setUser] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

      const useStyles = makeStyles({
        table: {
          minWidth: '74vw',
        },
        tableHead:{           
            fontWeight:600
        }
      });  

      const fetchPage = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${rowsPerPage}`)
          .then(res => res.json())
          .then(response => {
            setUser(response);
            setLoading(false);
          })
          .catch(error => console.log(error));
      }
      
    useEffect(() => {
        fetchPage();
      },[user]);

    const handleChangePage = (event, newPage) => {
      console.log(newPage);
      setPage(newPage + 1);
      fetchPage();
    };
  
    const handleChangeRowsPerPage = (event) => {
      console.log(event.target.value);
      setRowsPerPage(event.target.value, rowsPerPage);
      setPage(1);
      fetchPage();
    };
 

    const classes = useStyles();
    if(loading){
      return <h3>Loading....</h3>
    }

    return (
        <>     
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>Id</TableCell>
            <TableCell className={classes.tableHead}>Title</TableCell>
            <TableCell className={classes.tableHead}>Contact</TableCell>
            <TableCell className={classes.tableHead}>Status</TableCell>
            <TableCell className={classes.tableHead}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((u) => (
            <TableRow key={u.id}>
              <TableCell >{u.id}</TableCell>
              <TableCell>{u.title}</TableCell>             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
         <TablePagination
            rowsPerPageOptions={[5,10,25,50]}
            component="div"
            count={100}
            page={page-1}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </>        
    );
}
export default Users;

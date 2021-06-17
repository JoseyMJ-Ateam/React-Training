import React, {useEffect} from 'react';
import { 
  makeStyles, 
  TablePagination, 
  Table, TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper } from '@material-ui/core';

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

      const fetchPage = (page, rowsPerPage) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${rowsPerPage}`)
          .then(res => res.json())
          .then(response => {
            setUser(response);
            setLoading(false);
          })
          .catch(error => console.log(error));
      }
      
    useEffect(() => {
      if(user.length===0){

        fetchPage(page, rowsPerPage);
      }
      },[page,user]);

    const handleChangePage = (event, newPage) => {
      setPage(newPage + 1);
      fetchPage(newPage + 1, rowsPerPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      console.log(event.target.value);
      setRowsPerPage(event.target.value);
      setPage(1);
      fetchPage(1,event.target.value);
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

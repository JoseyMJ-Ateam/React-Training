import React, {useEffect} from 'react';
import { 
  makeStyles, 
  TablePagination, 
  Table, TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button} from '@material-ui/core';
import axios from 'axios';

const Users = (props) => {
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
      },[page,user,rowsPerPage]);

    const handleChangePage = (event, newPage) => {
      setPage(newPage + 1);
      fetchPage(newPage + 1, rowsPerPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(event.target.value);
      setPage(1);
      fetchPage(1,event.target.value);
    };
 console.log(props)
    const handleView = (id) => {
     props.history.push('/dashboard/users/' + id )
    }

    const handleDelete = (id) => {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => console.log(response));
      const deleteUser = user.filter(d => d.id !== id);
      console.log(deleteUser);
      setUser(deleteUser)

    }
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
            <TableCell className={classes.tableHead}></TableCell>
            <TableCell className={classes.tableHead}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((u) => (
            <TableRow key={u.id}>
              <TableCell >{u.id}</TableCell>
              <TableCell>{u.title}</TableCell>             
              <TableCell><Button style={{backgroundColor:'yellowgreen',color:'white'}}
              onClick={()=>handleView(u.id)}>View</Button></TableCell>             
              <TableCell><Button style={{backgroundColor:'orange',color:'white'}}>Edit</Button></TableCell>             
              <TableCell><Button style={{backgroundColor:'red',color:'white'}}
              onClick={()=>handleDelete(u.id)}>Delete</Button></TableCell>             
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

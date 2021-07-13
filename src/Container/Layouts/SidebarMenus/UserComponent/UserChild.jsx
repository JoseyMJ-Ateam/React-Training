import { Button, makeStyles, TableCell, TableRow } from "@material-ui/core";


const UserChild = (props) => {
    const users = props.users;

    const useStyles = makeStyles({
     btn :{
      backgroundColor: 'red', 
      color: 'white' 
     },
    });

    const classes = useStyles();

    return(
        <>
               {users.map((u) => (
                  <TableRow key={u.id}>
                    <TableCell >{u.id}</TableCell>
                    <TableCell>{u.name}</TableCell>
                    <TableCell>{u.username}</TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell><Button className={classes.btn}
                       onClick={()=>props.onClick(u.id)}>
                          Delete</Button></TableCell>
                  </TableRow>
                ))}
        </>
    )
}

export default UserChild;
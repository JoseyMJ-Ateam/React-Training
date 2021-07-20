import { Button, TableCell, TableRow } from "@material-ui/core";


const UserChild = (props) => {
    const users = props.users;

    return(
        <>
               {users.map((u) => (
                  <TableRow key={u.id}>
                    <TableCell >{u.id}</TableCell>
                    <TableCell>{u.name}</TableCell>
                    <TableCell>{u.username}</TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell><Button color='secondary' variant='contained' size='small'
                       onClick={()=>props.onClick(u.id)} >
                          Delete</Button></TableCell>
                  </TableRow>
                ))}
        </>
    )
}

export default UserChild;
import { Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteUser, getUsers } from '../Service/api'

const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: 'white',
            fontSize: '20'
        }
    },
    row: {
        '& > * ': {
            fontSize: '20',
            background: '#b8b8ea'
        }
    }

})

const AllUser = () => {
    const classes = useStyle();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        const response = await getUsers();
        // console.log(response.data);
        setUsers(response.data);
    }
    const deletUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }
    return (
        // <>
        // </>
        <Table className={classes.table}>

            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Edit/Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody >
                {
                    users.map(user => (
                        <TableRow key={user.id} className={classes.row}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.address}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.contact}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{ marginRight: 10 }} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deletUserData(user.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))

                }
            </TableBody>
        </Table>
    )
}

export default AllUser

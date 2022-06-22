import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Users = () => {
    // Get Users list from the context
    const { usersList } = useContext(UserContext);

    // Map Users List to create table rows
    const users = usersList.length ? usersList.map(user => {
        return (
            <TableRow
            key={user.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {user.name}
                </TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.address.city}</TableCell>
                <TableCell align="right">{user.role}</TableCell>
            </TableRow>
        )
    }) : <div>Loading...</div>

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Username</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">City</TableCell>
                    <TableCell align="right">Role</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {users}
                </TableBody>
            </Table>
            </TableContainer>
    );
}
 
export default Users;
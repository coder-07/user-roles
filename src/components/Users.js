import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MenuItem, Select } from '@mui/material';
import { RoleContext } from '../contexts/RoleContext';


const Users = () => {
    // Get Users list from the context
    const { usersList, dispatch } = useContext(UserContext);
    const { rolesList } = useContext(RoleContext)

    // Handle roles dropdown change
    const handleRoleChange = (userId, changedRole) => {
        let oldUsersList = [...usersList];
        for (let i=0; i<oldUsersList.length; i++) {
            if (oldUsersList[i].id === userId) {
                oldUsersList[i].role = changedRole
                break;
            }
        }
        dispatch({
            type: 'CHANGE_ROLE',
            updatedUsersList: oldUsersList
        })
    }

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
                <TableCell align="right">
                    <Select size="small" onChange={(e) => {handleRoleChange(user.id, e.target.value)}}>
                        {rolesList.length ? (rolesList.map(role => {
                            return (
                                <MenuItem key={role.id} value={role.name}>{role.name}</MenuItem>
                            )
                        })) : (<MenuItem></MenuItem>)}
                    </Select>
                </TableCell>
            </TableRow>
        )
    }) : <TableRow>
        <TableCell>Loading...</TableCell>
    </TableRow>

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Username</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">City</TableCell>
                    <TableCell align="right">Current Role</TableCell>
                    <TableCell align="right">Roles</TableCell>
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
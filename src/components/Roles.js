import { Delete } from '@mui/icons-material';
import { Avatar, Box, Button, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { RoleContext } from '../contexts/RoleContext';
import { v4 as uuidv4 } from 'uuid';

const Roles = () => {
    const {rolesList, dispatch} = useContext(RoleContext);
    const [newRole, setNewRole] = useState('');

    const rolesHtml = rolesList.length ? (
        rolesList.map(role => {
            return (
                <ListItem key={role.id}
                    secondaryAction={
                    <IconButton edge="end" aria-label="delete"><Delete /></IconButton>
                }>
                    <ListItemAvatar>
                        <Avatar></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={role.name} />
                </ListItem>
            )
        })
    ) : (<ListItem>
        <ListItemText primary="No Items to show :(" />
    </ListItem>)

    const addNewRole = () => {
        if (newRole.length > 0) {
            dispatch({
                type: 'GET_ROLES',
                newRole: {
                    name: newRole,
                    id: uuidv4()
                }
            })
            setNewRole('');
        } else {
            alert('Invalid Input')
        }
    }

    return (
        <div>
            <div style={{margin: '10px 0px'}}>
                <Box component="form" noValidate>
                    <TextField variant="outlined" label="Role"  style={{marginRight: '15px'}} size="small" value={newRole} onChange={(e) => {
                        setNewRole(e.target.value)
                    }} />
                    <Button variant='contained' size="medium" onClick={addNewRole}>Add</Button>
                </Box>
            </div>
            <List dense={true} style={{width: "45%", margin: '0 auto'}}>
                {rolesHtml}
            </List>
        </div>
    );
}
 
export default Roles;
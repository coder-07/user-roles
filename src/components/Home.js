import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';

const Home = () => {
    // Router v6
    const navigate = useNavigate();

    // Get dispatch from the UserContext in order to store data locally
    const { dispatch } = useContext(UserContext);

    // Get request for users
    axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
        for(let item of result.data) {
            item['role'] = "Employee"
        }
        dispatch({
            type: 'GET_USERS',
            usersList: result.data
        })
    })

    // On click of Users button
    const loadUsers = () => {
        navigate('/users')
    }

    // On click of Roles button
    const loadRoles = () => {
        navigate('/roles')
    }

    return (
        <div className='home_wrapper'>
            <Button variant="contained" onClick={loadUsers}>Users</Button>
            <Button variant="contained" onClick={loadRoles}>Roles</Button>
        </div>
    );
}
 
export default Home;
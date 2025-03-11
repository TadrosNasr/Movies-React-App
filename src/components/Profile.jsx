import { Avatar, Paper, Typography, Button } from '@mui/material';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { removeUser } from '../redux/store/slices/UserInfo';
import {  useNavigate } from 'react-router-dom';

const Profile = () => {
    const data = useSelector(state=> state.userInfo.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const SignUpNavigation= ()=>{
        navigate("/signup");
    }

    const handleRemove = (e)=>{
        e.preventDefault();
        console.log(data);
        dispatch(removeUser(data));
        navigate("/movies");
    }
   
    return (
        <div className='my-5' style={{height: '100vh'}}>
            <Paper elevation={3} className="p-4 w-50 mx-auto">
                <Typography variant='h4' textAlign= 'center' gutterBottom>Hello {data.username}!</Typography>
            <div className='container d-flex flex-column'>
                
                <Typography variant='h6' textAlign= 'center' gutterBottom>
                    <Avatar className='mx-auto my-3'  sx={{ width: 56, height: 56 }}>{data.username[0]}</Avatar> <span> {data.username} </span>
                </Typography>
                <Typography variant='h6' textAlign= 'center' gutterBottom>Email: <span>{data.email}</span></Typography>
                <Typography variant='h6' textAlign= 'center' gutterBottom>Fav Genre: <span>{data.favoriteGenre}</span></Typography>
            </div>
            <Button variant="outlined" color="error" onClick={handleRemove}>Log out</Button>
            </Paper>
        </div>
    );
}

export default Profile;

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
        navigate("/movies")
    }
    // if (!data || data.length === 0) {
    //     return (
    //     <div style={{height: '100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
    //         <img className='w-25 my-3' src='public/error.png'/>
    //        <h1>No User Found!</h1>
    //        <Button variant="contained" color="warning" onClick={SignUpNavigation()}>Sign Up</Button>
    //     </div>
    // )}
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
            <Button variant="outlined" color="error" onClick={handleRemove}>Remove User</Button>
            </Paper>
        </div>
    );
}

export default Profile;

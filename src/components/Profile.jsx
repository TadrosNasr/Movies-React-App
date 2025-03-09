import { Paper, Typography } from '@mui/material';
import React from 'react';

const Profile = () => {
    return (
        <div className='my-5' style={{height: '100vh'}}>
            <Paper elevation={3} className="p-4 w-50 mx-auto">
                <Typography variant='h4' textAlign= 'center' gutterBottom>User Profile</Typography>
            <div className='container d-flex flex-column'>
                <Typography variant='h6' textAlign= 'center' gutterBottom>Name: <span>Tadros Nasr</span></Typography>
                <Typography variant='h6' textAlign= 'center' gutterBottom>Email: <span>Tadros@gmail.com</span></Typography>
                <Typography variant='h6' textAlign= 'center' gutterBottom>Fav Genre: <span>Comedy</span></Typography>

            </div>
            </Paper>
        </div>
    );
}

export default Profile;

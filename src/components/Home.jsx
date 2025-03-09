import React from 'react';
import Movies2 from './Movies2';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            
            <Outlet />  
        </div>
    );
}

export default Home;

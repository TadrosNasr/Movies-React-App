import React from 'react';

const NotFound = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center my-5' style={{height: '100vh'}}>
            <img className='w-25 my-3' src='public/error.png'/>
            <h1>404 Not Found!</h1>
        </div>
    );
}

export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavBar = () => {
    return (
        <div className='container mx-auto'>

<nav className="navbar navbar-expand-lg text-white w-100">
{/* <img className="navbar-brand mx-3" href="#">Navbar</img> */}
<div className="container-fluid justify-content-around">
    <Link className='nav-link' to='/movies'>Home</Link>
    <Link className='nav-link' to='/about'>About</Link>
    <Link className='nav-link' to='/favourites'>Favourites</Link>
    <Link className='nav-link' to='/signup'>SignUp</Link>
    <Link className='nav-link' to='/profile'>Profile</Link>
    {/* <span>Counter: ${counter}</span> */}
</div>
</nav>
        </div>

    );
}

export default NavBar;

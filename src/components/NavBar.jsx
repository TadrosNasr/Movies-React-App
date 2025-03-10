import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const NavBar = () => {
const user = useSelector(state => state.userInfo.user);
    return (
    <nav className="navbar bg-dark text-white w-100" data-bs-theme="dark">
    {/* <img className="navbar-brand mx-3" href="#">Navbar</img> */}
        <div className="container-fluid justify-content-around">
            <Link className='nav-link' to='/movies'>Home</Link>
            <Link className='nav-link' to='/about'>About</Link>
            <Link className='nav-link' to='/favourites'>Favourites</Link>
            <Link className='nav-link' to='/signup'>SignUp</Link>
            {user&&<Link className='nav-link' to='/profile'>Profile</Link>}
            {/* <span>Counter: ${counter}</span> */}
        </div>
    </nav>
    );
}

export default NavBar;

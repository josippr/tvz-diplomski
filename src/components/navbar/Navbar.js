import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="Navbar">
            <Link to="/"><p className='nav-item'>Home</p></Link>
            <Link to="/search"><p className='nav-item'>Search Questions</p></Link>
            <Link to="/settings"><p className='nav-item'>Settings</p></Link>
            <Link to="/about"><p className='nav-item'>About</p></Link>
        </nav>
    );
}

export default Navbar;

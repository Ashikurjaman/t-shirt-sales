import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/order'}>Order review</Link>
            <Link to={'/about'}>About Us</Link>
            <Link to={'/contact'}>Contact</Link>
        </nav>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <Link to={'./'}><img src={logo} alt="" /></Link>
            <div>
                <Link to='/'>Shop</Link>
                    <Link to='/order'>Order</Link>
                    <a href="www.google.com">Inventory</a>
                    <Link to='/about'>About</Link>
                    <Link to={'/login'}>Log In</Link>
                    <Link to={'/signup'}>Sign Up</Link>
            </div>
            </nav>
        </div>
    );
};

export default Header;
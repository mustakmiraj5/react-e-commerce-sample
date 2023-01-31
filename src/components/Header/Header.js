import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="www.google.com">Shop</a>
                    <a href="www.google.com">Order</a>
                    <a href="www.google.com">Inventory</a>
                    <a href="www.google.com">About</a>
            </div>
            </nav>
        </div>
    );
};

export default Header;
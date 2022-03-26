import React from 'react';
import logo from '../../images/dpo-logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">about</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;
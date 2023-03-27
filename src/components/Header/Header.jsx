import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='min-w-[1440px] mx-10 h-[80px] flex justify-between items-center mt-5 bg-[#1C2B35] text-white px-10'>
            <img src={logo} />
            <div >
                <a className='mr-5' href="/shop">Shop</a>
                <a className='mr-5' href="/order">Order</a>
                <a className='mr-5' href="/inventory">Inventory</a>
                <a className='mr-5' href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;
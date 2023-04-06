import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='100vw lg:min-w-[1440px] mx-10 h-[80px] flex justify-between items-center mt-5 bg-[#1C2B35] text-white px-10'>
            <img src={logo} />
            <div className='flex gap-10'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;
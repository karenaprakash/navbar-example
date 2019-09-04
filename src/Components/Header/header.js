import React from 'react';
/*------- CSS --------*/
import './header.css';
/*------- COMPONENTS --------*/
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className='header'>
            <Navbar/>
        </div>
    )
}

export default Header;
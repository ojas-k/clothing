import React from 'react';
import './header.styles.scss';

import {Link} from 'react-router-dom'


import {CartIcon} from '../cart-icon/cart-icon.component'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            CLOTHING
        </Link>

        <div className='options'>
            <Link className='option' to='/contact'>
                CONTACT US
            </Link>

            <Link className='option' to='/signin'>
                SIGN IN
            </Link>

            <CartIcon className='cart-icon'/>


        </div>

    </div>

);

export default Header;
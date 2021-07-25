import React from 'react';
import './header.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart-selector';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';



import {Link} from 'react-router-dom'


import CartIcon from '../cart-icon/cart-icon.component'

const Header = ({hidden, toggleCartHidden}) => (
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
            <div onClick={toggleCartHidden}>

            <CartIcon className='cart-icon'/>
            </div>


        </div>
        
            {hidden?null:<CartDropdown/>}
        

    </div>

);

const mapStatetoProps= createStructuredSelector({
    hidden:selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });

export default connect(mapStatetoProps, mapDispatchToProps)(Header);
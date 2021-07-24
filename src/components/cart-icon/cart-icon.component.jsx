import React from 'react';
import './cart-icon.styles.scss';


import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';





const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      
    </div>
  );



  
  export default CartIcon;


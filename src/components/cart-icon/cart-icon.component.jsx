import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';



import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import {createStructuredSelector} from 'reselect'



const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );


  
  export default CartIcon;


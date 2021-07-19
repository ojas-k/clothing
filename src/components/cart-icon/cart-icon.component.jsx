import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart-actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';





const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      
    </div>
  );

  const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCart())
  });

  
  export default connect(mapDispatchToProps)(CartIcon);


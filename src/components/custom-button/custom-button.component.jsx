import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  
  console.log('in sign up button')
  
  return(
  
  
  
  <button
    className={`${inverted ? 'inverted-sign-in' : ''}${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)};

export default CustomButton;
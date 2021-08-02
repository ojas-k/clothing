import React from'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JI6ncSFUjYzqFPoiQavJpI988GI5bOXqRwfXEuIKNH1QweTriLtWIvC03GP6GONhvLIc9qssRfHQKBH7rxYr8X400tvCSGvlu';
  
    const onToken = token => {
      console.log(token);
      alert('Payment Succesful!');
    };
  
    return (
      <StripeCheckout
        label='Pay Now'
        name='CLOTHING'
        billingAddress
        shippingAddress
        image=''
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    );
  };
  
  export default StripeCheckoutButton;
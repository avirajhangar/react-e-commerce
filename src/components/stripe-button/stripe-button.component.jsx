import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const publishableKey = 'pk_test_51JCIxaACxcHMFrM5BMjziVpZBbcKMKJR8peG8tq4MInsAXELbvnT1VlFmqpqH22W0tJOBMY90WQvldl3Jrfqu3sl002FaF9zIZ';

  const onToken = token => {
    console.log(token);

  }
  return(
    <StripeCheckout 
      label='Pay Now'
      name='Crown Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-blocks'>
          <span>Product</span>
        </div>
        <div className='header-blocks'>
          <span>Description</span>
        </div>
        <div className='header-blocks'>
          <span>Quantity</span>
        </div>
        <div className='header-blocks'>
          <span>Price</span>
        </div>
        <div className='header-blocks'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => <CheckoutItem key={ cartItem.id } item={ cartItem }/>) 
      }
      <div className='total'>
        <span>TOTAL: $ {total}</span>
      </div>
      <StripeCheckoutButton price={total} />
    </div>
)

const mapsStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotal
})

export default connect(mapsStateToProps)(CheckoutPage);
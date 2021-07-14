import React from 'react';
import CustomBtn from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ?
          cartItems.map( cartItem => (
            <CartItem key={ cartItem.id } item={ cartItem }/>
          )) :
          <span className='empty-message'>Ale asT</span>
        }
      </div>
      <CustomBtn 
        onClick={
          () => {
            history.push('/check-out');
            dispatch(toggleCartHidden())
          }
        }
      >
        GO TO CHECKOUT
      </CustomBtn>
    </div>
  )
}
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})


export default withRouter(connect(mapStateToProps)(CartDropdown));
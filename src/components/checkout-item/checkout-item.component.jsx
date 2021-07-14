import React from 'react';

import { connect } from 'react-redux';
import { removeItemFromCart, remove, addItemToCart } from '../../redux/cart/cart.actions';


import './checkout-item.styles.scss';

const CheckoutItem = ({ item, removeItem, addItem, removeOneItem }) => {
  const { imageUrl, price, name, quantity } = item;
  return(
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeOneItem(item)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeItem(item)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item)),
  addItem: item => dispatch(addItemToCart(item)),
  removeOneItem: item => dispatch(remove(item)),
})

export default connect(null,mapDispatchToProps)(CheckoutItem);
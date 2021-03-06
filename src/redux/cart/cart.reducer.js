import { CartActionTypes } from "./cart.types";
import { addItem } from "./cart.utils";
import { removeItemFromCart } from "./cart.utils";


const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

export const cartReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN: 
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }
    default: 
      return state;
  }
}
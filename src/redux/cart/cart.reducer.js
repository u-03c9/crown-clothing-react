import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_MENU:
      return { ...state, hidden: !state.hidden };
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_WHOLE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case CartActionTypes.REMOVE_SINGLE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;

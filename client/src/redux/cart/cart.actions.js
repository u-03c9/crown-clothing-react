import CartActionTypes from "./cart.types";

export const toggleCartMenu = () => ({
  type: CartActionTypes.TOGGLE_CART_MENU,
});

export const dismissCartMenu = () => ({
  type: CartActionTypes.DISMISS_CART_MENU,
});

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeWholeItemFromCart = (item) => ({
  type: CartActionTypes.REMOVE_WHOLE_ITEM_FROM_CART,
  payload: item,
});

export const removeSingleItemFromCart = (item) => ({
  type: CartActionTypes.REMOVE_SINGLE_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

import CartActionTypes from "./cart.types";

export const toggleCartMenu = () => ({
  type: CartActionTypes.TOGGLE_CART_MENU,
});

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

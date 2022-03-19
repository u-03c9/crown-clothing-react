import React from "react";
import { useDispatch } from "react-redux";

import {
  addItemToCart,
  removeSingleItemFromCart,
  removeWholeItemFromCart,
} from "../../redux/cart/cart.actions.js";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const addItem = () => dispatch(addItemToCart(cartItem));
  const removeSingleItem = () => dispatch(removeSingleItemFromCart(cartItem));
  const removeWholeItem = () => dispatch(removeWholeItemFromCart(cartItem));

  return (
    <div className="w-full grid grid-cols-5 sm:grid-cols-9 min-h-[50px] items-center text-center text-sm sm:text-base">
      <div className="w-10 sm:w-20 sm:col-span-2 mx-auto">
        <img src={imageUrl} className="" alt="item" />
      </div>
      <span className="sm:col-span-2">{name}</span>
      <span className="sm:col-span-2 select-none flex flex-row justify-center gap-x-2">
        <div className="hover:opacity-70 sm:p-2" onClick={removeSingleItem}>
          &#10094;
        </div>
        <span className="sm:py-2">{quantity}</span>
        <div className="hover:opacity-70 sm:p-2" onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className="sm:col-span-2">${quantity * price}</span>
      <div
        className="sm:col-span-1 cursor-pointer hover:opacity-70"
        onClick={removeWholeItem}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

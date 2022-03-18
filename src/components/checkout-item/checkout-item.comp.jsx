import React from "react";
import { useDispatch } from "react-redux";

import {
  addItemToCart,
  removeSingleItemFromCart,
  removeWholeItemFromCart,
} from "../../redux/cart/cart.actions.js";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const addItem = () => dispatch(addItemToCart(cartItem));
  const removeSingleItem = () => dispatch(removeSingleItemFromCart(cartItem));
  const removeWholeItem = () => dispatch(removeWholeItemFromCart(cartItem));

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeSingleItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className="price">${quantity * price}</span>
      <div className="remove-button" onClick={removeWholeItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

import React from "react";
import { connect } from "react-redux";

import {
  addItemToCart,
  removeSingleItemFromCart,
  removeWholeItemFromCart,
} from "../../redux/cart/cart.actions.js";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  addItem,
  removeSingleItem,
  removeWholeItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeSingleItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${quantity * price}</span>
      <div className="remove-button" onClick={() => removeWholeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToState = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
  removeSingleItem: (item) => dispatch(removeSingleItemFromCart(item)),
  removeWholeItem: (item) => dispatch(removeWholeItemFromCart(item)),
});

export default connect(null, mapDispatchToState)(CheckoutItem);

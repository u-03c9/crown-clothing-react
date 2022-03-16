import React from "react";
import { connect } from "react-redux";

import { removeWholeItemFromCart } from "../../redux/cart/cart.actions.js";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, removeWholeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeWholeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToState = (dispatch) => ({
  removeWholeItem: (item) => dispatch(removeWholeItemFromCart(item)),
});

export default connect(null, mapDispatchToState)(CheckoutItem);

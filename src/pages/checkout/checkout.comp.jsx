import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors.js";
import CheckoutItem from "../../components/checkout-item/checkout-item.comp";

import "./checkout.styles.scss";
import StripCheckoutButton from "../../components/stripe-button/strip-button.comp.jsx";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 12/34 - CVC: 123
      <br />
      <a href="https://stripe.com/docs/testing#cards">
        more info on valid testing card numbers
      </a>
    </div>
    <StripCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

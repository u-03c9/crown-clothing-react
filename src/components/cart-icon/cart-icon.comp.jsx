import React from "react";
import { connect } from "react-redux";

import { toggleCartMenu } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartMenu }) => (
  <div className="cart-icon" onClick={toggleCartMenu}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count"> 0 </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartMenu: () => dispatch(toggleCartMenu()),
});

export default connect(null, mapDispatchToProps)(CartIcon);

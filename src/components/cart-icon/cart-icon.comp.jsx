import React from "react";
import { connect } from "react-redux";

import { toggleCartMenu } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartMenu, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartMenu}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count"> {itemCount} </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartMenu: () => dispatch(toggleCartMenu()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

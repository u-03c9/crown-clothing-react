import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleCartMenu } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const toggleCartMenuHandler = () => dispatch(toggleCartMenu());

  const itemCount = useSelector(selectCartItemsCount);

  return (
    <div className="cart-icon" onClick={toggleCartMenuHandler}>
      <ShoppingBagIcon className="shopping-icon" />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};

export default CartIcon;

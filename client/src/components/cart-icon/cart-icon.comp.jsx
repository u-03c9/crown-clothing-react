import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleCartMenu } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const dispatch = useDispatch();
  const toggleCartMenuHandler = (event) => {
    event.stopPropagation();
    dispatch(toggleCartMenu());
  };

  const itemCount = useSelector(selectCartItemsCount);

  return (
    <div
      className="w-fit h-fit relative flex pb-2 cursor-pointer select-none"
      onClick={toggleCartMenuHandler}
    >
      <ShoppingBagIcon className="w-7 h-7" />
      <span className="absolute w-full text-center text-xs bottom-2.5">
        {itemCount}
      </span>
    </div>
  );
};

export default CartIcon;

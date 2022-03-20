import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartMenu } from "../../redux/cart/cart.actions.js";

import CartItem from "../cart-item/cart-item.comp";
import CustomButton from "../custom-button/custom-button.comp";

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  return (
    <div className="absolute w-60 h-96 flex flex-col p-5 top-14 right-0 bg-white border-black border-[1px] z-20">
      <div className="grow flex flex-col overflow-x-hidden overflow-y-scroll custom-scrollbar">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="text-lg mx-auto grow pt-[25%]">
            Your cart is empty
          </span>
        )}
      </div>
      <CustomButton
        className="mt-auto w-full py-3"
        onClick={() => {
          dispatch(toggleCartMenu());
          navigate("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;

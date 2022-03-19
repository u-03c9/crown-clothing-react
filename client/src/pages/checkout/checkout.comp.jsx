import React from "react";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors.js";
import CheckoutItem from "../../components/checkout-item/checkout-item.comp";

import StripCheckoutButton from "../../components/stripe-button/strip-button.comp.jsx";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className="min-h-[90vh] flex flex-col items-center mx-auto mt-12 gap-4 max-w-3xl">
      <div className="w-full  grid grid-cols-5 sm:grid-cols-9  justify-between text-center text-sm sm:text-base">
        <span className="sm:col-span-2 overflow-hidden text-ellipsis">
          Product
        </span>
        <span className="sm:col-span-2 overflow-hidden text-ellipsis">
          Description
        </span>
        <span className="sm:col-span-2 overflow-hidden text-ellipsis">
          Quantity
        </span>
        <span className="sm:col-span-2 overflow-hidden text-ellipsis">
          Price
        </span>
        <span className="sm:col-span-1 overflow-hidden text-ellipsis">
          Remove
        </span>
      </div>
      <hr className="w-full border-gray-500" />
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <hr className="w-full border-gray-500" />
      <div className="ml-auto text-3xl">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="ml-auto">
        <StripCheckoutButton price={total} />
      </div>
      <div className="text-center mt-6 text-md sm:text-lg md:text-2xl text-gray-500">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 12/34 - CVC: 123
        <br />
        <a
          href="https://stripe.com/docs/testing#cards"
          className="text-lg text-gray-500, underline decoration-dotted decoration-gray-500"
        >
          more info on valid testing card numbers
        </a>
      </div>
    </div>
  );
};

export default CheckoutPage;

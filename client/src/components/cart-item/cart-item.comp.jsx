import React from "react";

const CartDropdownItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="w-full flex h-20 mb-4">
    <img src={imageUrl} className="w-1/3" alt="item" />
    <div className="w-2/3 flex flex-col items-start justify-center py-2 px-5">
      <span>{name}</span>
      <span>
        {quantity} X ${price}
      </span>
    </div>
  </div>
);

export default CartDropdownItem;

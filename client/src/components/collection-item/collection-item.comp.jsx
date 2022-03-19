import React from "react";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.comp";

import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;

  const dispatch = useDispatch();
  const addItemToCartHandler = () => dispatch(addItemToCart(item));

  return (
    <div className="collection-item w-full flex flex-col h-96 items-center relative">
      <div
        className="image w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="w-full h-fit flex justify-between text-lg">
        <span className="grow">{name}</span>
        <span className="w-fit">${price}</span>
      </div>
      <CustomButton
        className="custom-button w-[80%] opacity-70 absolute top-64 "
        onClick={addItemToCartHandler}
        inverted
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;

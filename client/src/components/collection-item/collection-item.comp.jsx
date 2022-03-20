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
    <div className="collection-item w-full flex flex-col items-center relative">
      <div className="container h-fit">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <div className="w-full h-14 flex justify-between text-lg leading-none pt-2">
        <span className="grow">{name}</span>
        <span className="w-fit">${price}</span>
      </div>
      <CustomButton
        className="custom-button min-w-[80%] max-w-[10rem] opacity-70 absolute bottom-20"
        onClick={addItemToCartHandler}
        inverted
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;

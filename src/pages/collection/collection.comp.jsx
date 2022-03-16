import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.comp";

import "./collection.styles.scss";

const CategoryPage = () => {
  const params = useParams();
  const collectionId = params.collectionId;

  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
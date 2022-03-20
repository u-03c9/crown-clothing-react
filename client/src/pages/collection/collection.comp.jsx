import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.comp";

const CollectionPage = () => {
  const params = useParams();
  const collectionId = params.collectionId;

  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;

  return (
    <div className="">
      <h2 className="text-4xl text-center mb-7">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;

import React from "react";
import { useNavigate } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.comp";

const CollectionPreview = ({ title, items, routeName }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-x-5 mb-7">
      <h1
        className="text-3xl mb-6 cursor-pointer hover:text-gray-500"
        onClick={() => navigate(routeName)}
      >
        {title}
      </h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 justify-between items-center">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

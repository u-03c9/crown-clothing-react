import React from "react";
import { useSelector } from "react-redux";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.comp";


const CollectionsOverviewPage = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div className="flex flex-col">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default CollectionsOverviewPage;

import React from "react";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";

import { convertCollectionsSnapshoptToMap } from "../../firebase/firebase.firestore";
import { updateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  unsubscripbeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const db = getFirestore();
    const collectionsRef = collection(db, "collections");

    onSnapshot(collectionsRef, async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshoptToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    return (
      <div className="shop-page">
        <Outlet />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

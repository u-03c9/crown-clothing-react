import React from "react";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { collection, getFirestore, getDocs } from "firebase/firestore";

import { convertCollectionsSnapshoptToMap } from "../../firebase/firebase.firestore";
import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.comp";

const OutletWithSpinner = WithSpinner(Outlet);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };

  unsubscripbeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const db = getFirestore();
    const collectionsRef = collection(db, "collections");

    getDocs(collectionsRef).then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshoptToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ isLoading: false });
      console.log(snapshot);
    });
  }

  render(props) {
    return (
      <div className="shop-page">
        <OutletWithSpinner isLoading={this.state.isLoading} {...props} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

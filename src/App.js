import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createUserProfileDocument } from "./firebase/firebase.firestore";
import { onSnapshot } from "firebase/firestore";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { setCurrentUser } from "./redux/user/user.actions";

import HomePage from "./pages/homepage/homepage.comp";
import Header from "./components/header/header.comp";
import LoginPage from "./pages/login/login.comp";
import ShopPage from "./pages/shop/shop.comp";
import CollectionsOverviewContainer from "./pages/collections-overview/collections-overview.container";
import CollectionContainer from "./pages/collection/collection.container";
import CheckoutPage from "./pages/checkout/checkout.comp";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // this.unsubscribeFromAuth = onAuthStateChanged(
    //   getAuth(),
    //   async (userAuth) => {
    //     if (userAuth) {
    //       const userRef = await createUserProfileDocument(userAuth);

    //       onSnapshot(userRef, (snapshot) => {
    //         setCurrentUser({
    //           id: snapshot.id,
    //           ...snapshot.data(),
    //         });
    //       });
    //     }

    //     setCurrentUser(userAuth);
    //   }
    // );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route path="/shop" element={<ShopPage />}>
            <Route path="/shop/" element={<CollectionsOverviewContainer />} />
            <Route
              path="/shop/:collectionId"
              element={<CollectionContainer />}
            />
          </Route>
          <Route
            exact
            path="/login"
            element={
              this.props.currentUser ? (
                <Navigate to="/" replace={true} />
              ) : (
                <LoginPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

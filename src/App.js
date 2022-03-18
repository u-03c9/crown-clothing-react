import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import HomePage from "./pages/homepage/homepage.comp";
import Header from "./components/header/header.comp";
import LoginPage from "./pages/login/login.comp";
import ShopPage from "./pages/shop/shop.comp";
import CollectionsOverviewContainer from "./pages/collections-overview/collections-overview.container";
import CollectionContainer from "./pages/collection/collection.container";
import CheckoutPage from "./pages/checkout/checkout.comp";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
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

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

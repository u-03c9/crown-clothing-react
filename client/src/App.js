import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import HomePage from "./pages/homepage/homepage.comp";
import Header from "./components/header/header.comp";
import LoginPage from "./pages/login/login.comp";
import ShopPage from "./pages/shop/shop.comp";
import CollectionsOverviewContainer from "./pages/collections-overview/collections-overview.container";
import CollectionContainer from "./pages/collection/collection.container";
import CheckoutPage from "./pages/checkout/checkout.comp";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="px-10 md:px-20 lg:mx-auto py-5 w-full max-w-[1290px]">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route path="/shop" element={<ShopPage />}>
          <Route path="/shop/" element={<CollectionsOverviewContainer />} />
          <Route path="/shop/:collectionId" element={<CollectionContainer />} />
        </Route>
        <Route
          exact
          path="/login"
          element={
            currentUser ? <Navigate to="/" replace={true} /> : <LoginPage />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

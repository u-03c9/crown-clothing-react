import React, { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import { dismissCartMenu } from "./redux/cart/cart.actions";

import Header from "./components/header/header.comp";
import Spinner from "./components/spinner/spinner.comp";
import ErrorBoundary from "./components/error-boundary/error-boundary.comp";

const HomePage = lazy(() => import("./pages/homepage/homepage.comp"));
const LoginPage = lazy(() => import("./pages/login/login.comp"));
const ShopPage = lazy(() => import("./pages/shop/shop.comp"));
const CollectionsOverviewContainer = lazy(() =>
  import("./pages/collections-overview/collections-overview.container")
);
const CollectionContainer = lazy(() =>
  import("./pages/collection/collection.container")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.comp"));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  window.addEventListener("click", () => {
    dispatch(dismissCartMenu());
  });

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="px-10 md:px-20 lg:mx-auto py-5 w-full max-w-[1290px]">
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
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
                currentUser ? <Navigate to="/" replace={true} /> : <LoginPage />
              }
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;

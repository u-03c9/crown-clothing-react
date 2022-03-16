import React from "react";
import { Route, Routes } from "react-router-dom";

import "./firebase/firebase.init";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createUserProfileDocument } from "./firebase/firebase.firestore";
import { onSnapshot } from "firebase/firestore";

import HomePage from "./pages/homepage/homepage.comp";
import ShopPage from "./pages/shop/shop.comp";
import Header from "./components/header/header.comp";
import LoginPage from "./pages/login/login.comp";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(
      getAuth(),
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          onSnapshot(userRef, (snapshot) => {
            this.setState(
              {
                currentUser: {
                  id: snapshot.id,
                  ...snapshot.data(),
                },
              },
              () => {
                console.log(this.state.currentUser);
              }
            );
          });
        }
        this.setState({ currentUser: userAuth });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;

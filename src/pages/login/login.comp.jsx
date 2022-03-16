import React from "react";

import SignIn from "../../components/sign-in/sign-in.comp";
import SignUp from "../../components/sign-up/sign-up.comp";

import "./login.styles.scss";

const LoginPage = () => (
  <div className="login-page">
    <SignIn />
    <SignUp />
  </div>
);

export default LoginPage;

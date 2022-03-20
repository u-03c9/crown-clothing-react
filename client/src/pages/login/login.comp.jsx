import React from "react";

import SignIn from "../../components/sign-in/sign-in.comp";
import SignUp from "../../components/sign-up/sign-up.comp";

const LoginPage = () => (
  <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-y-20 gap-x-20 mt-20">
    <SignIn />
    <SignUp />
  </div>
);

export default LoginPage;

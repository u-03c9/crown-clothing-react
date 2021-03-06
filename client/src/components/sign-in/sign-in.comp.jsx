import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions.js";

import CustomButton from "../custom-button/custom-button.comp";
import FormInput from "../form-input/form-input.comp";

const SignIn = () => {
  const dispatch = useDispatch();

  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);

    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const googleSignInHandler = () => dispatch(googleSignInStart());

  return (
    <div className="flex flex-col w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-3">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="flex flex-col md:flex-row gap-x-4 gap-y-2 justify-between">
          <CustomButton className="w-full" type="submit">
            Sign In
          </CustomButton>
          <CustomButton
            type="button"
            className="w-full"
            onClick={googleSignInHandler}
            isGoogleSignIn
          >
            Sign in with GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

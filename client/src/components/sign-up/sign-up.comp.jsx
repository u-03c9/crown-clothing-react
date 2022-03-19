import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";
import CustomButton from "../custom-button/custom-button.comp";
import FormInput from "../form-input/form-input.comp";

const SignUp = () => {
  const dispatch = useDispatch();

  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match!");
      return;
    }

    dispatch(signUpStart({ displayName, email, password }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="flex flex-col w-full max-w-sm mx-auto">
      <h2 className="font-bold text-2xl mb-3">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          onChange={handleChange}
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          onChange={handleChange}
          required
        />
        <CustomButton type="submit" className="w-full">
          SIGN UP
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;

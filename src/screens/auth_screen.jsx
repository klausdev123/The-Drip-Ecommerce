import React from "react";
import SignIn from "../components/sign-in";
import SignUp from "../components/sign-up";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn className="sign-in"></SignIn>
    <SignUp></SignUp>
  </div>
);

export default SignInAndSignUpPage;

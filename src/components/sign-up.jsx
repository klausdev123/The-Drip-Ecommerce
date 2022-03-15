import React from "react";

import FormInput from "./form-input";
import CustomButton from "./custom-button";

import { auth, createUserProfileDocument } from "../store/firebase";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      passwordMatch: true,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      displayName,
      email,
      password,
      confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      this.setState({
        passwordMatch: false,
      });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        passwordMatch: true,
      });
    } catch (error) {
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      passwordMatch,
    } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          {}
          {!passwordMatch && (
            <div className="dontmatch">Passwords Dont's Match</div>
          )}
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="confirm password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;

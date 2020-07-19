import React, { Component } from "react";

import FormInput from "./../form-input/form-input.component";

import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSignInSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I alreday have account</h2>
        <span>Sign in wih your emil and password</span>
        <form onSubmit={this.handleSignInSubmit}>
          <FormInput
            type="email"
            name="email"
            handelChange={this.handleOnChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            handelChange={this.handleOnChange}
            value={this.state.password}
            label="Password"
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;

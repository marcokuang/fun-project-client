import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../action";

class SignIn extends React.Component {
  handleOnFormSubmit = (formProps) => {
    this.props.signIn(formProps, () => {
      // return to homepage after login
      this.props.history.push("/");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      // provided by redux form
      <form onSubmit={handleSubmit(this.handleOnFormSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" type="password" component="input" />
        </fieldset>
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

const formOptions = {
  form: "signIn",
};

export default compose(connect(null, actions), reduxForm(formOptions))(SignIn);

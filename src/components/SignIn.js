import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../action";
import { Button, Label, Form } from 'semantic-ui-react';

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
      <Form onSubmit={handleSubmit(this.handleOnFormSubmit)}>
        <fieldset>
          <Label>Email</Label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <Label>Password</Label>
          <Field name="password" type="password" component="input" />
        </fieldset>
        <Button type="submit">Sign In</Button>
      </Form>
    );
  }
}

const formOptions = {
  form: "signIn",
};

export default compose(connect(null, actions), reduxForm(formOptions))(SignIn);

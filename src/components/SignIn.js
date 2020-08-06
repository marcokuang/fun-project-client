import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../action";
import { Button, Label, Form, Container } from "semantic-ui-react";

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
      <Container text>
        <Form onSubmit={handleSubmit(this.handleOnFormSubmit)}>
          <Form.Field>
            <label>Email</label>
            <Field
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Field name="password" type="password" component="input" />
          </Form.Field>
          <Button type="submit">Sign In</Button>
        </Form>
      </Container>
    );
  }
}

const formOptions = {
  form: "signIn",
};

export default compose(connect(null, actions), reduxForm(formOptions))(SignIn);

import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../action";
import { Button, Form, Container } from "semantic-ui-react";

class SignUp extends React.Component {
  handleOnFormSubmit = (formProps) => {
    this.props.signUp(formProps);
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
          <Button type="submit">Sign Up</Button>
        </Form>
      </Container>
    );
  }
}

const formOptions = {
  form: "signUp",
};

export default compose(connect(null, actions), reduxForm(formOptions))(SignUp);

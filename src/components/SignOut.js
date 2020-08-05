import React from "react";
import { connect } from "react-redux";
import * as actions from "../action";
import requireSignIn from "./requireSignIn";

class SignOut extends React.Component {
  componentDidMount() {
    this.props.signOut();
  }

  render() {
    return <div>You have successfully signed out!</div>;
  }
}

export default connect(null, actions)(requireSignIn(SignOut));
